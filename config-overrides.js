const { alias, configPaths } = require("react-app-rewire-alias");

module.exports = function override(config) {
  console.log("overrides!");
  alias({
    ...configPaths("./jsconfig.paths.json"),
  })(config);

  return config;
};
