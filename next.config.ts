import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com",
      "images.unsplash.com",
      "i.ibb.co",
      "techtronica.vercel.app",
    ],
  },
};
module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
};


export default nextConfig;
