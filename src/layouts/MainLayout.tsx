import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import { Link, Outlet } from "react-router";
import Page from "../shared/Page";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const MainLayout = () => {
  const { darkMode, toggleTheme } = useThemeContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <Box>logo</Box>
          <Stack
            direction="row"
            sx={{
              flexGrow: 1,
              display: "flex",
            }}
          >
            <Button component={Link} to="/" sx={{ textTransform: "none" }}>
              Home
            </Button>
            <Button
              component={Link}
              to="/artists"
              sx={{ textTransform: "none" }}
            >
              Artists
            </Button>
            <Button onClick={handleMenuOpen}>My Echoes</Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/echoes/top-songs"
              >
                Top Songs
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/echoes/top-artists"
              >
                Top Artists
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/echoes/my-playlists"
              >
                My Playlists
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/echoes/recently-played"
              >
                Recently Played
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/echoes/saved-albums"
              >
                Saved Albums
              </MenuItem>
            </Menu>
          </Stack>
          <Box
            component={IconButton}
            color="textIcon"
            size="small"
            onClick={toggleTheme}
            sx={{
              zIndex: 99,
              position: "relative",
              top: "auto",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Page>
        <Outlet />
      </Page>
    </>
  );
};

export default MainLayout;
