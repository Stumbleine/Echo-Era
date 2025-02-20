export interface Album {
  id: string;
  name: string;
  images: { url: string; height: number; width: number }[];
  release_date: string;
  total_tracks: number;
}

export interface AlbumColor {
  background: string;
  text: string;
}
