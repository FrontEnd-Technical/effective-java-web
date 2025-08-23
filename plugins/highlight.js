import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // bạn đổi theme tùy thích

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("highlight", {
    mounted(el) {
      const blocks = el.querySelectorAll("pre code");
      blocks.forEach((block) => {
        hljs.highlightElement(block);
      });
    },
    updated(el) {
      const blocks = el.querySelectorAll("pre code");
      blocks.forEach((block) => {
        hljs.highlightElement(block);
      });
    },
  });
});
