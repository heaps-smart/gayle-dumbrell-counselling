/**
 * Get the runtime base path based on the current hostname
 * - Custom domain (gayledumbrellcounselling.com.au): '/'
 * - GitHub Pages (heaps-smart.github.io): '/gayle-dumbrell-counselling/'
 * - Localhost: '/'
 */
export function getRuntimeBasePath(): string {
  if (typeof window === 'undefined') {
    // Server-side: use build-time base URL
    return import.meta.env.BASE_URL || '/';
  }
  
  // Client-side: detect based on hostname
  const hostname = window.location.hostname;
  
  // Check if we're on the custom domain
  if (hostname === 'gayledumbrellcounselling.com.au' || hostname === 'www.gayledumbrellcounselling.com.au') {
    return '/';
  }
  
  // Check if we're on GitHub Pages
  if (hostname === 'heaps-smart.github.io') {
    return '/gayle-dumbrell-counselling/';
  }
  
  // Default to build-time base URL (for localhost and other cases)
  return import.meta.env.BASE_URL || '/';
}

/**
 * Get the base URL for assets (handles GitHub Pages subdirectory, custom domain, and localhost)
 * Uses runtime detection to determine the correct base path
 * 
 * Examples:
 * - GitHub Pages: '/gayle-dumbrell-counselling/images/photo.jpg'
 * - Custom domain: '/images/photo.jpg'
 * - Localhost: '/images/photo.jpg'
 */
export function getAssetPath(path: string): string {
  // Get runtime base URL
  const baseUrl = getRuntimeBasePath();
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Combine base URL with path
  // baseUrl already has trailing slash when set (e.g., '/gayle-dumbrell-counselling/')
  // or is just '/' for root, so we need to remove the leading slash from the path
  const cleanPath = normalizedPath.slice(1); // Remove leading slash
  
  // Combine and ensure no double slashes (except after protocol)
  return `${baseUrl}${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
}

