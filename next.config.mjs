/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Use basePath only in production (GitHub Pages deployment)
  //basePath: process.env.NODE_ENV === "production" ? "/arangel.me" : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
