
const store = require("./store.config.json")
const { withStoreConfig } = require("./store-config")

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "localhost",
      "medusa-server-testing.s3.amazonaws.com",
      "myawsbucketmedusa.s3.eu-central-1.amazonaws.com"
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
