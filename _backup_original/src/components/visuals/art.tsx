import { useId } from "react";

type SvgProps = {
  title: string;
};

function Shadow({ id }: { id: string }) {
  return (
    <filter id={id} x="-30%" y="-30%" width="160%" height="170%">
      <feDropShadow dx="0" dy="14" stdDeviation="8" floodColor="#1C1424" floodOpacity="0.16" />
    </filter>
  );
}

export function BooksSvg({ title, variant }: SvgProps & { variant: "stack" | "open" | "shelf" }) {
  const raw = useId();
  const shadow = `book-shadow-${raw.replace(/:/g, "")}`;

  if (variant === "open") {
    return (
      <svg viewBox="0 0 460 340" role="img" aria-label={title} width="100%" height="100%">
        <filter id={shadow} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="16" stdDeviation="10" floodColor="#1C1424" floodOpacity="0.14" />
        </filter>
        <g filter={`url(#${shadow})`}>
          <path d="M40 78c70 18 120 22 190 4 70 18 120 14 190-4v168c-70 16-120 20-190 2-70 18-120 14-190-2V78z" fill="#F7F4EF" />
          <path d="M230 82c-70 18-120 14-190-4v168c70 16 120 20 190 2V82z" fill="#FFFDF9" />
          <path d="M230 82c70 18 120 14 190-4v168c-70 16-120 20-190 2V82z" fill="#F3EFE7" />
          <path d="M228 86v162" stroke="#E4D3C4" strokeWidth="3" />
          {Array.from({ length: 7 }).map((_, index) => (
            <path
              key={index}
              d={`M70 ${118 + index * 16}h120M270 ${118 + index * 16}h120`}
              stroke="#E7D7C8"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
          <path d="M250 96c18 40 16 90 8 140" stroke="#F4A030" strokeWidth="8" strokeLinecap="round" />
        </g>
        <g transform="rotate(-28 360 210)">
          <rect x="330" y="150" width="18" height="120" rx="8" fill="#F4A030" />
          <polygon points="330,150 348,150 339,128" fill="#F6E2B5" />
          <polygon points="335,132 343,132 339,122" fill="#2C2C2C" />
          <rect x="330" y="248" width="18" height="14" rx="3" fill="#E7C2BE" />
          <rect x="330" y="242" width="18" height="8" fill="#D9D4CE" />
        </g>
      </svg>
    );
  }

  if (variant === "shelf") {
    const spines = [
      { h: 168, fill: "#9F337E", title: "ENG" },
      { h: 150, fill: "#245C9A", title: "MAT" },
      { h: 176, fill: "#F4A030", title: "SCI" },
      { h: 142, fill: "#2F6F62", title: "HIS" },
      { h: 160, fill: "#1C1424", title: "GEO" },
      { h: 154, fill: "#C4373A", title: "ART" },
    ];
    return (
      <svg viewBox="0 0 460 340" role="img" aria-label={title} width="100%" height="100%">
        <Shadow id={shadow} />
        <rect x="36" y="250" width="388" height="16" rx="6" fill="#E7D7C4" />
        <rect x="28" y="262" width="404" height="12" rx="4" fill="#C9B39A" />
        <g filter={`url(#${shadow})`}>
          {spines.map((spine, index) => {
            const x = 58 + index * 60;
            const y = 246 - spine.h;
            return (
              <g key={spine.title}>
                <rect x={x} y={y} width="46" height={spine.h} rx="6" fill={spine.fill} />
                <rect x={x + 8} y={y + 18} width="30" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
                <rect x={x + 12} y={y + 30} width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.35)" />
              </g>
            );
          })}
        </g>
      </svg>
    );
  }

  const books = [
    { y: 214, fill: "#1E3F6E", spine: "#163056", rotate: -7 },
    { y: 178, fill: "#F4A030", spine: "#D4891A", rotate: -3 },
    { y: 142, fill: "#9F337E", spine: "#6E2156", rotate: 3 },
    { y: 108, fill: "#2F6F62", spine: "#1E4C43", rotate: -1 },
    { y: 76, fill: "#F4EFE6", spine: "#E4D3C4", rotate: 2 },
  ];

  return (
    <svg viewBox="0 0 420 340" role="img" aria-label={title} width="100%" height="100%">
      <Shadow id={shadow} />
      <ellipse cx="210" cy="286" rx="120" ry="16" fill="rgba(28,20,36,0.12)" />
      {books.map((book) => (
        <g key={book.y} filter={`url(#${shadow})`} transform={`rotate(${book.rotate} 210 ${book.y + 16})`}>
          <rect x="78" y={book.y} width="250" height="34" rx="6" fill={book.fill} />
          <rect x="78" y={book.y} width="16" height="34" rx="4" fill={book.spine} />
          <path d={`M310 ${book.y + 8}h12M310 ${book.y + 16}h12M310 ${book.y + 24}h12`} stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" />
        </g>
      ))}
    </svg>
  );
}

export function StationerySvg({ title, variant }: SvgProps & { variant: "spread" | "geometry" | "colors" }) {
  const raw = useId();
  const shadow = `stat-shadow-${raw.replace(/:/g, "")}`;

  if (variant === "geometry") {
    return (
      <svg viewBox="0 0 460 340" role="img" aria-label={title} width="100%" height="100%">
        <Shadow id={shadow} />
        <g filter={`url(#${shadow})`}>
          <rect x="48" y="150" width="280" height="28" rx="6" fill="#F7F4EF" stroke="#E4D3C4" />
          {Array.from({ length: 14 }).map((_, index) => (
            <rect key={index} x={64 + index * 18} y={150} width="2" height={index % 2 === 0 ? 14 : 8} fill="#9F337E" opacity="0.7" />
          ))}
          <polygon points="250,70 390,230 210,230" fill="#FFFDF9" stroke="#245C9A" strokeWidth="8" strokeLinejoin="round" />
          <circle cx="150" cy="210" r="54" fill="none" stroke="#F4A030" strokeWidth="8" />
          <circle cx="150" cy="210" r="6" fill="#1C1424" />
          <rect x="168" y="96" width="16" height="130" rx="7" transform="rotate(18 176 160)" fill="#F4A030" />
        </g>
      </svg>
    );
  }

  if (variant === "colors") {
    const pencils = ["#C4373A", "#F4A030", "#F2C94C", "#2F6F62", "#245C9A", "#9F337E", "#E57AA2"];
    return (
      <svg viewBox="0 0 460 340" role="img" aria-label={title} width="100%" height="100%">
        <Shadow id={shadow} />
        <g filter={`url(#${shadow})`}>
          {pencils.map((color, index) => {
            const angle = -50 + index * 16;
            return (
              <g key={color} transform={`rotate(${angle} 230 250)`}>
                <rect x="214" y="70" width="22" height="170" rx="8" fill={color} />
                <polygon points="214,70 236,70 225,42" fill="#F6E2B5" />
                <polygon points="220,52 230,52 225,38" fill="#2C2C2C" />
                <rect x="214" y="214" width="22" height="16" rx="4" fill="#F3D2CE" />
              </g>
            );
          })}
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 460 360" role="img" aria-label={title} width="100%" height="100%">
      <Shadow id={shadow} />
      <g filter={`url(#${shadow})`}>
        <rect x="150" y="48" width="176" height="230" rx="16" fill="#FFFDF9" />
        <rect x="150" y="48" width="22" height="230" rx="8" fill="#9F337E" />
        {Array.from({ length: 8 }).map((_, index) => (
          <circle key={index} cx="161" cy={68 + index * 26} r="4" fill="#F8EEF5" />
        ))}
        {Array.from({ length: 8 }).map((_, index) => (
          <path key={`line-${index}`} d={`M186 ${84 + index * 22}h120`} stroke="#E7D7C8" strokeWidth="2" strokeLinecap="round" />
        ))}
        <g transform="rotate(-38 96 150)">
          <rect x="40" y="120" width="16" height="120" rx="7" fill="#F4A030" />
          <polygon points="40,120 56,120 48,100" fill="#F6E2B5" />
          <polygon points="44,108 52,108 48,96" fill="#222" />
        </g>
        <g transform="rotate(24 360 140)">
          <rect x="348" y="80" width="14" height="128" rx="6" fill="#245C9A" />
          <rect x="348" y="80" width="14" height="16" rx="4" fill="#1C1424" />
        </g>
        <rect x="78" y="230" width="46" height="24" rx="6" fill="#F3B7C4" />
        <rect x="300" y="236" width="36" height="22" rx="4" fill="#C9B39A" />
        <polygon points="318,236 336,214 336,236" fill="#E7D7C4" />
        <rect x="86" y="270" width="150" height="14" rx="4" fill="#F7F4EF" stroke="#E4D3C4" />
        <rect x="250" y="188" width="18" height="70" rx="6" fill="#2F6F62" transform="rotate(12 259 220)" />
        <rect x="292" y="150" width="16" height="64" rx="6" fill="#C4373A" transform="rotate(-8 300 182)" />
      </g>
    </svg>
  );
}

export function BackpackSvg({ title }: SvgProps) {
  const raw = useId();
  const shadow = `bag-shadow-${raw.replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 320 360" role="img" aria-label={title} width="100%" height="100%">
      <Shadow id={shadow} />
      <g filter={`url(#${shadow})`}>
        <path d="M92 110c0-40 28-70 68-70s68 30 68 70" fill="none" stroke="#6E2156" strokeWidth="14" strokeLinecap="round" />
        <rect x="70" y="108" width="180" height="196" rx="48" fill="#9F337E" />
        <rect x="92" y="168" width="136" height="90" rx="24" fill="#7C2864" />
        <path d="M108 168h104" stroke="#F4A030" strokeWidth="6" strokeLinecap="round" />
        <circle cx="160" cy="214" r="8" fill="#F4A030" />
        <path d="M78 150c-18 10-24 48-18 78" fill="none" stroke="#6E2156" strokeWidth="12" strokeLinecap="round" />
        <path d="M242 150c18 10 24 48 18 78" fill="none" stroke="#6E2156" strokeWidth="12" strokeLinecap="round" />
        <ellipse cx="126" cy="132" rx="28" ry="10" fill="rgba(255,255,255,0.18)" />
      </g>
    </svg>
  );
}

function Shirt({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M34 28c12 14 28 18 46 18s34-4 46-18l16 18-18 16v92H36V62L18 46z" fill="#F7F8FB" stroke="#E1E5EE" />
      <path d="M58 46c8 10 20 12 28 0" fill="none" stroke="#D5DAE6" strokeWidth="3" />
    </g>
  );
}

function Bow() {
  return (
    <g>
      <path d="M70 62c-16-10-28 2-22 12 8 4 16 2 22-4 6 6 14 8 22 4 6-10-6-22-22-12z" fill="#C4373A" />
      <circle cx="70" cy="68" r="5" fill="#9E2C30" />
    </g>
  );
}

function Tie() {
  return <path d="M78 58l12 8-8 46-12-8 8-46z" fill="#C4373A" />;
}

function Pinafore() {
  return (
    <g>
      <path d="M52 78h56l8 16H44z" fill="#245C9A" />
      <path d="M46 94h68l18 120H28z" fill="#245C9A" />
      <path d="M58 78v-16M102 78v-16" stroke="#1C4A7C" strokeWidth="6" strokeLinecap="round" />
      <path d="M70 120h20" stroke="rgba(255,255,255,0.35)" strokeWidth="3" />
    </g>
  );
}

function Trousers() {
  return <path d="M48 96h64l8 118H78l-8-70-8 70H36z" fill="#245C9A" />;
}

export function UniformSvg({ title, variant }: SvgProps & { variant: "girl" | "boy" | "pair" }) {
  const raw = useId();
  const shadow = `uni-shadow-${raw.replace(/:/g, "")}`;
  const outfit = (kind: "girl" | "boy", offset: number) => (
    <g transform={`translate(${offset} 8)`} filter={`url(#${shadow})`}>
      <Shirt x={0} y={0} />
      {kind === "girl" ? <Pinafore /> : <Trousers />}
      {kind === "girl" ? <Bow /> : <Tie />}
    </g>
  );

  if (variant === "pair") {
    return (
      <svg viewBox="0 0 540 250" role="img" aria-label={title} width="100%" height="100%">
        <Shadow id={shadow} />
        {outfit("girl", 16)}
        {outfit("boy", 280)}
      </svg>
    );
  }

  return (
    <svg viewBox="20 0 200 250" role="img" aria-label={title} width="100%" height="100%">
      <Shadow id={shadow} />
      {outfit(variant, 40)}
    </svg>
  );
}

function Oxford({ fill, lace }: { fill: string; lace: string }) {
  return (
    <g>
      <path d="M36 92c8 14 150 18 188 2 4 8-6 14-18 14H48c-16 0-20-6-12-16z" fill="#141210" />
      <path d="M48 90c4-8 10-28 22-36 18-12 36-14 58-12l62 6c22 4 36 16 40 32 2 8-4 10-14 10H58c-10 0-14-4-10 0z" fill={fill} />
      <path d="M48 90c2-18 8-32 18-40 6 10 8 24 6 40z" fill="#000" opacity="0.28" />
      <path d="M108 52c2 14 2 26 0 38M128 50c1 14 1 28-1 40M148 52c0 14-1 26-2 36" stroke={lace} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M150 70c16 2 28 6 34 12" stroke="rgba(255,255,255,0.28)" strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  );
}

function MaryJane({ fill }: { fill: string }) {
  return (
    <g>
      <path d="M34 96c10 12 148 16 184 0 4 8-8 14-20 14H50c-18 0-22-8-16-14z" fill="#141210" />
      <path d="M52 94c6-10 16-34 36-42 22-8 40-6 64 0l48 10c16 6 26 16 24 30-2 6-10 8-18 8H62c-12 0-16-6-10-6z" fill={fill} />
      <path d="M78 58c28 2 46 16 42 40" stroke="#F6EFE4" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="92" cy="78" r="4" fill="#F6EFE4" />
      <path d="M150 72c18 2 30 6 36 10" stroke="rgba(255,255,255,0.25)" strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  );
}

export function ShoesSvg({ title, variant }: SvgProps & { variant: "black" | "brown" | "pair" }) {
  const raw = useId();
  const shadow = `shoe-shadow-${raw.replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 520 280" role="img" aria-label={title} width="100%" height="100%">
      <Shadow id={shadow} />
      <ellipse cx="260" cy="214" rx="170" ry="14" fill="rgba(28,20,36,0.1)" />
      {(variant === "black" || variant === "pair") && (
        <g filter={`url(#${shadow})`} transform={variant === "pair" ? "translate(8 18)" : "translate(130 28)"}>
          <Oxford fill="#1C1C22" lace="#F4F4F6" />
        </g>
      )}
      {(variant === "brown" || variant === "pair") && (
        <g filter={`url(#${shadow})`} transform={variant === "pair" ? "translate(250 36)" : "translate(130 28)"}>
          <MaryJane fill="#6B3E2A" />
        </g>
      )}
    </svg>
  );
}

export function DeskSvg({ title }: SvgProps) {
  const raw = useId();
  const shadow = `desk-shadow-${raw.replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 640 380" role="img" aria-label={title} width="100%" height="100%">
      <Shadow id={shadow} />
      <rect x="40" y="250" width="560" height="18" rx="8" fill="#E7D7C4" />
      <g filter={`url(#${shadow})`}>
        <rect x="70" y="150" width="150" height="22" rx="4" fill="#245C9A" />
        <rect x="78" y="128" width="138" height="22" rx="4" fill="#9F337E" />
        <rect x="86" y="106" width="126" height="22" rx="4" fill="#F4A030" />
        <rect x="250" y="92" width="150" height="158" rx="12" fill="#FFFDF9" />
        <rect x="250" y="92" width="16" height="158" fill="#9F337E" />
        <rect x="430" y="70" width="130" height="170" rx="36" fill="#9F337E" />
        <rect x="452" y="118" width="88" height="70" rx="16" fill="#7C2864" />
        <path d="M470 118h54" stroke="#F4A030" strokeWidth="4" />
      </g>
    </svg>
  );
}

export function DetailSvg({ title, variant }: SvgProps & { variant: "paper" | "pencil" | "fabric" | "stitch" }) {
  const label = title;
  if (variant === "paper") {
    return (
      <svg viewBox="0 0 360 240" role="img" aria-label={label} width="100%" height="100%">
        <rect width="360" height="240" fill="#FFFDF9" />
        {Array.from({ length: 9 }).map((_, index) => (
          <path key={index} d={`M28 ${36 + index * 20}h304`} stroke="#E7D7C8" strokeWidth="2" />
        ))}
        <path d="M48 36v168" stroke="#F3B7C4" strokeWidth="2" />
      </svg>
    );
  }
  if (variant === "pencil") {
    return (
      <svg viewBox="0 0 360 240" role="img" aria-label={label} width="100%" height="100%">
        <rect width="360" height="240" fill="#F8F1E4" />
        <g transform="rotate(-18 180 120)">
          <rect x="40" y="96" width="250" height="42" rx="12" fill="#F4A030" />
          <polygon points="290,96 290,138 340,117" fill="#F6E2B5" />
          <polygon points="328,110 328,124 348,117" fill="#2C2C2C" />
          <path d="M70 104h150" stroke="rgba(255,255,255,0.35)" strokeWidth="4" />
        </g>
      </svg>
    );
  }
  if (variant === "fabric") {
    return (
      <svg viewBox="0 0 360 240" role="img" aria-label={label} width="100%" height="100%">
        <rect width="360" height="240" fill="#245C9A" />
        {Array.from({ length: 12 }).map((_, index) => (
          <path key={index} d={`M0 ${index * 22}h360`} stroke="rgba(255,255,255,0.16)" strokeWidth="2" />
        ))}
        {Array.from({ length: 18 }).map((_, index) => (
          <path key={`v-${index}`} d={`M${index * 22} 0v240`} stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 360 240" role="img" aria-label={label} width="100%" height="100%">
      <rect width="360" height="240" fill="#6B3E2A" />
      <path d="M40 180c40-20 60-80 90-90 30 40 50 70 90 78" fill="none" stroke="#F4EFE6" strokeWidth="3" />
      {Array.from({ length: 10 }).map((_, index) => (
        <path key={index} d={`M${70 + index * 18} ${150 - (index % 3) * 8} l6 -16`} stroke="#F6E2B5" strokeWidth="2" strokeLinecap="round" />
      ))}
    </svg>
  );
}
