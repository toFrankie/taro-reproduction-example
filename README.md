# 说明

## 开始

```shell
$ yarn

$ yarn dev:h5
```

## 问题复现

> 具体看 `src/pages/index.jsx`。

在 H5 端给 `<Swiper>` 组件开启 `circular` 选项后，问题有二：

- 如果不设置 `autoplay` 选项，从 `4 -> 1` 或 `1 -> 4` 切换时过渡不自然（示例中有四项）。
- 如果设置了 `autoplay` 选项，第一轮可以预期地从 1 到 4 切换，但是从 `4 -> 1` 开始第二轮之后，不会触发 `onChange`，除此之外，它停留在第二轮的第一个之后，就停止自动轮播了。

PS：微信小程序端正常。

## 其他

```shell
$ npx taro info
👽 Taro v3.6.20


  Taro CLI 3.6.20 environment info:
    System:
      OS: macOS 14.2
      Shell: 5.9 - /bin/zsh
    Binaries:
      Node: 18.16.0 - ~/.nvm/versions/node/v18.16.0/bin/node
      Yarn: 1.22.19 - ~/.nvm/versions/node/v18.16.0/bin/yarn
      npm: 9.5.1 - ~/.nvm/versions/node/v18.16.0/bin/npm
    npmPackages:
      @tarojs/cli: 3.6.20 => 3.6.20
      @tarojs/components: 3.6.20 => 3.6.20
      @tarojs/helper: 3.6.20 => 3.6.20
      @tarojs/plugin-framework-react: 3.6.20 => 3.6.20
      @tarojs/plugin-platform-alipay: 3.6.20 => 3.6.20
      @tarojs/plugin-platform-h5: 3.6.20 => 3.6.20
      @tarojs/plugin-platform-jd: 3.6.20 => 3.6.20
      @tarojs/plugin-platform-qq: 3.6.20 => 3.6.20
      @tarojs/plugin-platform-swan: 3.6.20 => 3.6.20
      @tarojs/plugin-platform-tt: 3.6.20 => 3.6.20
      @tarojs/plugin-platform-weapp: 3.6.20 => 3.6.20
      @tarojs/react: 3.6.20 => 3.6.20
      @tarojs/runtime: 3.6.20 => 3.6.20
      @tarojs/shared: 3.6.20 => 3.6.20
      @tarojs/taro: 3.6.20 => 3.6.20
      @tarojs/taro-loader: 3.6.20 => 3.6.20
      @tarojs/webpack5-runner: 3.6.20 => 3.6.20
      babel-preset-taro: 3.6.20 => 3.6.20
      eslint-config-taro: 3.6.20 => 3.6.20
      react: ^18.0.0 => 18.2.0
```

```shell
$ npx taro doctor
👽 Taro v3.6.20

🎯 验证环境信息！
[✓]  安装的 Node 版本为 v18.16.0

🎯 验证项目配置 (/config/index.js) ！
[✓]  成功获取远程配置验证文件：https://raw.githubusercontent.com/NervJS/taro-doctor/main/assets/config_schema.json
[✓]  项目配置正确！

🎯 验证项目依赖安装正确性！
[!]  本地已经安装了 Taro CLI 版本为 3.6.20，建议使用 npm script 来执行项目的预览和打包
本地安装的 Taro 相关依赖版本信息如下：
- @tarojs/components: 3.6.20
- @tarojs/helper: 3.6.20
- @tarojs/plugin-framework-react: 3.6.20
- @tarojs/plugin-platform-alipay: 3.6.20
- @tarojs/plugin-platform-h5: 3.6.20
- @tarojs/plugin-platform-jd: 3.6.20
- @tarojs/plugin-platform-qq: 3.6.20
- @tarojs/plugin-platform-swan: 3.6.20
- @tarojs/plugin-platform-tt: 3.6.20
- @tarojs/plugin-platform-weapp: 3.6.20
- @tarojs/react: 3.6.20
- @tarojs/runtime: 3.6.20
- @tarojs/shared: 3.6.20
- @tarojs/taro: 3.6.20
- @tarojs/cli: 3.6.20
- @tarojs/taro-loader: 3.6.20
- @tarojs/test-utils-react: 0.1.1
- @tarojs/webpack5-runner: 3.6.20

🎯 验证最佳实践！
[✓]  项目符合最佳实践要求！
```
