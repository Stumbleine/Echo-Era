import { FC, useEffect } from "react";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { fetchTracksWithFiltersThunk } from "../thunks/tracksThunk";
import TrackList from "./TracksList";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { resetTracks } from "../slices/trackSlice";

const InfiniteTracks: FC<{ genre: string; decade: number }> = ({
  genre,
  decade,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const { tracks, loading, hasMore, offset } = useSelector(
    (state: RootState) => state.tracks
  );

  useEffect(() => {
    dispatch(resetTracks());
    dispatch(fetchTracksWithFiltersThunk({ genre, decade, offset: 0 }));
  }, [genre, decade]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 100 &&
        !loading &&
        hasMore
      ) {
        dispatch(fetchTracksWithFiltersThunk({ genre, decade, offset }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, offset, genre, decade]);

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ my: 2 }}>
        Songs
      </Typography>
      <TrackList tracks={tracks} />
      {loading && (
        <Stack
          width={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 3 }}
        >
          <Typography textAlign="center">Loading more tracks...</Typography>
          <CircularProgress />
        </Stack>
      )}
      {!hasMore && (
        <Typography sx={{ py: 2 }} textAlign="center">
          No more tracks to load.
        </Typography>
      )}
    </Box>
  );
};

export default InfiniteTracks;
