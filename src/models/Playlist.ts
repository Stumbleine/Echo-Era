import { Track } from "./Track";

export interface Playlist {
  id: string;
  name: string;
  images: { url: string; height: number; width: number }[];
  public: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };

  tracks: {
    items: Track[];
    total: number;
  };
}
