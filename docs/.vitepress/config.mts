import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Technologist%20Light%20Skin%20Tone.png' }]],
  title: "Edison 知识库",
  description: "A EdisonDocs Site",
  themeConfig: {
    returnToTopLabel: "回到顶部",
    editLink: {
      pattern: 'https://github.dev/HttpStatusOK/edison-docs/blob/main/docs/:path',
      // pattern: 'https://github.com/HttpStatusOK/EdisonDocs/edit/main/docs/:path',
      text: '编辑此页'
    },
    lastUpdated: {
      text: '最近更新于',
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Technologist%20Light%20Skin%20Tone.png',
    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/post/remark/开发和应用场景', activeMatch: '/remark/' },
      { text: '区块链', link: '/post/chain/$DUNDUN', activeMatch: '/chain/' },
      {
        text: '实用工具',
        items: [
          {
            text: '表情包',
            items: [
              { text: 'Fluent Emoji Mart', link: 'https://fluent-emoji-mart.zqskate.com/' },
              { text: 'Fluent Emoji', link: 'https://fluentemoji.com/' },
              { text: 'Animated Fluent Emojis', link: 'https://animated-fluent-emoji.vercel.app/' }
            ]
          }
        ]
      },
      // { text: '生活', link: '/post/life/炒菜类', activeMatch: '/life/' }
    ],


    sidebar: {
      "/post/remark/": [
        {
          text: '笔记',
          items: [
            { text: '博客日志', link: '/post/remark/博客日志' },
            { text: '开发和应用场景', link: '/post/remark/开发和应用场景' },
            { text: '常用软件命令行', link: '/post/remark/常用软件命令行' }
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
          text: '食谱',
          items: [
            { text: '炒菜类', link: '/post/life/炒菜类' },
            { text: '蒸煮类', link: '/post/life/蒸煮类' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HttpStatusOK' }
    ],

    footer: {
      message: 'Powered by VitePress © 2024 Edison. All rights reserved.',
    }
  }
})
