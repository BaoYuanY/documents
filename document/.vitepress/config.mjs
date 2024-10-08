import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "BY's Documents",
    description: "Documents",
    head: [
        ['link', {rel: 'icon', href: '/images/logo.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}]
    ],
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
            {
                text: 'BE',
                items: [
                    {text: 'Rust', link: '/backend/rust/'},
                ]
            },
            //{ text: '后端', link: '/backend/' },
            // {
            //     text: 'Other',
            //     items: [
            //         {text: 'FFmpeg', link: '/other/FFmpeg/'},
            //         {text: 'Manticore Search', link: '/db/ManticoreSearch/'},
            //         {text: 'Docker', link: '/other/Docker/'},
            //     ]
            // }
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
            '/other/Docker/': [
                {
                    text: 'Docker',
                    items: [
                        {
                            text: 'Docker 简介',
                            collapsed: true,
                            items: [
                                {text: '什么是 Docker', link: '/other/Docker/introduction/what'},
                                {text: '为什么要使用 Docker', link: '/other/Docker/introduction/why'},
                            ]
                        },
                        {text: '基本概念', link: '/other/Docker/basicConcepts'},
                        {
                            text: '安装 Docker',
                            collapsed: true,
                            items: [
                                {text: 'Ubuntu', link: '/other/Docker/installation/Ubuntu'},
                                {text: 'Debian', link: '/other/Docker/installation/Debian'},
                                {text: 'Fedora', link: '/other/Docker/installation/Fedora'},
                                {text: 'CentOS', link: '/other/Docker/installation/CentOS'},
                                {text: 'Raspberry Pi', link: '/other/Docker/installation/RaspberryPi'},
                                {text: '镜像加速器', link: '/other/Docker/installation/MirrorAcceleration'},
                                {text: '开启实验特性', link: '/other/Docker/installation/EnableExperimentalFeatures'},
                            ]
                        },
                        {
                            text: '使用镜像',
                            collapsed: true,
                            items: [
                                {text: '获取镜像', link: '/other/Docker/useMirror/get'},
                                {text: '列出镜像', link: '/other/Docker/useMirror/list'},
                                {text: '删除本地镜像', link: '/other/Docker/useMirror/delete'},
                                {text: '利用 commit 理解镜像构成', link: '/other/Docker/useMirror/commit'},
                                {text: '使用 Dockerfile 定制镜像', link: '/other/Docker/useMirror/useDockerfile'},
                                {text: 'Dockerfile 指令详解', link: '/other/Docker/useMirror/DockerfileExplain'},
                                {text: 'Dockerfile 多阶段构建', link: '/other/Docker/useMirror/DockerfileBuild'},
                                {text: '构建多种系统架构支持的 Docker 镜像', link: '/other/Docker/useMirror/buildDocker'},
                                {text: '其它制作镜像的方式', link: '/other/Docker/useMirror/createMirror'},
                                {text: '实现原理', link: '/other/Docker/useMirror/implementationPrinciple'},
                            ]
                        },
                        {text: '操作容器', link: '/other/Docker/operationContainer'},
                        {text: '访问仓库', link: '/other/Docker/visitRepository'},
                        {text: '数据管理', link: '/other/Docker/dataManagement'},
                        {text: '使用网络', link: '/other/Docker/useTheNetwork'},
                        {text: '高级网络配置', link: '/other/Docker/advancedNetworkConfiguration'},
                        {text: 'Docker Buildx', link: '/other/Docker/DockerBuildx'},
                        {
                            text: 'Docker Compose',
                            collapsed: true,
                            items: [
                                {text: '简介', link: '/other/Docker/DockerCompose/introduction'},
                                {text: 'Compose v2', link: '/other/Docker/DockerCompose/composeV2'},
                                {text: '安装与卸载', link: '/other/Docker/DockerCompose/installAndDelete'},
                                {text: '使用', link: '/other/Docker/DockerCompose/use'},
                                {text: '命令说明', link: '/other/Docker/DockerCompose/commandDescription'},
                                {text: 'Compose 模版文件', link: '/other/Docker/DockerCompose/composeTemplateFile'},
                                {text: '实战 Django', link: '/other/Docker/DockerCompose/actualCombatDjango'},
                                {text: '实战 Rails', link: '/other/Docker/DockerCompose/actualCombatRails'},
                                {text: '实战 WordPress', link: '/other/Docker/DockerCompose/actualCombatWordPress'},
                                {text: '实战 LNMP', link: '/other/Docker/DockerCompose/actualCombatLNMP'},
                            ]
                        },
                        {text: 'Swarm mode', link: '/other/Docker/SwarmMode'},
                        {text: '安全', link: '/other/Docker/safe'},
                        {text: '底层实现', link: '/other/Docker/underlyingImplementation'},
                        {text: 'Etcd 项目', link: '/other/Docker/etcd'},
                        {text: 'Fedora CoreOS', link: '/other/Docker/fedoraCoreOS'},
                        {text: '开源容器编排引擎Kubernetes', link: '/other/Docker/Kubernetes/introduction'},
                        {text: '部署 Kubernetes', link: '/other/Docker/Kubernetes/deploy'},
                        {text: 'Kubernetes 命令行 kubectl', link: '/other/Docker/Kubernetes/kubectl'},
                        {text: '容器与云计算', link: '/other/Docker/containersAndCloudComputing'},
                        {text: '实战案例 - 操作系统', link: '/other/Docker/actualCombatOperatingSystem'},
                        {text: '实战案例 - CI/CD', link: '/other/Docker/actualCombatCIAndCD'},
                        {text: '在 IDE 中使用 Docker', link: '/other/Docker/useDockerInTheIDE'},
                        {text: 'podman 下一代 Linux 容器工具', link: '/other/Docker/podman'},
                    ]
                }
            ],
            '/backend/rust/': [
                {
                    text: 'Rust',
                    items: [
                        {text: '介绍', link: '/backend/rust/introduce'},
                        {text: '学前教育', link: '/backend/rust/preschoolEducation'},
                        {text: '安装', link: '/backend/rust/install'},
                        {text: '创建一个项目', link: '/backend/rust/createProject'},
                    ]
                }
            ]
        },
        socialLinks: [
            // {icon: 'telegram', link: 'https://t.me/BaoYuanY'}
            {
                icon: {
                    svg: '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4262" width="512" height="512"><path d="M417.28 795.733333l11.946667-180.48 327.68-295.253333c14.506667-13.226667-2.986667-19.626667-22.186667-8.106667L330.24 567.466667 155.306667 512c-37.546667-10.666667-37.973333-36.693333 8.533333-55.466667l681.386667-262.826666c31.146667-14.08 61.013333 7.68 49.066666 55.466666l-116.053333 546.56c-8.106667 38.826667-31.573333 48.213333-64 30.293334L537.6 695.466667l-84.906667 82.346666c-9.813333 9.813333-17.92 17.92-35.413333 17.92z" fill="#2c2c2c" p-id="4263"></path></svg>'
                },
                link: 'https://t.me/BaoYuanY',
            },
        ]
    }
})
