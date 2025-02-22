export interface Album {
  id: string;
  name: string;
  images: { url: string; height: number; width: number }[];
  release_date: string;
  total_tracks: number;
  external_urls: {
    spotify: string;
  };
}

export interface AlbumColor {
  background: string;
  text: string;
}

export interface ItemAlbum {
  album: Album;
  added_at: string;
}
