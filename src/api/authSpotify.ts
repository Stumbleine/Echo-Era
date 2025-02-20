const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

export const authenticateSpotify = () => {
  const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "user-top-read", // ← Permite obtener los tracks/artistas más escuchados
    "user-read-recently-played", // ← Permite obtener el historial de reproducción
    "user-read-playback-state", // ← Permite obtener info de la reproducción actual
    "user-modify-playback-state", // ← Permite controlar la reproducción
  ].join(" ");

  const authUrl =
    `https://accounts.spotify.com/authorize?` +
    `client_id=${CLIENT_ID}&` +
    `response_type=token&` +
    `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
    `scope=${encodeURIComponent(scopes)}`;

  window.location.href = authUrl;
};

export const getAccessTokenFromUrl = () => {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  return params.get("access_token");
};

const token = getAccessTokenFromUrl();

if (token) {
  localStorage.setItem("spotify_token", token);
  window.history.pushState({}, "", "/");
}
