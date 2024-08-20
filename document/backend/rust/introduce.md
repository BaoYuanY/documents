---
title: 介绍
titleTemplate: Rust
outline: 'deep'
---

# Rust 介绍

| 命令 | 用途 | 举例 |
|----|-----|-----|
| cargo | Rust 的包管理器，构建工具和依赖解决 | cargo new --bin my_project 可以创建一个名为 my_project 的新的 Rust 项目 |
| rustup | 用来升级维护 Rust 编译器套件的版本 | rustup update stable 可将 Rust stable 版本升级至最新 |
| rust-fmt | 可用来对 Rust 代码按配置格式进行自动排版，用来统一 Rust 代码风格 | 配合 cargo，直接在工程目录下运行 cargo fmt 就可以对整个工程进行排版 |
| rust-clippy| 可用来对 Rust 代码进行严谨性检查，指出一些写得不规范的地方 | 配合 cargo，直接在工程目录下运行 cargo clippy 就可以对整个工程进行检查了 |