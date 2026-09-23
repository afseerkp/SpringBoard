import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { layout } from "../../theme/tokens.ts";

export function PageContainer({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <Box sx={{ width: `min(100% - 40px, ${wide ? layout.wide : layout.content}px)`, mx: "auto" }}>
      {children}
    </Box>
  );
}
