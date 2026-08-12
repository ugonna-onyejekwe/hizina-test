import type { Metadata } from "next";

import { getProfileMetadata } from "@/actions/metadata/profile";
import { getProfilePreview } from "@/utilities/metadata-helpers";
import { SITE_URL } from "@/lib/constants";
import { DeepLinkPreview } from "@/app/_components/deep-link-preview";

type ProfilePageProps = {
  params: Promise<{
    userRegion: string;
    hashUserId: string;
  }>;
};

const DEFAULT_TITLE = "Profile | Hizina";

const DEFAULT_DESCRIPTION =
  "Discover people, communities, conversations, and commerce on Hizina.";

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { userRegion, hashUserId } = await params;

  const canonicalUrl = `${SITE_URL}/u/${userRegion}/${hashUserId}`;

  const result = await getProfileMetadata({
    userRegion,
    userId: hashUserId,
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
        type: "profile",
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

  const preview = getProfilePreview(result.data);

  const title = preview.title || DEFAULT_TITLE;
  const description = preview.description || DEFAULT_DESCRIPTION;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: false,
      follow: true,
    },

    openGraph: {
      type: "profile",
      title,
      description,
      url: canonicalUrl,
      siteName: "Hizina",

      ...(preview.image
        ? {
            images: [
              {
                url: preview.image,
                alt: `${preview.author || "Hizina"}'s profile picture`,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: preview.image ? "summary_large_image" : "summary",
      title,
      description,

      ...(preview.image
        ? {
            images: [preview.image],
          }
        : {}),
    },
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { userRegion, hashUserId } = await params;

  const result = await getProfileMetadata({
    userRegion,
    userId: hashUserId,
  });

  const preview = result.data ? getProfilePreview(result.data) : undefined;

  return <DeepLinkPreview type="profile" data={preview} />;
}
