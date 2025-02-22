import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import { FC, memo } from "react";
import { ItemAlbum } from "../../../models/Album";
import moment from "moment";

const AlbumsList: FC<{ albums: ItemAlbum[] }> = memo(({ albums }) => {
  return (
    <Grid2 container spacing={2}>
      {albums.map((it) => (
        <Grid2 key={it.album.id} size={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 2 }}>
          <Card
            sx={{
              borderRadius: 5,
            }}
          >
            <CardActionArea
              onClick={() => {
                window.open(it.album.external_urls.spotify, "_blank");
              }}
            >
              <CardContent>
                <CardMedia
                  component="img"
                  src={it.album.images[0]?.url}
                  alt={it.album.name}
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
                  {it.album.name}
                </Typography>
                <Typography
                  color="textSecondary"
                  textAlign="center"
                  variant="body1"
                >
                  {moment(it.album.release_date, "YYYY-MM-DD").format(
                    "MMM DD YYYY"
                  )}
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

export default AlbumsList;
