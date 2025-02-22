import { FC, memo } from "react";
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

const TrackList: FC<{ tracks: Track[] }> = memo(({ tracks }) => {
  const colors = useAlbumColors(tracks);
  const dispatch = useDispatch();

  const handleClick = (track: Track) => {
    dispatch(setFeaturedTrack(track));
    window.open(track.external_urls.spotify, "_blank");
  };

  return (
    <Box>
      <Grid2 container spacing={2}>
        {tracks.map((track) => (
          <Grid2 key={track.id} size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 2 }}>
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
                  <Typography
                    textAlign="center"
                    variant="body1"
                    color="textSecondary"
                  >
                    {track.artists[0].name}
                  </Typography>
                </CardContent>
                {}
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
});

export default TrackList;
