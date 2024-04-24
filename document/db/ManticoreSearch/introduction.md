---
title: Manticore Search
titleTemplate: 介绍
outline: 'deep'
---

# Manticore Search 介绍

<u>Manticore Search</u>是一个专为搜索而设计的多存储数据库，具有强大的全文搜索功能。

作为一个开源数据库（可在 [GitHub](https://github.com/manticoresoftware/manticoresearch/)上获得），Manticore Search是在2017年作为 [Sphinx Search](https://sphinxsearch.com/)引擎的延续而创建的。开发团队采用了Sphinx的所有最佳功能，并显著改进了其功能，同时修复了数百个错误（详见 [变更日志](https://manual.manticoresearch.com/Changelog)）。通过几乎完全的代码重写，Manticore Search现在是一个现代化、快速、轻量级的数据库，具有完整的功能和出色的全文搜索能力。

## Manticore的特点
#### 1. 强大而快速的全文搜索，适用于小型和大型数据集
- 超过20个[全文运算符](https://play.manticoresearch.com/fulltextintro/)和20多个排名因素
- 自定义排名
- 词干提取
- 词形还原
- 停用词
- 同义词
- 词形
- 字符和词级别的高级分词
- 适当的中文分词
- 文本高亮

#### 2. 多线程
Manticore Search利用智能查询并行化来降低响应时间，并在需要时充分利用所有CPU核心。

#### 3. 基于成本的查询优化器
基于成本的查询优化器使用关于索引数据的统计数据来评估给定查询的不同执行计划的相对成本。
这使得优化器能够确定检索所需结果的最高效计划，考虑到索引数据的大小、查询的复杂性和可用资源等因素。

#### 4. 存储选项
Manticore提供行式和列式存储选项，以适应不同大小的数据集。传统和默认的行式存储选项适用于所有大小的数据集-小型、中型和大型，而列式存储选项通过Manticore列式库提供给更大的数据集。
这些存储选项之间的关键区别在于，行存储要求将所有属性（不包括全文字段）保留在RAM中以实现最佳性能，而列存储则不需要，因此RAM消耗较低，但性能可能稍慢（如https://db-benchmarks.com/ 上的统计数据所示）。

#### 5. 自动二级索引
[Manticore柱状库](https://github.com/manticoresoftware/columnar/)使用[分段几何模型索引](https://github.com/gvinciguerra/PGM-index)，该索引利用了索引键和其在内存中位置之间的学习映射。
这种映射的简洁性，加上一种特殊的递归构建算法，使得PGM索引成为一种在空间上比传统索引高出数个数量级的数据结构，同时仍然提供最佳的查询和更新时间性能。
所有数字字段默认情况下都启用了二级索引。

#### 6. SQL优先
Manticore的本地语法是SQL，它支持通过HTTP和MySQL协议进行SQL连接，允许使用任何编程语言中流行的MySQL客户端进行连接。

#### 7. JSON通过HTTP传输
为了更加程序化地管理数据和模式，Manticore提供了类似于Elasticsearch的HTTP JSON协议。

#### 8. Elasticsearch兼容的写入
您可以执行与Elasticsearch兼容的插入和替换JSON查询，这使得Manticore可以与Logstash（版本<7.13）、Filebeat和Beats系列的其他工具一起使用。

#### 9. 声明式和命令式的模式管理
轻松在线或通过配置文件创建、更新和删除表格。

#### 10. C++的好处和PHP的便利性
Manticore Search守护进程是用C++开发的，具有快速启动时间和高效的内存利用率。低级优化的利用进一步提升了性能。另一个关键组件叫做Manticore Buddy，它是用PHP编写的，用于不需要极快响应时间或极高处理能力的高级功能。
尽管对C++代码的贡献可能具有挑战性，但使用Manticore Buddy添加新的SQL/JSON命令应该是一个简单的过程。

#### 11. 实时插入
新添加或更新的文件可以立即阅读。

#### 12. 互动课程，便于学习
提供免费的[互动课程](https://play.manticoresearch.com/)，使学习变得轻松。

#### 13. 交易
虽然Manticore不完全符合ACID标准，但它支持用于原子更改的隔离事务和用于安全写入的二进制日志记录。

#### 14. 内置复制和负载均衡
数据可以分布在服务器和数据中心中，任何Manticore Search节点都可以充当负载均衡器和数据节点。Manticore使用Galera库实现了几乎同步的多主复制，确保所有节点之间的数据一致性，防止数据丢失，并提供出色的复制性能。

#### 15. 内置备份功能
Manticore配备了一个外部工具manticore-backup和BACKUP SQL命令，以简化数据备份和恢复的过程。或者，您可以使用mysqldump进行逻辑备份。

#### 16. 开箱即用的数据同步
Manticore的 `indexer` 工具和全面的配置语法使得从MySQL、PostgreSQL、ODBC兼容数据库、XML和CSV等数据源同步数据变得简单。

#### 17. 集成选项
您可以使用FEDERATED引擎或通过ProxySQL将Manticore Search与MySQL/MariaDB服务器集成。
您可以使用Apache Superset和Grafana来可视化存储在Manticore中的数据。可以使用各种MySQL工具来交互式地开发Manticore查询，例如HeidiSQL和DBForge。

#### 18. 流过滤变得简单
Manticore提供了一种特殊的表类型，即“渗滤”表，它允许您搜索查询而不是数据，使其成为过滤全文数据流的高效工具。只需将查询存储在表中，通过将每批文档发送到Manticore Search来处理数据流，并仅接收与存储的查询匹配的结果。

## 可能的应用：

Manticore 有多种用途，包括：

- 全文搜索
    - 享受强大的全文搜索语法和低内存消耗（最低可达7-8 MB）的好处，适用于小数据量。
    - 借助Manticore的高可用性和处理大型表格的能力，可以从大数据中获益。
- OLAP：使用Manticore Search和Manticore Columnar Library在单个或多个服务器上分析数千兆字节的数据。
- 分面搜索
- 地理空间搜索
- 拼写纠正
- 自动完成
- 数据流过滤

## 要求

- 架构：arm64 或者 x86_64
- 操作系统：基于Debian（例如Debian、Ubuntu、Mint）、基于RHEL（例如RHEL、CentOS、Alma、Oracle Linux、Amazon Linux）、Windows或MacOS。
- Manticore Columnar Library需要使用支持SSE >= 4.2的CPU，提供列式存储和二级索引功能。
- 没有特定的磁盘空间或RAM要求。一个空的Manticore Search实例只使用大约40MB的RSS RAM。
