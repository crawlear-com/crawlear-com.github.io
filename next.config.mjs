/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist', // Changes the build output directory to `./dist/`.
  experimental: {
    forceSwcTransforms: true,
  }
}

export default nextConfig