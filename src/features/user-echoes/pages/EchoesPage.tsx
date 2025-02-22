import { Box, Stack, Typography } from "@mui/material";
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
      const TOTAL_PAGES = 5;
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
        const nextPage = (pages[pages.length - 1] % TOTAL_PAGES) + 1;
        setPages((prev) => [...prev.slice(1), nextPage]);
        loadPage(nextPage);
      }

      if (scrollTop <= 100 && !loading) {
        const prevPage = pages[0] === 1 ? TOTAL_PAGES : pages[0] - 1;
        setPages((prev) => [prevPage, ...prev.slice(0, -1)]);
        loadPage(prevPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pages, loading]);

  return (
    <Box sx={{ mt: 8 }}>
      {pages.map((page) => (
        <Stack key={page} sx={{ marginBottom: 4 }}>
          {page === 1 && <TopTracksPage />}
          {page === 2 && <TopArtistsPage />}
          {page === 3 && <PlaylistsPage />}
          {page === 4 && <RecentlyPlayedPage />}
          {page === 5 && <AlbumsPage />}
        </Stack>
      ))}
      {loading && <Typography textAlign="center">Loading...</Typography>}
    </Box>
  );
};

export default EchoesPage;
