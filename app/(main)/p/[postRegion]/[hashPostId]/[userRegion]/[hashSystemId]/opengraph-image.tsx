// app/p/[postRegion]/[hashPostId]/[userRegion]/[hashSystemId]/opengraph-image.tsx

import { getPostMetadata } from "@/actions/metadata/post";
import { getPostPreview } from "@/utilities/metadata-helpers";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Post Preview";
export const size = {
  width: 1280,
  height: 720,
};
export const contentType = "image/png";

type Props = {
  params: Promise<{
    postRegion: string;
    hashPostId: string;
    userRegion: string;
    hashSystemId: string;
  }>;
};

export default async function Image({ params }: Props) {
  const { postRegion, hashPostId } = await params;

  const result = await getPostMetadata({
    postRegion,
    postId: hashPostId,
  });

  const preview = result?.data ? getPostPreview(result.data) : null;
  const isVideo = preview?.media?.type === "video";

  console.log(result);
  console.log(preview);
  console.log(isVideo);

  const bgImage = isVideo
    ? preview?.media?.thumbnail
    : preview?.media?.url || preview?.image;

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090b",
        position: "relative",
      }}
    >
      {/* Use explicit <img> tag instead of CSS backgroundImage */}
      {bgImage && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={bgImage}
          alt="Thumbnail"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Dark Tint Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          display: "flex",
        }}
      />

      {/* Play Button Overlay */}
      {isVideo && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "130px",
            height: "130px",
            borderRadius: "65px",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            border: "4px solid #ffffff",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.5)",
          }}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "8px" }}
          >
            <path d="M8 5V19L19 12L8 5Z" fill="#ffffff" />
          </svg>
        </div>
      )}
    </div>,
    {
      ...size,
    },
  );
}
