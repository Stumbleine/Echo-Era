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
    if (token_storaged) {
      dispatch(login(token_storaged));
      navigate("/");
    }
  }, [dispatch, navigate]);

  const handleLogin = () => {
    setLoading(true);
    authenticateSpotify();
  };

  return (
    <Container>
      <Stack alignItems="center" spacing={2} justifyContent="center">
        <Typography variant="h5">Echo Era</Typography>
        <Typography variant="body1">Login to explore music</Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button variant="contained" onClick={handleLogin}>
            Login with Spotify
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default AuthPage;
