---
title: Manticore Search
titleTemplate: DebianOrUbuntu
outline: 'deep'
---

# 在Debian或Ubuntu中安装Manticore

### 1. 支持的版本:

- Debian
    - 10.0 (Buster)
    - 11.0 (Bullseye)
    - 12.0 (Bookworm)
- Ubuntu
    - 18.04 (Bionic)
    - 20.04 (Focal)
    - 21.04 (Hirsute Hippo)
    - 22.04 (Ubuntu Jammy)
- Mint
    - 19
    - 20

### 2. APT仓库
在Ubuntu/Debian/Mint中安装Manticore的最简单方法是使用我们的APT软件源。

安装存储库

```
wget https://repo.manticoresearch.com/manticore-repo.noarch.deb
sudo dpkg -i manticore-repo.noarch.deb
sudo apt update
```

（如果未安装，请安装 `wget` ；如果 `apt-key` 失败，请安装 `gnupg2` ）。

然后安装Manticore Search

`sudo apt install manticore manticore-extra`

如果您正在从旧版本升级到Manticore 6，建议先删除旧的软件包，以避免更新后的软件包结构引起的冲突

`sudo apt remove manticore*`

它不会删除您的数据和配置文件。

### 3. 开发包
如果您喜欢“Nightly”（开发）版本，请执行以下操作：

```
wget https://repo.manticoresearch.com/manticore-dev-repo.noarch.deb && \
sudo dpkg -i manticore-dev-repo.noarch.deb && \
sudo apt -y update && \
sudo apt -y install manticore manticore-extra manticore-common manticore-server manticore-server-core manticore-tools manticore-executor manticore-buddy manticore-backup manticore-columnar-lib manticore-server-core-dbgsym manticore-tools-dbgsym manticore-columnar-lib-dbgsym manticore-icudata-65l
```

### 4. 独立的DEB软件包
从Manticore仓库下载独立的DEB文件，请按照https://manticoresearch.com/install/上提供的说明进行操作。

