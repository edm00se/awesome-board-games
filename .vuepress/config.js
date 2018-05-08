const env = process.env.NODE_ENV || 'dev';

const config = {
    title: 'Awesome Board Games',
    description: 'a curated list of awesome board games',
    base: '/',
    themeConfig: {
        repo: 'https://github.com/edm00se/awesome-board-games/blob/master/contributing.md',
        repoLabel: 'Add your favorite game!',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Contributing', link: '/contributing.html' },
            { text: 'More...', items: [
                { text: 'Formatting', link: '/formatting.html' },
                { text: 'Help', link: '/help.html' },
                { text: 'Code of Conduct', link: '/code-of-conduct.html' }
            ] }
        ],
        sidebar: [
            '/',
            '/contributing.html',
            '/formatting.html',
            '/help.html',
            '/code-of-conduct.html'
        ]
    }
};

if('production' === env){
    config.ga = 'UA-52886144-6';
}

module.exports = config;