import webpack from "webpack";
import lessModules from "@kkt/less-modules";
import pkg from "./package.json";

export default (conf, env, options) => {
  conf = lessModules(conf, env, options);

  // Get the project version.
  conf.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version)
    })
  );
  return conf;
};
