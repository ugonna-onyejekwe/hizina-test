import "server-only";

import type { MetadataApiResponse, ProfileMetadata } from "@/types/metadata";

const BASE_URL = process.env.UPLOAD_BASE_URL;
const API_KEY = process.env.HIZINA_METADATA_KEY;

type GetProfileMetadataParams = {
  userRegion: string;
  userId: string;
};

type GetProfileMetadataResult = {
  data: ProfileMetadata | null;
  error: string | null;
};

export async function getProfileMetadata({
  userRegion,
  userId,
}: GetProfileMetadataParams): Promise<GetProfileMetadataResult> {
  if (!BASE_URL || !API_KEY) {
    return {
      data: null,
      error: "Hizina metadata configuration is missing",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/api/metadata/profile`, {
      method: "GET",
      headers: {
        accept: "*/*",
        key: API_KEY,
        userregion: userRegion,
        userid: userId,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        data: null,
        error: `Failed to fetch profile metadata: ${response.status} ${response.statusText}`,
      };
    }

    const result: MetadataApiResponse<ProfileMetadata> = await response.json();

    if (!result.success || !result.data) {
      return {
        data: null,
        error: result.message || "Failed to fetch profile metadata",
      };
    }

    return {
      data: result.data,
      error: null,
    };
  } catch {
    return {
      data: null,
      error: "Unable to fetch profile metadata",
    };
  }
}
