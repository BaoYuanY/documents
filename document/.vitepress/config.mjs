import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "BY's Documents",
    description: "Documents",
    head: [['link', {rel: 'icon', href: '/images/logo.png'}]],
    themeConfig: {

        // logo
        logo: "/images/logo.png",

        // 导航 https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            //{ text: '后端', link: '/backend/' },
            {
                text: 'Other',
                items: [
                    {text: 'FFmpeg', link: '/other/FFmpeg/'}
                ]
            }
        ],

        // 侧边栏
        sidebar: {
            '/': [],
            'demo': [
                {
                    text: '侧边栏',
                    items: [
                        {text: '121', link: '/markdown-examples'},
                        {text: 'Runtime API Examples', link: '/api-examples'}
                    ]
                }
            ],
            '/backend/': [
                {
                    text: 'PHP',
                    items: [
                        {text: 'Index', link: '/guide/'},
                        {text: 'One', link: '/guide/one'},
                        {text: 'Two', link: '/guide/two'}
                    ]
                }
            ]
        },
        socialLinks: [
            {icon: 'telegram', link: 'https://t.me/BaoYuanY'}
        ]
    }
})
