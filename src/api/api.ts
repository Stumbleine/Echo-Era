import { Track } from "../models/Track";
import { getHeaders, SPOTIFY_API_BASE_URL } from "./apiConfig";

export const fetchUserProfile = async () => {
  const response = await fetch(`${SPOTIFY_API_BASE_URL}/me`, {
    headers: getHeaders(),
  });
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${SPOTIFY_API_BASE_URL}/browse/categories`, {
    headers: getHeaders(),
  });
  return response.json();
};

export const fetchTrackRecommendations = async () => {
  const topTracks = await fetchTopTracks();

  const seedTracks = topTracks.items
    .slice(0, 5)
    .map((track: Track) => track.id)
    .join(",");

  const response = await fetch(
    `${SPOTIFY_API_BASE_URL}/recommendations?seed_tracks=${seedTracks}`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching tracks");
  }

  return response.json();
};

export const fetchTracksWithFilters = async (
  genre: string | null,
  decade: number | null,
  limit: number = 20,
  offset: number = 0
) => {
  let query = "";

  if (genre && genre !== "All") {
    query += `genre:${genre} `;
  }

  if (decade && decade !== 0) {
    const startYear = decade;
    const endYear = decade + 9;
    query += `year:${startYear}-${endYear} `;
  }

  query = query.trim();

  if (!query) {
    query = "*";
  }

  const response = await fetch(
    `${SPOTIFY_API_BASE_URL}/search?q=${encodeURIComponent(
      query
    )}&type=track&limit=${limit}&offset=${offset}`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching tracks");
  }

  return response.json();
};

export const fetchSearchTracks = async (query: string) => {
  const response = await fetch(
    `${SPOTIFY_API_BASE_URL}/search?q=${query}&type=track`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching tracks");
  }

  return response.json();
};

export const fetchArtistsWithFilters = async (
  query: string,
  market: string,
  limit: number = 20,
  offset: number = 0
) => {
  let queryEncoded =
    query === "" ? encodeURIComponent("*") : encodeURIComponent(query);

  let url = `${SPOTIFY_API_BASE_URL}/search?q=${queryEncoded}&type=artist`;

  if (market && market !== "All") {
    url += `&market=${market}`;
  }

  const response = await fetch((url += `&limit=${limit}&offset=${offset}`), {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Error fetching artists");
  }

  return response.json();
};

export const fetchTopTracks = async () => {
  const response = await fetch(`${SPOTIFY_API_BASE_URL}/me/top/tracks`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Error fetching tracks");
  }

  return response.json();
};

export const fetchTopArtists = async () => {
  const response = await fetch(`${SPOTIFY_API_BASE_URL}/me/top/artists`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Error fetching tracks");
  }

  return response.json();
};

export const fetchUserPlaylists = async (
  limit: number = 20,
  offset: number = 0
) => {
  const response = await fetch(
    `${SPOTIFY_API_BASE_URL}/me/playlists?limit=${limit}&offset=${offset}`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching user playlists");
  }

  return response.json();
};

export const fetchSavedAlbums = async (
  limit: number = 20,
  offset: number = 0
) => {
  const response = await fetch(
    `${SPOTIFY_API_BASE_URL}/me/albums?limit=${limit}&offset=${offset}`,
    {
      headers: getHeaders(),
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching saved albums");
  }

  return response.json();
};

export const fetchRecentlyPlayed = async (
  limit: number = 20,
  after?: number
) => {
  const url = after
    ? `${SPOTIFY_API_BASE_URL}/me/player/recently-played?limit=${limit}&after=${after}`
    : `${SPOTIFY_API_BASE_URL}/me/player/recently-played?limit=${limit}`;

  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Error fetching recently played tracks");
  }

  return response.json();
};
