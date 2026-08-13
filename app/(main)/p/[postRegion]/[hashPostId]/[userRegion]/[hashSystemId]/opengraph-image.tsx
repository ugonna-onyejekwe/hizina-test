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

/**
 * Safely fetches external images (CloudFront, S3, etc.) and converts them to Base64 Data URIs.
 * Prevents Satori/ImageResponse from throwing 500 errors if external fetch fails.
 */
async function getBase64Image(
  url: string | undefined | null,
): Promise<string | null> {
  if (!url) return null;

  // Never attempt to load video stream playlists as static images
  if (url.includes(".m3u8") || url.includes(".mp4")) return null;

  try {
    const response = await fetch(url, {
      cache: "force-cache",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) NextJS-OG-Fetcher",
      },
    });

    if (!response.ok) return null;

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = response.headers.get("content-type") || "image/jpeg";

    return `data:${mimeType};base64,${buffer.toString("base64")}`;
  } catch (error) {
    console.error("[OG Image Fetch Error]:", error);
    return null;
  }
}

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

  let isVideo = false;
  let rawBgUrl: string | undefined = undefined;

  try {
    const result = await getPostMetadata({
      postRegion,
      postId: hashPostId,
    });

    if (result?.data) {
      const preview = getPostPreview(result.data);
      isVideo = preview?.media?.type === "video";

      // Get the thumbnail for videos, or image URL for photo posts
      rawBgUrl = isVideo
        ? preview?.media?.thumbnail
        : preview?.media?.url || preview?.image;
    }
  } catch (error) {
    console.error("[OG Metadata Error]:", error);
  }

  // Convert image to Base64 server-side
  const base64BgImage = await getBase64Image(rawBgUrl);

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
      {/* Render Base64 Background Image if successfully fetched */}
      {base64BgImage ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={base64BgImage}
          alt="Thumbnail"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1280px",
            height: "720px",
            objectFit: "cover",
          }}
        />
      ) : (
        /* Fallback Dark Gradient when image is missing or fetch fails */
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1280px",
            height: "720px",
            background: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
            display: "flex",
          }}
        />
      )}

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "1280px",
          height: "720px",
          backgroundColor: "rgba(0, 0, 0, 0.35)",
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
