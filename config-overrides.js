const { override, fixBabelImports } = require("customize-cra");

module.exports = override(
  fixBabelImports("root-import", {
    rootPathPrefixe: "~",
    rootPathSuffix: "src",
  })
);
