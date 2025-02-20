export const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";

export const getHeaders = () => {
  const token = localStorage.getItem("spotify_token"); 
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};



