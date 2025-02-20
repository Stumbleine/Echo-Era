import { Chip, Container, Grid2, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DecadeSelector from "../components/DecadeSelector";
import CategorySelector from "../components/CategorySelector";
import { fetchTopTracksThunk } from "../thunks/tracksThunk";
import { setTracks } from "../slices/trackSlice";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import TracksGrid from "../components/TracksGrid";
import Cover from "../components/Cover";

const TracksPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { tracks, featuredTrack } = useSelector(
    (state: RootState) => state.tracks
  );

  useEffect(() => {
    dispatch(fetchTopTracksThunk());
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        {featuredTrack && <Cover featuredTrack={featuredTrack} />}
        <Stack direction="column" spacing={2} sx={{ p: 8, pt: 10, m: 0 }}>
          <CategorySelector />

          <DecadeSelector onDecadeChange={() => {}} />
          <TracksGrid tracks={tracks} />
        </Stack>
      </Container>
    </>
  );
};

export default TracksPage;
