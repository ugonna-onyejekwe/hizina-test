export type MetadataResolutionCache = {
  internetspeed: number;
  publicurl: string;
  extension: string;
  stream: boolean;
  region: string;
};

export type MetadataMedia = {
  thumbnailurl: string;
  resolutionCaches: MetadataResolutionCache[];
};

export type ProfileMetadata = {
  name: string;
  levels: string;
  username: string;
  streamisstreaming: boolean;
  batch: string;
  profilepicture: string;
  pronoun: string | null;
  followers: number;
  following: number;
  subscribers: number;
  numberofposts: number;
  isPostStreak: boolean;
  isMomentStreak: boolean;
};

export type PostMetadata = {
  profileData: ProfileMetadata;
  metaData: string;
  likes: number;
  comments: number;
  replies: number;
  shares: number;
  seen: number;
  saved: number;
  post: string;
  gifts: number;
};
