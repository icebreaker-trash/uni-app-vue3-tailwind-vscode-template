process.env.UNI_USING_VUE3 = true
process.env.UNI_USING_VUE3_OPTIONS_API = true

const {
  UniAppWeappTailwindcssWebpackPluginV4
} = require('weapp-tailwindcss-webpack-plugin')

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const config = {
  //....
  configureWebpack: {
    plugins: [new UniAppWeappTailwindcssWebpackPluginV4()]
  }
  //....
}

module.exports = config
