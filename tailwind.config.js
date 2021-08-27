// const defaultConfig = require('tailwindcss/stubs/defaultConfig.stub')
// const boxShadowplugin = require('tailwindcss/lib/plugins/boxShadow')
const _ = require('lodash')
const plugin = require('tailwindcss/plugin')


function needEscaping(str) {
  return ['\/', '\.'].includes()
}

const corePlugins = [
  //#endregion 基础样式
  //'preflight',
  //#endregion
  //#region  布局/容器
  //'container',
  //#endregion

  //#region 不支持 :not 选择器
  //参考 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html
  // 'space',
  // 'divideWidth',
  // 'divideColor',
  // 'divideStyle',
  // 'divideOpacity',
  //#endregion


  //#region 可访问性 :屏幕阅读器
  //'accessibility',
  //#endregion
  'appearance',
  'backgroundAttachment',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'gradientColorStops',
  'backgroundOpacity',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'borderCollapse',
  'borderColor',
  'borderOpacity',
  'borderRadius',
  'borderStyle',
  'borderWidth',
  'boxSizing',
  'cursor',
  'display',
  'flexDirection',
  'flexWrap',
  //#region 盒对齐/Grid相关
  // 'placeItems',
  // 'placeContent',
  // 'placeSelf',
  //#endregion
  'alignItems',
  'alignContent',
  'alignSelf',
  'justifyItems',
  'justifyContent',
  'justifySelf',
  'flex',
  'flexGrow',
  'flexShrink',
  'order',
  'float',
  'clear',
  //#region 小程序字体需要js额外加载，这里先不用 fontFamily
  // 'fontFamily',
  //#endregion
  'fontWeight',
  'height',
  'fontSize',
  'lineHeight',
  'listStylePosition',
  'listStyleType',
  'margin',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'objectFit',
  'objectPosition',
  'opacity',
  'outline',
  'overflow',
  'overscrollBehavior',
  'padding',
  'placeholderColor',
  'placeholderOpacity',
  'pointerEvents',
  'position',
  'inset',
  'resize',
  // 'boxShadow', // *,::before,::after 限制
  //'ringWidth', // *,::before,::after 限制
  //'ringOffsetColor',
  //'ringOffsetWidth',
  //'ringColor',
  //'ringOpacity',
  //#region SVG 相关
  // 'fill',
  // 'stroke',
  // 'strokeWidth',
  //#endregion
  'tableLayout',
  'textAlign',
  'textColor',
  'textOpacity',
  'textOverflow',
  'fontStyle',
  'textTransform',
  'textDecoration',
  'fontSmoothing',
  'fontVariantNumeric',
  'letterSpacing',
  'userSelect',
  'verticalAlign',
  'visibility',
  'whitespace',
  'wordBreak',
  'width',
  'zIndex',
  //#region  网格布局
  // 'gap',
  // 'gridAutoFlow',
  // 'gridTemplateColumns',
  // 'gridAutoColumns',
  // 'gridColumn',
  // 'gridColumnStart',
  // 'gridColumnEnd',
  // 'gridTemplateRows',
  // 'gridAutoRows',
  // 'gridRow',
  // 'gridRowStart',
  // 'gridRowEnd',
  //#endregion
  'transform',
  'transformOrigin',
  'scale',
  'rotate',
  'translate',
  'skew',
  'transitionProperty',
  'transitionTimingFunction',
  'transitionDuration',
  'transitionDelay',
  'animation',
]
const emptyVariants = corePlugins.reduce((acc, cur) => {
  acc[cur] = []
  return acc
}, {})


/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  purge: {
    // 如果 development 下,wxss过大，可以一直开启 enabled
    // 默认在 NODE_ENV=production 下开启
    enabled: false,
    content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx,wxml}']
  },
  darkMode: false, // 'class', // or 'media' or 'class'
  important: true,
  corePlugins,
  theme: {
    screens: false,
    extend: {},
  },
  variants: {
    ...emptyVariants,
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, addBase, addVariant, e, prefix, config, theme, variants, postcss }) {
      const heightUtilities = _.map(config('theme.height'), (value, key) => {
        return {
          [`.${e(`h-${key}`)}`]: {
            transform: `h(${value})`
          }
        }
      })
      addUtilities(heightUtilities)
    }),
  ],
}
