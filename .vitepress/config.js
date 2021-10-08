
module.exports = {
  lang: 'en-US',
  title: 'Awesome Board Games',
  description: 'a curated list of awesome board games',

  themeConfig: {
    repo: 'edm00se/awesome-board-games',
    docsDir: '.',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contributing', link: '/contributing.html' },
      {
        text: 'More...',
        items: [
          { text: 'Formatting', link: '/formatting.html' },
          { text: 'Help', link: '/help.html' },
          { text: 'Code of Conduct', link: '/code-of-conduct.html' }
        ]
      }
    ],

    sidebar: {
      '/': '',
      '/contributing.html': '',
      '/formatting.html': '',
      '/help.html': '',
      '/code-of-conduct.html': ''
    },

    algolia: {
      apiKey: '74f2353ad49785793c24440b3521ed96',
      indexName: 'awesomeboard'
    }
  }
}