import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopTracksThunk } from "../thunks/tracksThunk";
import { Box, Container, Stack, Typography } from "@mui/material";
import TrackList from "../../tracks/components/TracksList";
import { resetTracks } from "../slices/topTracksSlice";

const TopTracksPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const { topTracks, loading } = useSelector(
    (state: RootState) => state.topTracks
  );

  useEffect(() => {
    dispatch(resetTracks());
    if (!loading) {
      dispatch(fetchTopTracksThunk());
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Box>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Typography fontWeight="bold" variant="h4">
            Your Top Songs
          </Typography>
        </Stack>
        <TrackList tracks={topTracks} />
      </Box>
    </Container>
  );
};

export default TopTracksPage;
