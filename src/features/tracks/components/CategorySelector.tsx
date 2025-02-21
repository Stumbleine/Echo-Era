import { Chip, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { AppDispatch } from "../../../store/store";
import { fetchCategoriesThunk } from "../thunks/categoriesThunk";
import { Category } from "../../../models/Category";

const CategorySelector: React.FC<{
  onCategoryChange: (category: string) => void;
}> = ({ onCategoryChange }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, loading, error } = useSelector(
    (state: RootState) => state.categories
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const handleCategoryClick = (category: string) => {
    const newCategory = category === selectedCategory ? "" : category;
    setSelectedCategory(newCategory);
    onCategoryChange(newCategory);
  };

  return (
    <>
      <Typography
        fontWeight="bold"
        variant="body1"
        sx={{ lineHeight: 1.4 }}
        gutterBottom
      >
        Select Categories
      </Typography>
      {loading ? (
        <Typography variant="body2">Loading categories...</Typography>
      ) : error ? (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      ) : (
        <Grid2 container spacing={1}>
          {categories.map((category, index) => (
            <Grid2 key={index}>
              <Chip
                size="small"
                label={category?.name}
                clickable
                color={selectedCategory === category.id ? "primary" : "default"}
                onClick={() => handleCategoryClick(category.id)}
              />
            </Grid2>
          ))}
        </Grid2>
      )}
    </>
  );
};

export default CategorySelector;
