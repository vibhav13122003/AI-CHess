import { withSentryConfig } from "@sentry/nextjs";
import { NextConfig } from "next";
const nextConfig = (): NextConfig => ({
  // AI review uses a server-side API route, which cannot be emitted by a
  // static export. Deploy this project with `next start` (or a Next host).
  output: undefined,
  trailingSlash: false,
  reactStrictMode: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  headers: async () => [
          {
            source: "/engines/:blob*",
            headers: [
              {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable",
              },
              {
                key: "Age",
                value: "181921",
              },
            ],
          },
        ],
});

export default withSentryConfig(nextConfig, {
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
  org: process.env.SENTRY_ORG,
  project: "javascript-nextjs",
  widenClientFileUpload: true,
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
    reactComponentAnnotation: {
      enabled: true,
    },
  },
});
