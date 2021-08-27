npm install -g @vue/cli

vue create -p dcloudio/uni-preset-vue#vue3 my-vue3-project

国内特殊情况
模板项目存放于 Github，由于国内网络环境问题，可能下载失败。针对此问题可以尝试如下措施：

更换网络重试，比如使用 4g 网络
在设备或路由器的网络设置中增加 DNS（如：8.8.8.8）
在设备中增加固定的 hosts（如：140.82.113.4 github.com）
修改依赖为指定版本


*,::before,::after 中的 * 微信也不认识怎么办

从 lib/plugins 中得知，addBase

```js
      addUtilities({
        '*, ::before, ::after': {
          '--tw-shadow': '0 0 #0000'
        }
      }, {
        respectImportant: false
      });
```

注意只转义您真正想转义的内容；不要在类名中传递前导的 . 或在 :hover 或 :focus 等伪类的开头传递 :，否则这些字符将被转义。

此外，因为 CSS 有关于类名的规则（类名不能以数字开头，但可以包含数字），所以最好是转义完整的类名（不只是用户提供的部分），否则您可能会得到不必要的转义序列。

`*, ::before, ::after` 怎么办，不认识 * 啊！