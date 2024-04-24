---
title: Manticore Search
titleTemplate: Windows
outline: 'deep'
---

# 在Windows中安装Manticore

1. 下载Manticore Search安装程序并运行。按照安装说明进行安装。
2. 选择要安装的目录。
3. 选择您想要安装的组件。我们建议安装全部组件。
4. Manticore Search 在RT模式下附带预配置的 manticore.conf 文件。不需要额外的配置。


### 安装为Windows服务
要将 `searchd` （Manticore Search服务器）安装为Windows服务，请运行：

`\path\to\searchd.exe --install --config \path\to\config --servicename Manticore`

请确保使用配置文件的完整路径，否则 `searchd.exe` 在启动为服务时将无法找到它。

安装完成后，可以从Microsoft Management Console的服务快捷方式中启动该服务。

一旦启动，您可以使用MySQL命令行界面访问Manticore

`mysql -P9306 -h127.0.0.1`

请注意，在本手册的大多数示例中，我们使用 -h0 来连接到本地主机，但在Windows中，您必须明确使用 localhost 或 127.0.0.1 。
