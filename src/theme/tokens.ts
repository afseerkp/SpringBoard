/**
 * SpringBoard premium design tokens.
 * Brand purple and orange come from the logo; the deep aubergine and
 * champagne tones give the site its premium, editorial feel.
 */
export const colors = {
  // Brand
  purple: "#9F337E",
  purpleMid: "#B8458F",
  purpleDeep: "#6E2156",
  purpleSoft: "#F5ECF2",
  gold: "#F4A030",
  goldDeep: "#B9771A",
  goldSoft: "#FBF3E4",
  champagne: "#E4BC7A",
  champagneSoft: "#F3E3C4",

  // Neutrals
  ink: "#170B1B",
  muted: "#6A6170",
  subtle: "#8F8794",
  bg: "#FAF7F2",
  ivory: "#FAF7F2",
  paper: "#FFFDF9",
  sand: "#F1EBE2",
  white: "#FFFFFF",
  mist: "#F6F2EC",
  border: "rgba(23, 11, 27, 0.09)",
  borderStrong: "rgba(23, 11, 27, 0.16)",
  glass: "rgba(255, 253, 249, 0.74)",

  // Dark surfaces
  plum: "#1E0B23",
  plumDeep: "#13061A",
  plumMid: "#2C1133",
  plumLine: "rgba(255, 255, 255, 0.1)",
  onDark: "rgba(255, 255, 255, 0.72)",
  onDarkSubtle: "rgba(255, 255, 255, 0.5)",

  // Illustration accents (used by scene art)
  navy: "#1E3F6E",
  uniformBlue: "#245C9A",
  tie: "#C4373A",
} as const;

export const gradients = {
  plum: `radial-gradient(ellipse at 18% 0%, rgba(159,51,126,0.45), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(244,160,48,0.16), transparent 50%), linear-gradient(160deg, ${"#2C1133"} 0%, ${"#1E0B23"} 45%, ${"#13061A"} 100%)`,
  brand: `linear-gradient(135deg, ${"#6E2156"} 0%, ${"#9F337E"} 55%, ${"#B8458F"} 100%)`,
  gold: `linear-gradient(135deg, ${"#F3D39A"} 0%, ${"#E4BC7A"} 45%, ${"#C9913F"} 100%)`,
  goldText: `linear-gradient(100deg, ${"#F6D9A4"} 0%, ${"#F4A030"} 55%, ${"#E4BC7A"} 100%)`,
  ivory: `linear-gradient(180deg, ${"#FFFDF9"} 0%, ${"#FAF7F2"} 100%)`,
} as const;

export const shadows = {
  soft: "0 1px 2px rgba(23, 11, 27, 0.04), 0 12px 32px rgba(23, 11, 27, 0.05)",
  card: "0 1px 2px rgba(23, 11, 27, 0.05), 0 24px 60px rgba(23, 11, 27, 0.08)",
  lift: "0 2px 4px rgba(23, 11, 27, 0.05), 0 36px 80px rgba(23, 11, 27, 0.14)",
  glow: "0 12px 32px rgba(159, 51, 126, 0.32)",
  goldGlow: "0 12px 32px rgba(228, 188, 122, 0.28)",
  inset: "inset 0 1px 0 rgba(255, 255, 255, 0.12)",
} as const;

export const radii = {
  xs: "8px",
  sm: "12px",
  md: "18px",
  lg: "24px",
  xl: "32px",
  pill: "999px",
} as const;

export const layout = {
  content: 1160,
  wide: 1280,
  header: 84,
} as const;

export const ease = [0.22, 1, 0.36, 1] as const;

export const fontFamily = '"Plus Jakarta Sans", "Segoe UI", system-ui, sans-serif';
export const fontDisplay = '"Fraunces", "Georgia", "Times New Roman", serif';
