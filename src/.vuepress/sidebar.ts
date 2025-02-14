import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "技术文章",
      icon: "laptop-code",
      prefix: "tech-posts/",
      link: "tech-posts/",
      children: "structure",
    },
    {
      text: "体验文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
