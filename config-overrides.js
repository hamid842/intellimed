// const { injectBabelPlugin } = require("react-app-rewired");

// const rootImportConfig = [
//   "root-import",
//   {
//     rootPathPrefixe: "~",
//     rootPathSuffix: "src",
//   },
// ];

// module.exports = (config) => injectBabelPlugin(rootImportConfig, config);

const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("root-import", {
    rootPathPrefixe: "~",
    rootPathSuffix: "src",
  })
);
