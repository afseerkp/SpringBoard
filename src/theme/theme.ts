import { createTheme } from "@mui/material/styles";
import { colors, fontDisplay, fontFamily } from "./tokens.ts";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.purple, contrastText: "#ffffff" },
    secondary: { main: colors.champagne, contrastText: colors.ink },
    text: { primary: colors.ink, secondary: colors.muted },
    background: { default: colors.bg, paper: colors.paper },
    divider: colors.border,
  },
  typography: {
    fontFamily,
    h1: { fontFamily: fontDisplay },
    h2: { fontFamily: fontDisplay },
    h3: { fontFamily: fontDisplay },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 18 },
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
