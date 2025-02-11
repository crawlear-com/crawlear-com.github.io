/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  distDir: './dist', // Changes the build output directory to `./dist/`.
  reactStrictMode: false,
  env: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
    REACT_APP_DATABASE_URL: process.env.REACT_APP_DATABASE_URL,
    REACT_APP_PROJECTID: process.env.REACT_APP_PROJECTID,
    REACT_APP_STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDERID: process.env.REACT_APP_STORAGE_BUCKET,
    REACT_APP_APPID: process.env.REACT_APP_APPID,
    REACT_APP_MEASUREMENTID: process.env.REACT_APP_MEASUREMENTID
  },
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