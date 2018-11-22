const env = process.env.NODE_ENV || 'dev';

const config = {
    title: 'Awesome Board Games',
    description: 'a curated list of awesome board games',
    base: '/',
    ga: 'UA-129685278-1',
    serviceWorker: true,
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Contributing', link: '/contributing.html' },
            { text: 'More...', items: [
              { text: 'Formatting', link: '/formatting.html' },
              { text: 'Help', link: '/help.html' },
              { text: 'Code of Conduct', link: '/code-of-conduct.html' }
            ]}
        ],
        sidebar: [
            '/',
            '/contributing.html',
            '/formatting.html',
            '/help.html',
            '/code-of-conduct.html'
        ]
    },
    head: [
      ['link', { rel: ['shortcut', 'icon'], href:'/icon/favicon.ico', type:'image/x-icon' }],
      ['link', { rel: 'icon', href: '/icon/favicon-32x32.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'icon', href: '/icon/favicon-196x196.png', sizes: '196x196' }],
      ['link', { rel: 'icon', href: '/icon/favicon-96x96.png', sizes: '96x96' }],
      ['link', { rel: 'icon', href: '/icon/favicon-32x32.png', sizes: '32x32' }],
      ['link', { rel: 'icon', href: '/icon/favicon-16x16.png', sizes: '16x16' }],
      ['link', { rel: 'icon', href: '/icon/favicon-128.png', sizes: '128x128' }],
      ['link', { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/icon/apple-touch-icon-57x57.png' }],
      ['link', { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/icon/apple-touch-icon-114x114.png' }],
      ['link', { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/icon/apple-touch-icon-72x72.png' }],
      ['link', { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/icon/apple-touch-icon-144x144.png' }],
      ['link', { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/icon/apple-touch-icon-60x60.png' }],
      ['link', { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/icon/apple-touch-icon-120x120.png' }],
      ['link', { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/icon/apple-touch-icon-76x76.png' }],
      ['link', { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/icon/apple-touch-icon-152x152.png' }],
      ['meta', { name: 'application-name', content: '/misc' }],
      ['meta', { name: 'msapplication-TileColor', content: '#FFFFFF' }],
      ['meta', { name:'msapplication-TileImage', content:'/icon/mstile-144x144.png' }],
      ['meta', { name:'msapplication-square70x70logo', content:'/icon/mstile-70x70.png' }],
      ['meta', { name:'msapplication-square150x150logo', content:'/icon/mstile-150x150.png' }],
      ['meta', { name:'msapplication-wide310x150logo', content:'/icon/mstile-310x150.png' }],
      ['meta', { name:'msapplication-square310x310logo', content:'/icon/mstile-310x310.png' }]
    ]
};

if('production' === env){
    config.ga = 'UA-52886144-6';
}

module.exports = config;
