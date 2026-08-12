import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    postRegion: string;
    hashPostId: string;
    userRegion: string;
    hashSystemId: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { postRegion, hashPostId, userRegion, hashSystemId } = await params;

  // TODO: Resolve the post using these parameters.
  console.log({
    postRegion,
    hashPostId,
    userRegion,
    hashSystemId,
  });

  return {
    title: "Post on Hizina",
    description:
      "Discover this post and more conversations, connections, and commerce on Hizina.",

    openGraph: {
      type: "article",
      siteName: "Hizina",
      title: "Post on Hizina",
      description:
        "Discover this post and more conversations, connections, and commerce on Hizina.",
      url: `/p/${postRegion}/${hashPostId}/${userRegion}/${hashSystemId}`,
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: "Hizina",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Post on Hizina",
      description:
        "Discover this post and more conversations, connections, and commerce on Hizina.",
      images: ["/logo.png"],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { postRegion, hashPostId, userRegion, hashSystemId } = await params;

  return <main>{/* Post UI will go here */}</main>;
}
