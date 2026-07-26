/**
 * Helper utility for GitHub Pages sub-path asset routing.
 */
const basePath = process.env.NODE_ENV === "production" ? "/ui-developer-test-techwarelab" : "";

export function assetPath(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
