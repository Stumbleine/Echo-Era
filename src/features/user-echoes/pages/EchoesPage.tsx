import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TopTracksPage from "./TopTracksPage";
import TopArtistsPage from "./TopArtistsPage";
import PlaylistsPage from "./PlaylistsPage";
import RecentlyPlayedPage from "./RecentlyPlayedPage";
import AlbumsPage from "./AlbumsPage";

const EchoesPage = () => {
  const [pages, setPages] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);

  const loadPage = (page: number) => {
    console.log(page);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
        const nextPage = pages[pages.length - 1] + 1;
        setPages((prev) => [...prev.slice(1), nextPage]);
        loadPage(nextPage);
      }

      if (scrollTop <= 100 && !loading && pages[0] > 1) {
        const prevPage = pages[0] - 1;
        setPages((prev) => [prevPage, ...prev.slice(0, -1)]);
        loadPage(prevPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pages, loading]);

  return (
    <Box>
      {pages.map((page) => (
        <Box key={page} sx={{ marginBottom: 4 }}>
          <Typography variant="h4" gutterBottom>
            Page {page}
          </Typography>
          {page === 1 && <TopTracksPage />}
          {page === 2 && <TopArtistsPage />}
          {page === 3 && <PlaylistsPage />}
          {page === 4 && <RecentlyPlayedPage />}
          {page === 5 && <AlbumsPage />}
        </Box>
      ))}
      {loading && <Typography textAlign="center">Loading...</Typography>}
    </Box>
  );
};

export default EchoesPage;
