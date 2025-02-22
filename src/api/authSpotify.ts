const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

export const authenticateSpotify = () => {
  const scopes = [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "user-top-read",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
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
  const accessToken = params.get("access_token");
  const expiresIn = params.get("expires_in");

  if (accessToken && expiresIn) {
    const expirationTime = Date.now() + Number(expiresIn) * 1000;
    localStorage.setItem("spotify_token", accessToken);
    localStorage.setItem("spotify_token_expiration", expirationTime.toString());
    window.history.pushState({}, "", "/");
    return accessToken;
  }

  return null;
};

const checkTokenExpiration = () => {
  const expirationTime = localStorage.getItem("spotify_token_expiration");

  if (!expirationTime || Date.now() > Number(expirationTime)) {
    localStorage.removeItem("spotify_token");
    localStorage.removeItem("spotify_token_expiration");
    return true;
  }

  return false;
};

export const getValidAccessToken = () => {
  if (checkTokenExpiration()) {
    authenticateSpotify();
    return null;
  }
  return localStorage.getItem("spotify_token");
};

const token = getAccessTokenFromUrl();

if (token) {
  localStorage.setItem("spotify_token", token);
  window.history.pushState({}, "", "/");
}
