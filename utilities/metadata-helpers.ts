import type {
  MetadataMedia,
  PostMetadata,
  ProfileMetadata,
} from "@/types/metadata";

export type DeepLinkPreviewData = {
  name: string;
  username: string;
  image?: string;
  content?: string;
  media?: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
  };
};

function parseMediaMetadata(value: string): MetadataMedia | null {
  if (!value) return null;

  try {
    return JSON.parse(value) as MetadataMedia;
  } catch {
    return null;
  }
}

function getBestMedia(
  metadata: MetadataMedia | null,
): DeepLinkPreviewData["media"] {
  if (!metadata) return undefined;

  const media = [...(metadata.resolutionCaches ?? [])]
    .filter((item) => Boolean(item.publicurl))
    .sort((a, b) => b.internetspeed - a.internetspeed)[0];

  if (!media?.publicurl) return undefined;

  return {
    type: media.stream || media.extension === "mp4" ? "video" : "image",
    url: media.publicurl,
    thumbnail: metadata.thumbnailurl || undefined,
  };
}

function getThumbnail(value: string): string | undefined {
  const metadata = parseMediaMetadata(value);

  return metadata?.thumbnailurl || undefined;
}

function getEngagementDescription(data: PostMetadata): string {
  const likes = data.likes ?? 0;
  const comments = data.comments ?? 0;
  const shares = data.shares ?? 0;

  const parts: string[] = [];

  if (likes > 0) {
    parts.push(`${likes} ${likes === 1 ? "like" : "likes"}`);
  }

  if (comments > 0) {
    parts.push(`${comments} ${comments === 1 ? "comment" : "comments"}`);
  }

  if (shares > 0) {
    parts.push(`${shares} ${shares === 1 ? "share" : "shares"}`);
  }

  if (!parts.length) {
    return `A post by ${data.profileData.name || "a Hizina user"} on Hizina.`;
  }

  return `${parts.join(", ")} — see what ${data.profileData.name || "this user"} shared on Hizina.`;
}

function getBrief(text: string, maxLength = 60): string {
  if (!text?.trim()) return "";

  const cleaned = text.trim().replace(/\s+/g, " ");

  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  return `${cleaned.slice(0, maxLength).trim()}…`;
}

export function getPostPreview(data: PostMetadata): DeepLinkPreviewData & {
  title: string;
  description: string;
  author: string;
} {
  const mediaMetadata = parseMediaMetadata(data.metaData);

  const author = data.profileData.name || "Hizina";
  const username = data.profileData.username || "user";

  const title = data.post
    ? `${getBrief(data.post)}`
    : `${author} (@${username})`;

  const description = getEngagementDescription(data);

  return {
    title,
    description,
    author,
    name: author,
    username,
    image: getThumbnail(data.profileData.profilepicture),
    media: getBestMedia(mediaMetadata),
    content: data.post || undefined,
  };
}

export function getProfilePreview(
  data: ProfileMetadata,
): DeepLinkPreviewData & {
  title: string;
  description: string;
  author: string;
} {
  const author = data.name || "Hizina";
  const username = data.username || "user";

  return {
    title: `${author} (@${username}) | Hizina`,
    description: `${author} (@${username}) on Hizina. Discover their profile, connections, conversations, and interests.`,
    author,
    name: author,
    username,
    image: getThumbnail(data.profilepicture),
  };
}
