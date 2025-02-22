import { FC, memo } from "react";
import { Artist } from "../../../models/Artist";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

const ArtistsList: FC<{ artists: Artist[] }> = memo(({ artists }) => {
  return (
    <Grid2 container spacing={2}>
      {artists.map((artist) => (
        <Grid2 key={artist.id} size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 2 }}>
          <Card
            sx={{
              borderRadius: 5,
            }}
          >
            <CardActionArea
              onClick={() => {
                window.open(artist.external_urls.spotify, "_blank");
              }}
            >
              <CardContent>
                <Box
                  style={{
                    width: "100%",
                    aspectRatio: "1/1",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    src={artist.images[0]?.url}
                    alt={artist.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    mt: 2,
                  }}
                  fontWeight="bold"
                  textAlign="center"
                  variant="h6"
                >
                  {artist.name}
                </Typography>
                <Typography
                  color="textSecondary"
                  textAlign="center"
                  variant="body1"
                >
                  followers: {artist.followers.total}
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

export default ArtistsList;
