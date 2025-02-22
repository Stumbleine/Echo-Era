import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const sharedPalette = {
  secondary: {
    main: colors.skyMain,
    light: colors.skyLight,
    dark: colors.skyDark,
    contrastText: colors.textPrimaryLight,
  },
  error: {
    main: colors.coralMain,
    light: colors.coralLight,
    dark: colors.coralDark,
    contrastText: "#ffffff",
  },
  warning: {
    main: colors.orangeMain,
    light: colors.orangeLight,
    dark: colors.orangeDark,
    contrastText: colors.textPrimaryLight,
  },
  success: {
    main: colors.greenMain,
    light: colors.greenLight,
    dark: colors.greenDark,
    contrastText: colors.textPrimaryLight,
  },
  divider: colors.dividerNeutral,
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.aquaMain,
      light: colors.aquaLight,
      dark: colors.aquaDark,
      contrastText: colors.textPrimaryLight,
    },
    background: {
      default: colors.bgDarkDefault,
      paper: colors.bgDarkPaper,
    },
    text: {
      primary: colors.textPrimaryDark,
      secondary: colors.textSecondaryDark,
      disabled: colors.textDisabledDark,
    },
    ...sharedPalette,
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
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
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
            backgroundColor: "rgba(28, 39, 69, 0.8)",
            color: "white",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bgDarkDefault,
          color: colors.textPrimaryDark,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.aquaDark,
          color: colors.textPrimaryLight,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.4,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(16, 23, 42,0.5)",
          backdropFilter: "blur(2px)",
        },
      },
    },
  },
});

export { darkTheme };
