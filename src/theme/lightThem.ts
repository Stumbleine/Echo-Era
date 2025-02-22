import { createTheme } from "@mui/material";
import { colors } from "./colors";
import { sharedPalette } from "./darkTheme";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.aquaDark,
      light: colors.aquaMain,
      dark: colors.aquaDark2,
      contrastText: colors.textPrimaryLight,
    },
    background: {
      default: colors.bgLightDefault,
      paper: colors.bgLightPaper,
    },
    text: {
      primary: colors.textPrimaryLight,
      secondary: colors.textSecondaryLight,
      disabled: colors.textDisabledLight,
    },
    ...sharedPalette,
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    body1: { fontSize: "1rem", fontWeight: 500 },
    body2: { fontSize: "0.875rem", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "none",
          borderRadius: "7px",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bgLightPaper,
          color: colors.textPrimaryLight,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.aquaMain,
          color: colors.textPrimaryLight,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(249, 249, 249, 0.5)",
          backdropFilter: "blur(2px)",
          position: "sticky",
        },
      },
    },
  },
});
export { lightTheme };
