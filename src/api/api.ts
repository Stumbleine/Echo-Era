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