import {
  Button,
  Chip,
  Collapse,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DecadeSelector from "../components/DecadeSelector";
import CategorySelector from "../components/CategorySelector";
import {
  fetchRecommendationsThunk,
  fetchTopTracksThunk,
  fetchTracksWithFiltersThunk,
} from "../thunks/tracksThunk";
import { setTracks } from "../slices/trackSlice";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import TracksGrid from "../components/TracksGrid";
import Cover from "../components/Cover";
import MoodSelector from "../components/MoodSelector";

const TracksPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tracks, featuredTrack } = useSelector(
    (state: RootState) => state.tracks
  );
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    mood: "",
    category: "",
    decade: 0,
  });

  useEffect(() => {
    dispatch(fetchRecommendationsThunk());
  }, []);

  const handleDecadeChange = (decade: number) => {
    setFilters((prev) => ({ ...prev, decade }));
    dispatch(fetchTracksWithFiltersThunk(filters));
  };

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => ({ ...prev, category }));
    dispatch(fetchTracksWithFiltersThunk(filters));
  };

  const handleMoodChange = (mood: string) => {
    setFilters((prev) => ({ ...prev, mood }));
    dispatch(fetchTracksWithFiltersThunk(filters));
  };

  return (
    <>
      <Container maxWidth="xl">
        {featuredTrack && <Cover featuredTrack={featuredTrack} />}
        <Stack direction="column" spacing={2} sx={{ p: 8, pt: 10, m: 0 }}>
          <DecadeSelector onDecadeChange={handleDecadeChange} />
          <Button onClick={() => setFiltersOpen(!filtersOpen)}>
            Toggle Filters
          </Button>
          <Collapse in={filtersOpen}>
            <CategorySelector onCategoryChange={handleCategoryChange} />
            <MoodSelector onMoodChange={handleMoodChange} />
            <TracksGrid tracks={tracks} />
          </Collapse>
        </Stack>
      </Container>
    </>
  );
};

export default TracksPage;
