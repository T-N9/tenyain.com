/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  messagesDir: "./messages",
  locales: ["en", "ja"],
  defaultLocale: "en",
  experimental: {
    createMessagesDeclaration: "./messages/en.json",
  },
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
