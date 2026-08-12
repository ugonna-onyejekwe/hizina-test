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

function cleanDescription(value: string | null | undefined): string {
  if (!value?.trim()) {
    return "Discover this on Hizina.";
  }

  const text = value.trim().replace(/\s+/g, " ");

  return text.length > 160 ? `${text.slice(0, 157)}...` : text;
}

export function getPostPreview(data: PostMetadata): DeepLinkPreviewData & {
  title: string;
  description: string;
  author: string;
} {
  const mediaMetadata = parseMediaMetadata(data.metaData);

  const author = data.profileData.name || "Hizina";
  const username = data.profileData.username || "user";

  return {
    title: `${author} (@${username}) | Hizina`,
    description: cleanDescription(data.post),
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
