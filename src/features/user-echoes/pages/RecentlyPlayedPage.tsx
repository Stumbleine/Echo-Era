import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { fetchRecentlyPlayedThunk } from "../thunks/tracksThunk";
import RecentTracks from "../components/RecentTracks";
import { resetTracks } from "../slices/recentlyPlayedSlice";

const RecentlyPlayedPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const { tracks, loading } = useSelector(
    (state: RootState) => state.recentlyPlayed
  );

  useEffect(() => {
    dispatch(resetTracks());
    if (!loading) {
      dispatch(fetchRecentlyPlayedThunk({ limit: 20 }));
    }
  }, []);
  return (
    <Container maxWidth="xl">
      <Box>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Typography fontWeight="bold" variant="h4">
            Your Recently Played
          </Typography>
        </Stack>
        <RecentTracks tracks={tracks} />
      </Box>
    </Container>
  );
};

export default RecentlyPlayedPage;
