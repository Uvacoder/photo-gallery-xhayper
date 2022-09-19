const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true
  }
})
