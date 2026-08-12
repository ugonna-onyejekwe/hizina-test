import type { Metadata } from "next";

import { getPostMetadata } from "@/actions/metadata/post";
import { getPostPreview } from "@/utilities/metadata-helpers";
import { SITE_URL } from "@/lib/constants";
import { DeepLinkPreview } from "@/app/_components/deep-link-preview";

type PostPageProps = {
  params: Promise<{
    postRegion: string;
    hashPostId: string;
    userRegion: string;
    hashSystemId: string;
  }>;
};

const DEFAULT_TITLE = "Post | Hizina";

const DEFAULT_DESCRIPTION =
  "Discover posts, conversations, connections, and commerce on Hizina.";

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { postRegion, hashPostId, userRegion, hashSystemId } = await params;

  const canonicalUrl = `${SITE_URL}/p/${postRegion}/${hashPostId}/${userRegion}/${hashSystemId}`;

  const result = await getPostMetadata({
    postRegion,
    postId: hashPostId,
  });

  if (!result.data) {
    return {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,

      alternates: {
        canonical: canonicalUrl,
      },

      robots: {
        index: false,
        follow: true,
      },

      openGraph: {
        type: "article",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        url: canonicalUrl,
        siteName: "Hizina",
      },

      twitter: {
        card: "summary",
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
      },
    };
  }

  const preview = getPostPreview(result.data);

  const title = preview.title || DEFAULT_TITLE;
  const description = preview.description || DEFAULT_DESCRIPTION;

  const isVideo = preview.media?.type === "video";

  const previewImage =
    preview.media?.type === "video"
      ? preview.media.thumbnail
      : preview.media?.url;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: isVideo ? "video.other" : "article",
      title,
      description,
      url: canonicalUrl,
      siteName: "Hizina",

      ...(previewImage
        ? {
            images: [
              {
                url: previewImage,
                alt: `${preview.author || "Hizina"}'s post on Hizina`,
              },
            ],
          }
        : {}),

      ...(isVideo && preview.media?.url
        ? {
            videos: [
              {
                url: preview.media.url,
                type: "video/mp4",
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: previewImage ? "summary_large_image" : "summary",
      title,
      description,

      ...(previewImage
        ? {
            images: [previewImage],
          }
        : {}),
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { postRegion, hashPostId } = await params;

  console.log(postRegion);
  console.log(hashPostId);

  const result = await getPostMetadata({
    postRegion,
    postId: hashPostId,
  });

  console.log(result);

  const preview = result.data ? getPostPreview(result.data) : undefined;

  return <DeepLinkPreview type="post" data={preview} />;
}
