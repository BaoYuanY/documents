---
title: Manticore Search
titleTemplate: RedhatOrCentOS
outline: 'deep'
---

# 在RedHat或者CentOS上安装Manticore软件包

### 1. Supported releases: 支持的版本：

- CentOS 7, RHEL 7, Oracle Linux 7
- CentOS 8, RHEL 8, Oracle Linux 8, CentOS Stream 8
- Amazon Linux 2
- CentOS 9, RHEL 9, AlmaLinux 9

### 2. YUM仓库

**在RedHat/CentOS上安装Manticore的最简单方法是使用我们的YUM软件源**

安装存储库

`sudo yum install https://repo.manticoresearch.com/manticore-repo.noarch.rpm`

然后安装Manticore Search

`sudo yum install manticore manticore-extra`

如果您正在从旧版本升级到Manticore 6，建议先删除旧的软件包，以避免更新后的软件包结构引起的冲突

`sudo yum remove manticore*`

它不会删除您的数据和配置文件。

**如果您喜欢“Nightly”（开发）版本，请执行以下操作：**

```
sudo yum -y install https://repo.manticoresearch.com/manticore-repo.noarch.rpm && \
sudo yum -y --enablerepo manticore-dev install manticore manticore-extra manticore-common manticore-server manticore-server-core manticore-tools manticore-executor manticore-buddy manticore-backup manticore-columnar-lib manticore-server-core-debuginfo manticore-tools-debuginfo manticore-columnar-lib-debuginfo  manticore-icudata
```

### 3. 独立的RPM软件包
从Manticore仓库下载独立的RPM文件，请按照https://manticoresearch.com/install/上提供的说明进行操作。

### 4. 您可能需要的更多软件包


#### 4.1 indexer

如果您计划使用索引器从外部源创建表格，您需要确保已安装相应的客户端库，以便使您想要的索引源可用。
下面的命令将一次性安装所有组件；可以直接使用该命令，或者根据需要减少安装的库（仅安装mysql源码 - 只需 mysql-libs 即可，不需要安装unixODBC）。
`sudo yum install mysql-libs postgresql-libs expat unixODBC`

在CentOS Stream 8中，您可能需要运行：

`dnf install mariadb-connector-c`

if you get error `sql_connect: MySQL source wasn't initialized. Wrong name in dlopen?` trying to build a plain table from MySQL.

#### 4.2 Ukrainian lemmatizer
Lemmatizer 需要Python 3.9+。确保您已安装并配置了它。

以下是在Centos 7/8上安装Python 3.9和Ukrainian lemmatizer的方法：

```
# install Manticore Search and UK lemmatizer from YUM repository
yum -y install https://repo.manticoresearch.com/manticore-repo.noarch.rpm
yum -y install manticore manticore-lemmatizer-uk

# install packages needed for building Python
yum groupinstall "Development Tools" -y
yum install openssl-devel libffi-devel bzip2-devel wget -y

# download, build and install Python 3.9
cd ~
wget https://www.python.org/ftp/python/3.9.2/Python-3.9.2.tgz
tar xvf Python-3.9.2.tgz
cd Python-3.9*/
./configure --enable-optimizations --enable-shared
make -j8 altinstall

# update linker cache
ldconfig

# install pymorphy2 and UK dictionary
pip3.9 install pymorphy2[fast]
pip3.9 install pymorphy2-dicts-uk
```
