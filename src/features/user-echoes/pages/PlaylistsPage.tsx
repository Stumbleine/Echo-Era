import { Box, Container, Stack, Typography } from "@mui/material";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Playlists from "../components/Playlists";
import { fetchUserPlaylistsThunk } from "../thunks/playlistsThunk";
import { resetPlaylists } from "../slices/userPlaylistsSlice";

const PlaylistsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const { playlists, loading } = useSelector(
    (state: RootState) => state.userPlaylists
  );

  useEffect(() => {
    dispatch(resetPlaylists());
    if (!loading) {
      dispatch(fetchUserPlaylistsThunk({ limit: 20 }));
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Box>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Typography fontWeight="bold" variant="h4">
            Your Playlists
          </Typography>
        </Stack>
        <Playlists playlists={playlists} />
      </Box>
    </Container>
  );
};

export default PlaylistsPage;
