import "server-only";

import type { MetadataApiResponse, PostMetadata } from "@/types/metadata";

const BASE_URL = process.env.UPLOAD_BASE_URL;
const API_KEY = process.env.HIZINA_METADATA_KEY;

type GetPostMetadataParams = {
  postRegion: string;
  postId: string;
};

type GetPostMetadataResult = {
  data: PostMetadata | null;
  error: string | null;
};

export async function getPostMetadata({
  postRegion,
  postId,
}: GetPostMetadataParams): Promise<GetPostMetadataResult> {
  if (!BASE_URL || !API_KEY) {
    return {
      data: null,
      error: "Hizina metadata configuration is missing",
    };
  }

  try {
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
      return {
        data: null,
        error: `Failed to fetch post metadata: ${response.status} ${response.statusText}`,
      };
    }

    const result: MetadataApiResponse<PostMetadata> = await response.json();

    if (!result.success || !result.data) {
      return {
        data: null,
        error: result.message || "Failed to fetch post metadata",
      };
    }

    return {
      data: result.data,
      error: null,
    };
  } catch {
    return {
      data: null,
      error: "Unable to fetch post metadata",
    };
  }
}
