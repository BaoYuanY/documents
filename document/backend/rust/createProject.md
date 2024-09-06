---
title: 创建项目
titleTemplate: Rust
outline: 'deep'
---

# 创建一个项目
使用 Cargo 工具创建一个项目
```rust
cargo new study
```

示例

![创建项目](/images/backend/rust/createProject/createdProject.png)

## Cargo.toml 说明
第一行，`[package]`，是一个片段（section）标题，表明下面的语句用来配置一个包。随着我们在这个文件增加更多的信息，还将增加其他片段（section）。

接下来的三行设置了 Cargo 编译程序所需的配置：项目的名称、项目的版本以及要使用的 Rust 版本。目前可接受的有 Rust 2015、Rust 2018 和 Rust 2021，可以看得出来是3年一更新。

最后一行，`[dependencies]`，是罗列项目依赖的片段的开始。在 Rust 中，代码包被称为 crates。这个项目并不需要其他的 crate，不过在第二章的第一个项目会用到依赖，那时会用得上这个片段。

## Hello, world!

### 方式一
使用 `rustc`
```rust
rustc src/main.rs
```

![rustcExecute](/images/backend/rust/createProject/rustcExecute.png)

运行以后输出内容
```
baoyuan@192 study % rustc src/main.rs
baoyuan@192 study % ./main 
Hello, world!
baoyuan@192 study % 

```

### 方式二

使用 `cargo run`
```rust
cargo run
```

![cargoRun](/images/backend/rust/createProject/cargoRun.png)
 