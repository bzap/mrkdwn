/** @type {import('next').NextConfig} */
const nextConfig = {};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: "true",
});

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
