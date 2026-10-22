/** @type {import('next').NextConfig} */
const repoName = 'ojrfx'

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  images: {
    unoptimized: true,
  }
}

export default nextConfig;
