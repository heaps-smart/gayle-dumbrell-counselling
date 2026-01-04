/**
 * Get the base URL for assets (handles GitHub Pages subdirectory, custom domain, and localhost)
 * Vite automatically sets import.meta.env.BASE_URL based on the base config
 * 
 * Examples:
 * - GitHub Pages: BASE_URL = '/gayle-dumbrell-counselling/' -> '/gayle-dumbrell-counselling/images/photo.jpg'
 * - Custom domain: BASE_URL = '/' -> '/images/photo.jpg'
 * - Localhost: BASE_URL = '/' -> '/images/photo.jpg'
 */
export function getAssetPath(path: string): string {
  // Get base URL from Vite (includes trailing slash if set, e.g., '/gayle-dumbrell-counselling/' or '/')
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combine base URL with path
  // baseUrl already has trailing slash when set (e.g., '/gayle-dumbrell-counselling/')
  // or is just '/' for root, so we need to remove the leading slash from the path
  const cleanPath = normalizedPath.slice(1); // Remove leading slash
  
  // Combine and ensure no double slashes (except after protocol)
  return `${baseUrl}${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
}

