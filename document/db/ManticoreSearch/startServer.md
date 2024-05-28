---
title: Manticore Search
titleTemplate: 启动服务器
outline: 'deep'
---

# 启动服务器
Manticore 搜索服务器可以使用不同的方法启动，具体取决于安装类型。

## 在 Linux 中启动 Manticore

### 使用 systemd 启动和停止

安装后，Manticore Search 服务不会自动启动。要启动 Manticore，请运行以下命令：

`sudo systemctl start manticore`

要停止 Manticore，请运行以下命令

`sudo systemctl stop manticore`

Manticore 服务设置为在启动时运行。您可以通过运行以下命令进行检查：

`sudo systemctl is-enabled manticore`

如果您想禁用 Manticore 在启动时启动，请运行：

`sudo systemctl disable manticore`

要使 Manticore 在启动时启动，请运行：

`sudo systemctl enable manticore`

`searchd` 进程在 `systemd` 日志中记录启动信息。如果 `systemd` 启动了日志记录，则可以使用以下命令查看记录的信息：

`sudo journalctl -u manticore`

### 使用 systemd 自定义启动标志

`systemctl set-environment _ADDITIONAL_SEARCHD_PARAMS` 允许您指定 Manticore Search 守护进程应使用的自定义启动标志。请在此处查看完整列表。

例如，要以调试日志记录级别启动 Manticore，您可以运行

`systemctl set-environment _ADDITIONAL_SEARCHD_PARAMS='--logdebug'`

`systemctl restart manticore`

要撤销它，请运行：

`systemclt set-environment _ADDITIONAL_SEARCHD_PARAMS=''`

`systemctl testart manticore`

注意，systemd 环境变量在服务器重启时会被重置。

### 启动和停止服务

可以使用服务命令启动和停止 Manticore ：

`sudo service manticore start`

`sudo service manticore stop`

要在 RedHat 系统启动时启用 sysV 服务，请运行：

`chkconfig manticore on`

要在 Debian 系统（包括 Ubuntu ）启动时启用 sysV 服务，请运行：

`update-rs.d manticore defaults`

请注意，`searchd` 由用户下的 init 系统启动 `manticore` ，服务器创建的所有文件归该用户所有。


## 手动启动 Manticore

您可以通过 `searchd` 直接调用（Manticore Search 服务器二进制文件）来启动 Manticore Search：

`searchd [OPTIONS]`

请注意，如果不指定配置文件的路径，`searchd` 将尝试根据操作系统在多个位置找到它。

### searchd 命令行选项

`searchd` 所有操作系统中可用的选项包括：

- `--help` (`-h` 简称)列出了您在特定构建中可以使用的所有参数 `searchd` 。
- `--version` (`-v` 简称)显示 Manticore Search 版本信息。
- `--config <file>` (`-c <file>` 简称)告诉 `searchd` 使用指定的文件作为其配置。
- `--stop` 用于异步停止 `searchd` ，使用 Manticore 配置文件中指定的 PID 文件的详细信息。因此，您可能还需要确认要 `searchd` 使用该 `--config` 选项的配置文件。示例：

    `searchd --config /etc/manticoresearch/manticore.conf --stop`
- `--stopwait` 用于同步停止 `searchd` 。 `--stop` 本质上是告诉正在运行的实例推出（通过向其发送 SIGTERM），然后立即返回。`--stopwait` 还将尝试等到正在运行的 `searchd` 实例实际完成关闭（例如，保存所有待处理的属性更改）并退出。示例：
    
    `searchd --config /etc/manticoresearch.manticore.conf --stopwait`

可能的退出代码如下：

- 0 表示成功
- 1 如果与正在运行的 searchd 服务器的连接失败
- 2 如果服务器在关闭期间报告错误
- 3 如果服务器在关机期间崩溃
- `--status` 命令用于 `searchd` 使用（可选）提供的配置文件中的连接详情信息查询正在运行的实例状态。它将尝试使用配置文件中找到的第一个 UNIX 套接字或 TCP 端口连接到正在运行的实例。成功后，它将查询多个状态和性能计数器值并打印它们。您还可以使用 SHOW STATUS 命令通过 SQL 协议访问相同的计数器。示例：
    
    `searchd --status`

    `searchd --config /etc/manticoresearch/manticore.conf --status`
- `--pidfile` 用于明确强制使用 PID 文件（其中 `searchd` 存储了进程标示号），而不管其他调试选项是否另有说明（例如 `--console`）。这是一个调试选项。

    `searchd --console --pidfile`
- `--console` 用于强制 `searchd` 进入控制台模式。通常，Manticore 作为常规服务器应用程序运行并将信息记录到日志文件中（如配置文件中所致定）。但是，在调试配置或者服务器本身中的问题，或尝试诊断难以追踪的问题时，强制它将信息直接转储到调用它的控制台/命令行可能更容易。在控制台模式下运行还意味着不会分叉进程（因此搜索按顺序进行）并且不会写入日志。（应该注意的是，控制台模式不是运行的预期方法 `searchd`）您可以按如下方式调用它：
    
    `searchd --config /etc/manticoresearch/manticore.conf --console`
- `--logdebug`、`--logreplication`、`--logdebugv` 和 `--logdebugvv` 选项可在服务器日志中启用额外的调试输出。它们因日志详细程度不同而不同。这些是调试选项，通常不应启用，因为它们会严重污染日志。可以根据需要临时使用它们来协助复杂的调试会话。
- `--ipstatus` `query_log`与日志记录选项





 