/**
 * Resolve a public-folder asset path against the deployment base URL.
 *
 * Vercel serves the site at "/" so this is a no-op there. GitHub Pages serves
 * the project site at "/portfolio/", where a bare "/Mohit_Resume.pdf" would 404.
 */
export function asset(path: string): string {
  if (!path) return path
  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:')) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
