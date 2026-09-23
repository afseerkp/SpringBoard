# SPRINGBOARD

Company website for SpringBoard Educational School Supplies LLC, Ajman — SpringBoard Group of Companies.

```bash
npm install
npm run dev
```

Contact details, the logo path, and product visuals are configured in `src/config/site.ts` and `src/config/products.ts`.
Replace a scene illustration with photography by setting a visual to `{ type: "image", src, alt }`.

Inquiry delivery is stubbed in `src/services/inquiry.ts` so an email or API service can be connected later.

## Design system

- Colours, gradients, shadows and fonts live in `src/theme/tokens.ts` (deep aubergine + champagne, with the logo's purple and orange).
- Headlines use **Fraunces** (serif); body text uses **Plus Jakarta Sans**. Both load from Google Fonts in `index.html`.
- Company profile content (about, legacy, solutions, strengths, vision, group companies, clients, offices) lives in `src/config/site.ts`.
- `public/brand/logo-light.png` is used on dark backgrounds and `public/brand/logo-transparent.png` on light ones.
