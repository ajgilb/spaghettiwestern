import nextConfig from "eslint-config-next";

/** @type {import("eslint").Linter.FlatConfig[]} */
const config = [
  ...nextConfig,
  {
    rules: {
      // project-specific overrides go here
    },
  },
];

export default config;
