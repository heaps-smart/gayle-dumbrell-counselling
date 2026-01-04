/**
 * Get the runtime base path based on the current hostname (for routing only)
 * - Custom domain (gayledumbrellcounselling.com.au): '/' (assets at root)
 * - GitHub Pages (heaps-smart.github.io): '/gayle-dumbrell-counselling/' (for routing only)
 * - Localhost: '/'
 * 
 * Note: Assets are always at root since we build with base '/'
 */
export function getRuntimeBasePath(): string {
  if (typeof window === 'undefined') {
    return '/';
  }
  
  const hostname = window.location.hostname;
  
  // Custom domain: assets are at root, routing at root
  if (hostname === 'gayledumbrellcounselling.com.au' || hostname === 'www.gayledumbrellcounselling.com.au') {
    return '/';
  }
  
  // GitHub Pages: routing needs base path, but assets are still at root
  // (since we build with base '/')
  if (hostname === 'heaps-smart.github.io') {
    return '/gayle-dumbrell-counselling/';
  }
  
  return '/';
}

/**
 * Get the base URL for assets
 * Assets are always at root since we build with base '/'
 */
export function getAssetPath(path: string): string {
  // Assets are always at root, regardless of domain
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return normalizedPath;
}

