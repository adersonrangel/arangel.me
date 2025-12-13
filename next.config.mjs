/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // No basePath needed when using custom domain (arangel.me)
  // basePath is only needed for GitHub Pages project sites (username.github.io/repo-name)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
