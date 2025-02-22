import { Chip, Grid2, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { fetchCategoriesThunk } from "../thunks/categoriesThunk";
import { Genre } from "../../../models/Genre";

const genres: Genre[] = [
  { id: "all", name: "All" },
  { id: "pop", name: "Pop" },
  { id: "rock", name: "Rock" },
  { id: "hip-hop", name: "Hip-Hop" },
  { id: "electronic", name: "Electronic" },
  { id: "jazz", name: "Jazz" },
  { id: "classical", name: "Classical" },
  { id: "country", name: "Country" },
  { id: "reggae", name: "Reggae" },
  { id: "blues", name: "Blues" },
  { id: "metal", name: "Metal" },
  { id: "indie", name: "Indie" },
  { id: "r-n-b", name: "R&B" },
  { id: "latin", name: "Latin" },
  { id: "k-pop", name: "K-Pop" },
  { id: "edm", name: "EDM" },
  { id: "folk", name: "Folk" },
  { id: "soul", name: "Soul" },
  { id: "funk", name: "Funk" },
  { id: "punk", name: "Punk" },
  { id: "ambient", name: "Ambient" },
];

const GenreSelector: React.FC<{
  onGenreChange: (genre: string) => void;
}> = ({ onGenreChange }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedGenre, setSelectedGenre] = useState<string>("All");

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const handleGenreClick = (genre: Genre) => {
    setSelectedGenre(genre.id);
    onGenreChange(genre.name);
  };

  return (
    <Stack direction="column" spacing={2}>
      <Typography
        fontWeight="bold"
        variant="h6"
        sx={{ lineHeight: 1.4 }}
        gutterBottom
      >
        Select Genre
      </Typography>

      <Grid2 container spacing={1}>
        {genres.map((genre, index) => (
          <Grid2 key={index}>
            <Chip
              size="small"
              label={genre.name}
              clickable
              sx={{
                bgcolor:
                  selectedGenre === genre.id ? "secondary.main" : "default",
              }}
              onClick={() => handleGenreClick(genre)}
            />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};

export default GenreSelector;
