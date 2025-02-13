import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "yupanel的博客",
  description: "记录一下日常",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
