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
  popularity: 0;
  track_number: 0;
}

export interface RecentTrack {
  track: Track;
  played_at: string;
}
