import { Button, Collapse, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import DecadeSelector from "../components/DecadeSelector";

import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import Cover from "../components/Cover";
import GenreSelector from "../components/GenreSelector";
import InfiniteTracks from "../components/InfiniteTracks";

const TracksPage = () => {
  const { featuredTrack } = useSelector((state: RootState) => state.tracks);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    genre: "",
    decade: 0,
  });

  const handleDecadeChange = (decade: number) => {
    setFilters((prev) => ({ ...prev, decade }));
  };

  const handleGenreChange = (genre: string) => {
    setFilters((prev) => ({ ...prev, genre }));
  };

  return (
    <>
      <Container maxWidth="xl">
        {featuredTrack && <Cover featuredTrack={featuredTrack} />}
        <Stack direction="column" spacing={2} sx={{ p: 8, pt: 10, m: 0 }}>
          <Typography fontWeight="bold" variant="h3" textAlign="center">
            Explore music through the decades
          </Typography>
          <DecadeSelector onDecadeChange={handleDecadeChange} />
          <Button onClick={() => setFiltersOpen(!filtersOpen)}>
            Toggle More Filters
          </Button>
          <Collapse in={filtersOpen}>
            <GenreSelector onGenreChange={handleGenreChange} />
          </Collapse>
          <InfiniteTracks genre={filters.genre} decade={filters.decade} />
        </Stack>
      </Container>
    </>
  );
};

export default TracksPage;
