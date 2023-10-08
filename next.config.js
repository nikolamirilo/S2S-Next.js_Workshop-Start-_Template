/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'res.cloudinary.com',
            hostname: "www.androidcentral.com"
          },
        ],
      },
}
module.exports = nextConfig
