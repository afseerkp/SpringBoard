/** Public file URL, including the GitHub Pages project prefix when one is set. */
export function asset(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, "")}`;
}
