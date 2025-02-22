import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { resetArtists } from "../slices/artistSlice";
import { fetchArtistsThunk } from "../thunks/artistsThunk";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import ArtistsList from "./ArtistsList";

const InfiniteArtists: FC<{ query: string; market: string }> = ({
  query,
  market,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const { artists, loading, hasMore, offset } = useSelector(
    (state: RootState) => state.artists
  );

  useEffect(() => {
    dispatch(resetArtists());
    dispatch(fetchArtistsThunk({ query, market, limit: 20, offset: 0 }));
  }, [query, market, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 100 &&
        !loading &&
        hasMore
      ) {
        dispatch(fetchArtistsThunk({ query, market, limit: 20, offset }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, offset, query, market, dispatch]);

  return (
    <Box>
      <ArtistsList artists={artists} />

      {loading && (
        <Stack
          width={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 3 }}
        >
          <Typography textAlign="center">Loading more artists...</Typography>
          <CircularProgress />
        </Stack>
      )}
      {!hasMore && (
        <Typography textAlign="center">No more artists to load.</Typography>
      )}
    </Box>
  );
};

export default InfiniteArtists;
