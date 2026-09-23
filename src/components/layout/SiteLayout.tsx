import Box from "@mui/material/Box";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import { colors } from "../../theme/tokens.ts";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header.tsx";

export function SiteLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Box
        component="a"
        href="#main"
        sx={{
          position: "absolute",
          left: 12,
          top: -80,
          zIndex: 80,
          background: colors.ink,
          color: colors.white,
          px: 2,
          py: 1,
          borderRadius: "999px",
          "&:focus": { top: 12 },
        }}
      >
        Skip to content
      </Box>
      <Header />
      <Box component="main" id="main">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </>
  );
}

function PageLoader() {
  return (
    <Box
      role="status"
      aria-label="Loading"
      sx={{ minHeight: "100vh", display: "grid", placeItems: "center", background: colors.plum }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.12)",
          borderTopColor: colors.champagne,
          animation: "sb-spin 0.9s linear infinite",
          "@keyframes sb-spin": { to: { transform: "rotate(360deg)" } },
        }}
      />
    </Box>
  );
}
