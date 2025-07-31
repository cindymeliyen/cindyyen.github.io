/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages to serve as a static site
  output: 'export',

  // **NO BASE PATH FOR USER PAGES**: Your site is at the root.
  basePath: '',

  // Disable default image optimization as it requires a server
  images: {
    unoptimized: true,
  },

  // Optional: Add a trailing slash to all URLs (can help with some static hosting)
  trailingSlash: true,
};

module.exports = nextConfig;