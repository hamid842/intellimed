const { injectBabelPlugin } = require("react-app-rewired");

const rootImportConfig = [
  "root-import",
  {
    rootPathPrefixe: "~",
    rootPathSuffix: "src",
  },
];

module.exports = (config) => injectBabelPlugin(rootImportConfig, config);
