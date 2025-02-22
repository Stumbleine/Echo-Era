import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router";
import Page from "../shared/Page";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/slices/authSlice";

const MainLayout = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "https://accounts.spotify.com/en/logout";
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          <Typography fontWeight="bold" variant="h5" sx={{ mr: 2 }}>
            Echo Era
          </Typography>
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
          <Button variant="contained" size="small" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Page>
        <Outlet />
      </Page>
    </>
  );
};

export default MainLayout;
