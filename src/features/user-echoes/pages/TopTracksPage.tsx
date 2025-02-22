import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopTracksThunk } from "../thunks/tracksThunk";
import { Box, Container, Stack, Typography } from "@mui/material";
import TrackList from "../../tracks/components/TracksList";

const TopTracksPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const { topTracks } = useSelector((state: RootState) => state.topTracks);

  useEffect(() => {
    dispatch(fetchTopTracksThunk());
  }, []);
  return (
    <Container>
      <Box>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Typography fontWeight="bold" variant="h4">
            Your Top Artists
          </Typography>
        </Stack>
        <TrackList tracks={topTracks} />
      </Box>
    </Container>
  );
};

export default TopTracksPage;
