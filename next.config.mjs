/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist', // Changes the build output directory to `./dist/`.
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true,
  }
}

export default nextConfig