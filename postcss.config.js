const path = require('path')
module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')({
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3))
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2))
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1))
        }
        return id
      }
    }),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5'
    }),
    // tailwindcss for postcss7
    require('tailwindcss')({ config: './tailwind.config.js' }),
    // rem 转 rpx
    require('postcss-rem-to-responsive-pixel/postcss7')({
      rootValue: 32,
      propList: ['*'],
      transformUnit: 'rpx'
    }),

    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),

    // [ WXSS 文件编译错误]
    //.focus-within\:sr-only:focus-within{
    // 不认识这个 \: 我们需要replace
    // https://developers.weixin.qq.com/community/develop/doc/000ce8ba720c683326cb6b8215b000?highLine=wxss%2520%25E8%25BD%25AC%25E4%25B9%2589
    // require('postcss-class-rename')({
    //   '\\\\\:': '-colon-',
    //   // '\\\\/': '_',
    //   '\\\\\.': '-dot-'
    // })
  ]
  //-dot-inset-0\-dot-5{
}
