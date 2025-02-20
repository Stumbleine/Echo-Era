import { Chip, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import DecadeSelector from "../components/DecadeSelector";
import CategorySelector from "../components/CategorySelector";

const categories = ["Pop"];

const SongsPage = () => {
  return (
    <>
      {/*   <Cover /> */}
      <Stack
        direction="column"
        spacing={2}
        sx={{ p: 8, pt: 10, m: 0, position: "relative", zIndex: 20 }}
      >
        <CategorySelector />

        <DecadeSelector onDecadeChange={() => {}} />
      </Stack>
    </>
  );
};

export default SongsPage;
