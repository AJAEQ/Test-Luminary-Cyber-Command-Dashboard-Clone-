const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ Just the domain, no protocol or slashes
        port: "", // Optional: Leave empty for default ports
        pathname: "/**", // ✅ Allow all paths from Unsplash
      },
    ],
  },
};

module.exports = nextConfig;
