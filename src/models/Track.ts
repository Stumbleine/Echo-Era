import { Album } from "./Album";
import { Artist } from "./Artist";

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: Album;
  duration_ms: number;
  preview_url: string | null;
  external_urls: {
    spotify: string;
  };
}



