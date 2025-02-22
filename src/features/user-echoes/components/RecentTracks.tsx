import { FC, memo } from "react";
import { RecentTrack } from "../../../models/Track";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";

const RecentTracks: FC<{ tracks: RecentTrack[] }> = memo(({ tracks }) => {
  return (
    <Stack>
      {tracks.map((recent) => (
        <Card
          sx={{
            borderRadius: 5,
          }}
        >
          <CardActionArea
            onClick={() => {
              window.open(recent.track.external_urls.spotify, "_blank");
            }}
          >
            <CardContent component={Stack} direction="row" spacing={2}>
              <CardMedia
                component="img"
                src={recent.track.album.images[0].url}
                style={{
                  borderRadius: 25,
                  width: 80,
                  height: 80,
                }}
              />
              <Box>
                <Typography fontWeight="bold" textAlign="start" variant="h6">
                  {recent.track.name}
                </Typography>
                <Typography
                  color="textSecondary"
                  textAlign="start"
                  variant="body1"
                >
                  {recent.track.artists[0].name}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Stack>
  );
});

export default RecentTracks;
