import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  // output: "export", - commented this line so our site isn't static and can query the db at every refresh
  images: {
    unoptimized: true,
  },
});

export default nextConfig;
