import { PostMetadata } from "@/types/metadata";
import "server-only";

const BASE_URL = process.env.HIZINA_METADATA_BASE_URL;
const API_KEY = process.env.HIZINA_METADATA_KEY;

type GetPostMetadataParams = {
  postRegion: string;
  postId: string;
};

export async function getPostMetadata({
  postRegion,
  postId,
}: GetPostMetadataParams): Promise<PostMetadata> {
  if (!BASE_URL || !API_KEY) {
    throw new Error("Hizina metadata configuration is missing");
  }

  const response = await fetch(`${BASE_URL}/api/metadata/post`, {
    method: "GET",
    headers: {
      accept: "*/*",
      key: API_KEY,
      postregion: postRegion,
      postid: postId,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch post metadata: ${response.status} ${response.statusText}`,
    );
  }

  const result: {
    data: PostMetadata;
    success: boolean;
    message: string;
  } = await response.json();

  if (!result.success || !result.data) {
    throw new Error(result.message || "Failed to fetch post metadata");
  }

  return result.data;
}
