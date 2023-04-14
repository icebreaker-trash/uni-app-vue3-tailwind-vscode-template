process.env.UNI_USING_VUE3 = true;
process.env.UNI_USING_VUE3_OPTIONS_API = true;
const { WeappTailwindcssDisabled } = require("./platform");
const {
  UnifiedWebpackPluginV5
} = require("weapp-tailwindcss-webpack-plugin");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const config = {
  //....
  configureWebpack: {
    plugins: [
      new UnifiedWebpackPluginV5({
        disabled: WeappTailwindcssDisabled,
      }),
    ],
  },
  //....
};

module.exports = config;
