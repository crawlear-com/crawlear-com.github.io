/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  distDir: './dist', // Changes the build output directory to `./dist/`.
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  }
}

const withPWA = nextPWA({
  dest: "public",
  exclude: [
    // add buildExcludes here
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    }
  ],
})(nextConfig);

export default withPWA