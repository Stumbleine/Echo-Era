import { FC } from "react";
import { Track } from "../../../models/Track";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

const Cover: FC<{ featuredTrack: Track }> = ({ featuredTrack }) => {
  return (
    <Paper sx={{ height: 400, bgcolor: "background.paper" }}>
      <Stack
        direction="column"
        spacing={2}
        sx={{ p: 3 }}
        alignContent="end"
        justifyContent="end"
        height={1}
      >
        <Stack direction="row" spacing={2}>
          <Box
            component="img"
            src={featuredTrack.album.images[0].url}
            width={200}
            height="auto"
            style={{ borderRadius: 20 }}
          ></Box>
          <Box>
            <Typography fontWeight="bold" variant="h4">
              {featuredTrack.name}
            </Typography>
            <Typography gutterBottom fontWeight="bold" variant="h6">
              {featuredTrack.artists[0].name}
            </Typography>
            <Typography gutterBottom>{featuredTrack.album.name}</Typography>
            <Typography gutterBottom>{featuredTrack.duration_ms}</Typography>
            <Button variant="contained">Play on Spotify</Button>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Cover;
