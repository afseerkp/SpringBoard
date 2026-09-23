import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import type { SceneId, VisualAsset } from "../../types/content.ts";
import { colors } from "../../theme/tokens.ts";
import { BackpackSvg, BooksSvg, DeskSvg, DetailSvg, ShoesSvg, StationerySvg, UniformSvg } from "./art.tsx";

const studio: Record<string, string> = {
  mist: `linear-gradient(180deg, ${colors.white} 0%, ${colors.mist} 100%)`,
  blush: `linear-gradient(165deg, ${colors.purpleSoft} 0%, ${colors.white} 55%, ${colors.goldSoft} 100%)`,
  cream: "linear-gradient(180deg, #FFF9F2 0%, #F4EEF6 100%)",
  plum: "linear-gradient(180deg, #3A1844 0%, #241028 100%)",
};

const sceneStudio: Partial<Record<SceneId, string>> = {
  "shoes-black": studio.plum,
  "shoes-brown": studio.plum,
  "shoes-pair": studio.plum,
  "school-bag": studio.blush,
  "uniform-girl": studio.cream,
  "uniform-boy": studio.cream,
  "uniform-pair": studio.cream,
};

function Frame({ children, scene, label }: { children: ReactNode; scene: SceneId; label: string }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 180,
        borderRadius: "inherit",
        background: sceneStudio[scene] ?? studio.mist,
        overflow: "hidden",
        display: "grid",
        placeItems: "center",
        p: scene.startsWith("paper") || scene.startsWith("pencil") || scene.startsWith("fabric") || scene.startsWith("stitch") ? 0 : { xs: 1, md: 2 },
      }}
      aria-label={label}
    >
      <Box sx={{ width: "100%", height: "100%" }}>{children}</Box>
    </Box>
  );
}

export function SceneArt({ scene, alt }: { scene: SceneId; alt: string }) {
  const art = (() => {
    switch (scene) {
      case "books-stack":
        return <BooksSvg title={alt} variant="stack" />;
      case "books-open":
        return <BooksSvg title={alt} variant="open" />;
      case "books-shelf":
        return <BooksSvg title={alt} variant="shelf" />;
      case "stationery-spread":
        return <StationerySvg title={alt} variant="spread" />;
      case "stationery-geometry":
        return <StationerySvg title={alt} variant="geometry" />;
      case "stationery-colors":
        return <StationerySvg title={alt} variant="colors" />;
      case "uniform-girl":
        return <UniformSvg title={alt} variant="girl" />;
      case "uniform-boy":
        return <UniformSvg title={alt} variant="boy" />;
      case "uniform-pair":
        return <UniformSvg title={alt} variant="pair" />;
      case "shoes-black":
        return <ShoesSvg title={alt} variant="black" />;
      case "shoes-brown":
        return <ShoesSvg title={alt} variant="brown" />;
      case "shoes-pair":
        return <ShoesSvg title={alt} variant="pair" />;
      case "school-desk":
      case "school-bag":
        return scene === "school-bag" ? <BackpackSvg title={alt} /> : <DeskSvg title={alt} />;
      case "paper-detail":
        return <DetailSvg title={alt} variant="paper" />;
      case "pencil-detail":
        return <DetailSvg title={alt} variant="pencil" />;
      case "fabric-detail":
        return <DetailSvg title={alt} variant="fabric" />;
      case "stitch-detail":
        return <DetailSvg title={alt} variant="stitch" />;
      default:
        return null;
    }
  })();

  return (
    <Frame scene={scene} label={alt}>
      {art}
    </Frame>
  );
}

export function VisualMedia({ visual }: { visual: VisualAsset }) {
  if (visual.type === "image") {
    return (
      <Box
        component="img"
        src={visual.src}
        alt={visual.alt}
        loading="lazy"
        decoding="async"
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "inherit",
          objectFit: visual.fit ?? "cover",
          objectPosition: visual.position ?? "center",
          display: "block",
          background: colors.white,
        }}
      />
    );
  }

  return <SceneArt scene={visual.scene} alt={visual.alt} />;
}
