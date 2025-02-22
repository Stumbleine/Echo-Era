import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import { FC, memo } from "react";
import { Playlist } from "../../../models/Playlist";

const Playlists: FC<{ playlists: Playlist[] }> = memo(({ playlists }) => {
  return (
    <Grid2 container spacing={2}>
      {playlists.map((playlist) => (
        <Grid2 key={playlist.id} size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 2 }}>
          <Card
            sx={{
              borderRadius: 5,
            }}
          >
            <CardActionArea
              onClick={() => {
                window.open(playlist.external_urls.spotify, "_blank");
              }}
            >
              <CardContent>
                <CardMedia
                  component="img"
                  src={playlist.images[0]?.url}
                  alt={playlist.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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
                  {playlist.name}
                </Typography>
              </CardContent>
              {}
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
});

export default Playlists;
