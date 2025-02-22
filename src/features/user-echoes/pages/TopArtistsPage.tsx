import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import ArtistsList from "../../artists/components/ArtistsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopArtistsThunk } from "../thunks/artistsThunk";
import { AppDispatch, RootState } from "../../../store/store";
import { resetArtists } from "../slices/topArtistsSlice";

const TopArtistsPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const { topArtists, loading } = useSelector(
    (state: RootState) => state.topArtists
  );

  useEffect(() => {
    dispatch(resetArtists());
    if (!loading) {
      dispatch(fetchTopArtistsThunk());
    }
  }, []);
  return (
    <Container maxWidth="xl">
      <Box>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Typography fontWeight="bold" variant="h4">
            Your Top Artists
          </Typography>
        </Stack>
        <ArtistsList artists={topArtists} />
      </Box>
    </Container>
  );
};

export default TopArtistsPage;
