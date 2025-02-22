import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { fetchSavedAlbumsThunk } from "../thunks/albumsThunk";
import { Box, Container, Stack, Typography } from "@mui/material";
import AlbumsList from "../components/AlbumsList";
import { resetAlbums } from "../slices/albumSlice";

const AlbumsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const { albums, loading } = useSelector((state: RootState) => state.albums);

  useEffect(() => {
    dispatch(resetAlbums());
    if (!loading) {
      dispatch(fetchSavedAlbumsThunk({ limit: 20 }));
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Box>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Typography fontWeight="bold" variant="h4">
            Your Saved Albums
          </Typography>
        </Stack>
        <AlbumsList albums={albums} />
      </Box>
    </Container>
  );
};

export default AlbumsPage;
