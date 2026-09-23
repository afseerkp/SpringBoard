import { createTheme } from "@mui/material/styles";
import { colors, fontFamily } from "./tokens.ts";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.purple, contrastText: "#ffffff" },
    secondary: { main: colors.gold, contrastText: colors.ink },
    text: { primary: colors.ink, secondary: colors.muted },
    background: { default: colors.bg, paper: colors.white },
    divider: colors.border,
  },
  typography: {
    fontFamily,
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 22 },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 768, lg: 1040, xl: 1440 },
  },
  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.bg,
          color: colors.ink,
        },
      },
    },
  },
});
