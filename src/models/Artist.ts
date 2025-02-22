export interface Artist {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: { url: string; height: number; width: number }[];
  genres: string[];
  followers: {
    href: string;
    total: 0;
  };
  popularity: number;
}
