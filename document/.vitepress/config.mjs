import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "BY's Documents",
    description: "Documents",
    head: [['link', {rel: 'icon', href: '/images/logo.png'}]],
    markdown: {
        image: {
            // 图片懒加载
            // lazyLoading: true
        }
    },
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
            // message: 'Released under the MIT License.',
            message: 'Copyright © 2024-present BaoYuan',
            copyright: '<a href="http://beian.miit.gov.cn/">豫ICP备2023010776号-2</a>'
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
            ],
            '/db/ManticoreSearch/': [
                {
                    text: 'Manticore Search',
                    items: [
                        {text: '介绍', link: '/db/ManticoreSearch/introduction'},
                        {text: '⚠️请先阅读', link: '/db/ManticoreSearch/readThisFirst'},
                        {
                            text: '安装',
                            collapsed: true,
                            items: [
                                {text: 'Docker', link: '/db/ManticoreSearch/installation/Docker'},
                                {text: 'RedHat or CentOS', link: '/db/ManticoreSearch/installation/RedhatOrCentOS'},
                                {text: 'Debian or Ubuntu', link: '/db/ManticoreSearch/installation/DebianOrUbuntu'},
                                {text: 'MacOS', link: '/db/ManticoreSearch/installation/MacOS'},
                                {text: 'Windows', link: '/db/ManticoreSearch/installation/Windows'},
                            ]
                        },
                        {text: '快速入门指南', link: '/db/ManticoreSearch/quickStartGuide'},
                    ]
                }
            ]
        },
        socialLinks: [
            {icon: 'telegram', link: 'https://t.me/BaoYuanY'}
        ]
    }
})
