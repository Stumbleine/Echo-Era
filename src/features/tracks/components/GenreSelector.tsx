import { Chip, Grid2, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { fetchCategoriesThunk } from "../thunks/categoriesThunk";
import { Genre } from "../../../models/Genre";
import { GENRES } from "../../../constants/Genres";

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
        {GENRES.map((genre, index) => (
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
