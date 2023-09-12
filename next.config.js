/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  async rewrites() {
    return [
      {
        source: "/:shipId*.html", // Old url with .html
        destination: "/:shipId*", // Redirect without .html
      },
    ];
  },
};

module.exports = nextConfig;
