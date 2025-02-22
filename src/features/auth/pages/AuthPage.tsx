import {
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { authenticateSpotify } from "../../../api/authSpotify";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import { useNavigate } from "react-router";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token_storaged = localStorage.getItem("spotify_token");
    console.log("token_storaged", token_storaged);
    if (token_storaged) {
      dispatch(login(token_storaged));
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    setLoading(true);
    authenticateSpotify();
  };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      <Stack alignItems="center" spacing={2} justifyContent="center">
        <Typography variant="h1">Echo Era</Typography>
        <Typography variant="h6">Login to explore music</Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button
            variant="contained"
            sx={{ fontWeight: "bold" }}
            onClick={handleLogin}
          >
            Login with Spotify
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default AuthPage;
