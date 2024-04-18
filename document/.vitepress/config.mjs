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

        // 页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024-present BaoYuan'
        },

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
                        {text: 'PHP的发展历程', link: '/backend/php/development'}
                    ]
                }
            ],
            '/other/FFmpeg/': [
                {
                    text: 'FFmpeg',
                    items: [
                        {text: 'FFmpeg引言', link: '/other/FFmpeg/introduction'},
                        {text: 'FFmpeg实用命令', link: '/other/FFmpeg/practicalCommands'},
                        {text: '常用编码器与参数', link: '/other/FFmpeg/encoderAndParameters'},
                    ]
                }
            ]
        },
        socialLinks: [
            {icon: 'telegram', link: 'https://t.me/BaoYuanY'}
        ]
    }
})
