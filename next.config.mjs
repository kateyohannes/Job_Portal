import createNextIntlPlugin from "next-intl/plugin";

const withNextIntel = createNextIntlPlugin()

/** @type { import('next').NextConfig} **/ 
const nextConfig = {}

export default withNextIntel(nextConfig)