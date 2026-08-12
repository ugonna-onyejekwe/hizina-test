import type { MetadataMedia } from "@/types/metadata";

export function parseMediaMetadata(value: string): MetadataMedia {
  try {
    return JSON.parse(value) as MetadataMedia;
  } catch {
    throw new Error("Invalid media metadata");
  }
}
