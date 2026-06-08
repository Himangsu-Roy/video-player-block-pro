const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const ESLintPlugin = require("eslint-webpack-plugin");

// Drop the RTL CSS emit — the plugin doesn't ship -rtl bundles.
const plugins = defaultConfig.plugins.filter(
  (p) => p?.constructor?.name !== "RtlCssPlugin",
);

module.exports = {
  ...defaultConfig,
  entry: {
    ...defaultConfig.entry(),
    "admin/dashboard": "./src/admin/dashboard.js",
    "admin/post": "./src/admin/post.js",
    "blocks/index": "./src/blocks/index.js"
  },
  plugins: [...plugins, new ESLintPlugin()],
  optimization: {},
};
