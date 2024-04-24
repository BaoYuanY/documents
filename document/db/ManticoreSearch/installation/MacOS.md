---
title: Manticore Search
titleTemplate: MacOS
outline: 'deep'
---

# 在MacOS上安装Manticore

### 1. 通过Homebrew软件包管理器

`brew install manticoresoftware/tap/manticoresearch manticoresoftware/tap/manticore-extra`

以brew服务的形式启动Manticore

`brew services start manticoresearch`

Manticore的默认配置文件位于 `/usr/local/etc/manticoresearch/manticore.conf` 或 `/opt/homebrew/etc/manticoresearch/manticore.conf`。

如果您计划使用 indexer 从诸如MySQL、PostgreSQL或其他使用ODBC的数据库中获取数据，您可能需要相应的附加库，如 mysql@5.7 、 libpq 和 unixodbc

### 2. 开发包
如果您喜欢“Nightly”（开发）版本，请执行以下操作：

```
brew tap manticoresoftware/tap-dev
brew install manticoresoftware/tap-dev/manticoresearch-dev manticoresoftware/tap-dev/manticore-extra-dev
brew services start manticoresearch-dev
```
