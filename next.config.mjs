/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Solo usa basePath en producción (GitHub Pages)
  basePath: process.env.NODE_ENV === "production" ? "/arangel.me" : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
