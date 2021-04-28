const { plugin: viteMarkdown } = require('vite-plugin-markdown')
const md = require('markdown-it')({
  html: true
}).use(require('markdown-it-anchor'))

export default {
  esbuild: {
    jsxFactory: 'h',
    jsxInject: `import h from 'hyperapp-jsx-pragma'`
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  plugins: [
    viteMarkdown({
      mode: 'html',
      markdownIt: md
    })
  ]
}
