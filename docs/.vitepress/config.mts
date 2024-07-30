import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/logo/logo.webp' }]],
  title: "Edison 知識庫",
  description: "A EdisonDocs Site",
  themeConfig: {
    returnToTopLabel: "回到頂部",
    editLink: {
      pattern: 'https://github.com/HttpStatusOK/EdisonDocs/edit/main/docs/:path',
      text: '編輯頁面'
    },
    lastUpdated: {
      text: '最近更新於',
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/logo.webp',
    search: {
      provider: 'local'
    },

    nav: [
      { text: '首頁', link: '/' },
      { text: '筆記', link: '/post/remark/技術點和應用場景', activeMatch: '/remark/' },
      { text: '區塊鏈', link: '/post/chain/$DUNDUN', activeMatch: '/chain/' },
      { text: '生活', link: '/post/life/炒菜類', activeMatch: '/life/' }
    ],


    sidebar: {
      "/post/remark/": [
        {
          text: '筆記',
          items: [
            { text: '技術點和應用場景', link: '/post/remark/技術點和應用場景' },
            { text: '常用軟件命令行', link: '/post/remark/常用軟件命令行' }
          ]
        }
      ],
      "/post/chain/": [
        {
          text: 'Token',
          items: [
            { text: '$DUNDUN', link: '/post/chain/$DUNDUN' },
          ]
        }
      ],
      "/post/life/": [
        {
          text: '食譜',
          items: [
            { text: '炒菜類', link: '/post/life/炒菜類' },
            { text: '蒸煮類', link: '/post/life/蒸煮類' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Powered by VitePress © 2024 Edison. All rights reserved.',
    }
  }
})
