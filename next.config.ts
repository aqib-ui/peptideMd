// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true, // ✅ Disable Image Optimization for static export
//   },
//   eslint: {
//     ignoreDuringBuilds: true, // ✅ Disable ESLint from failing the build
//   },
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    scrollRestoration: true, // 👈 Add this line
  },
};

export default nextConfig;
