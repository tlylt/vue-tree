import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@tlylt/vue-tree",
  description: "@tlylt/vue-tree",
  base: '/vue-tree/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue Example', link: '/vue-example' },
      { text: 'Vitepress Example', link: '/vitepress-example' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Vue Example', link: '/vue-example' },
          { text: 'Vitepress Example', link: '/vitepress-example' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tlylt/vue-tree' }
    ]
  },
  vue: {
    // @vitejs/plugin-vue options
    template: {
      compilerOptions: {
        whitespace: "preserve",
      },
    }
  }
})
