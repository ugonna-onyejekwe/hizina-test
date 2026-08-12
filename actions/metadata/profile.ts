import { ProfileMetadata } from "@/types/metadata";
import "server-only";

const BASE_URL = process.env.HIZINA_METADATA_BASE_URL;
const API_KEY = process.env.HIZINA_METADATA_KEY;

type GetProfileMetadataParams = {
  userRegion: string;
  userId: string;
};

export async function getProfileMetadata({
  userRegion,
  userId,
}: GetProfileMetadataParams): Promise<ProfileMetadata> {
  if (!BASE_URL || !API_KEY) {
    throw new Error("Hizina metadata configuration is missing");
  }

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
    throw new Error(
      `Failed to fetch profile metadata: ${response.status} ${response.statusText}`,
    );
  }

  const result: {
    data: ProfileMetadata;
    success: boolean;
    message: string;
  } = await response.json();

  if (!result.success || !result.data) {
    throw new Error(result.message || "Failed to fetch profile metadata");
  }

  return result.data;
}
