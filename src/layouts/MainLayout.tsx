import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import { Outlet } from "react-router";
import Page from "../shared/Page";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainLayout = () => {
  const { darkMode, toggleTheme } = useThemeContext();

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
            <Button>Home</Button>
            <Button>Artists</Button>
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
