// Single source of truth for the brand accent, referenced anywhere a
// component needs the color outside a Tailwind class (inline `style`, an SVG
// prop) since those sites can't take a `dark:` variant. Points at the CSS
// custom property so the value still flips with the theme.
export const ACCENT = "var(--al-accent)";
