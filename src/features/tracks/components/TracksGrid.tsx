import { FC, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import { Track } from "../../../models/Track";
import { useAlbumColors } from "../../../hooks/useAlbumsColors";
import { useDispatch } from "react-redux";
import { setFeaturedTrack } from "../slices/trackSlice";

const TrackList: FC<{ tracks: Track[] }> = ({ tracks }) => {
  const colors = useAlbumColors(tracks);
  const dispatch = useDispatch();

  const handleClick = (track: Track) => {
    dispatch(setFeaturedTrack(track));
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" sx={{ my: 2 }}>
        Top Songs
      </Typography>
      <Grid2 container spacing={2}>
        {tracks.map((track, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
            <Card
              sx={{
                backgroundColor: colors[track.album.images[0].url] || "white",
                transition: "background-color 0.3s ease",
                borderRadius: 5,
                color: colors[track.album.images[0].url]?.text,
              }}
            >
              <CardActionArea
                onClick={() => {
                  handleClick(track);
                }}
              >
                <CardContent>
                  <CardMedia
                    component="img"
                    src={track.album.images[0].url}
                    style={{
                      borderRadius: 25,
                    }}
                  />
                  <Typography
                    sx={{
                      mt: 2,
                    }}
                    fontWeight="bold"
                    textAlign="center"
                    variant="h6"
                  >
                    {track.name}
                  </Typography>
                  <Typography textAlign="center" variant="body1">
                    {track.artists[0].name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default TrackList;
