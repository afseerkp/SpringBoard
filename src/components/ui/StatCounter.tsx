import Box from "@mui/material/Box";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { colors, fontDisplay } from "../../theme/tokens.ts";

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  /** Show this text instead of an animated number. */
  text?: string;
};

function CountUp({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix ? <span className="suffix">{suffix}</span> : null}
    </span>
  );
}

export function StatCounter({ stat, light = false }: { stat: Stat; light?: boolean }) {
  return (
    <Box>
      <Box
        sx={{
          fontFamily: fontDisplay,
          fontWeight: 400,
          fontSize: stat.text ? { xs: "1.9rem", md: "2.5rem" } : { xs: "2.6rem", md: "3.4rem" },
          minHeight: { md: "3.4rem" },
          display: "flex",
          alignItems: "flex-end",
          whiteSpace: "nowrap",
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: light ? colors.white : colors.ink,
          fontVariationSettings: '"opsz" 144',
          "& .suffix": { color: light ? colors.champagne : colors.purple },
        }}
      >
        {stat.text ? stat.text : <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />}
      </Box>
      <Box
        sx={{
          mt: 1.4,
          color: light ? colors.onDark : colors.muted,
          fontSize: "0.9rem",
          lineHeight: 1.5,
          maxWidth: 220,
        }}
      >
        {stat.label}
      </Box>
    </Box>
  );
}
