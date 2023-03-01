
// Thank for https://github.com/highlightjs/highlightjs-vue

import highlight, { type HLJSApi } from 'highlight.js';
import 'highlight.js/styles/androidstudio.css'
import type { App } from 'vue';
function hljsDefineVue(hljs: HLJSApi) {
  return {
    subLanguage: "xml",
    contains: [
      hljs.COMMENT("<!--", "-->", {
        relevance: 10,
      }),
      {
        begin: /^(\s*)(<script>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "javascript",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(?:\s*)(?:<script\s+lang=(["'])ts\1>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "typescript",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style(\s+scoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "css",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(?:\s*)(?:<style(?:\s+scoped)?\s+lang=(["'])(?:s[ca]ss)\1(?:\s+scoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "scss",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(?:\s*)(?:<style(?:\s+scoped)?\s+lang=(["'])stylus\1(?:\s+scoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "stylus",
        excludeBegin: true,
        excludeEnd: true,
      },
    ],
  };
}

export default {
  install(app: App<Element>) {

    highlight.registerLanguage("vue", hljsDefineVue);
    highlight.initHighlightingOnLoad();

    app.directive('highlight', {
      mounted (el: HTMLElement, binding) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block: Element)=>{
          const block2 = block as HTMLElement
          highlight.highlightBlock(block2)
        })
      },
    })

  }
}