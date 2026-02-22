import type { NextConfig } from "next";
import packageJson from "./package.json";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com",
      "images.unsplash.com",
      "i.ibb.co",
      "techtronica.vercel.app",
    ],
  },
    env: {
    NEXT_PUBLIC_APP_VERSION: packageJson.version,
  },

};
module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
};





export default nextConfig;
