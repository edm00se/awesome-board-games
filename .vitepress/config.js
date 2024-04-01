
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
      text: 'Guide',
      items: [
        { text: 'Main', link: '/' },
        { text: 'Contributing', link: '/contributing' },
        { text: 'Formatting', link: '/formatting' },
        { text: 'Help', link: '/help' },
        { text: 'Code of Conduct', link: '/code-of-conduct' }
      ]
    },

    search: {
      provider: 'algolia',
      options: {
        appId: 'HM2OEMY7QZ',
        apiKey: '4fed2ba7f2cd080ad79969be2934a7a9',
        indexName: 'awesomeboard'
      }
    }
  }
}
