---
title: Docker
titleTemplate: 什么是 Docker
outline: 'deep'
---

# 什么是 Docker

**Docker** 最初是 `dotCloud` 公司创始人 [Solomon Hykes](https://github.com/shykes) 在法国期间发起的一个公司内部项目，它是基于 `dotCloud` 公司多年云服务技术的一次革新，并于 [2013 年 3 月以 Apache 2.0 授权协议开源][docker-soft]，主要项目代码在 [GitHub](https://github.com/moby/moby) 上进行维护。`Docker` 项目后来还加入了 Linux 基金会，并成立推动 [开放容器联盟（OCI）](https://opencontainers.org/)。

**Docker** 自开源后受到广泛的关注和讨论，至今其 [GitHub 项目](https://github.com/moby/moby) 已经超过 5 万 7 千个星标和一万多个 `fork`。甚至由于 `Docker` 项目的火爆，在 `2013` 年底，[dotCloud 公司决定改名为 Docker](https://www.docker.com/blog/dotcloud-is-becoming-docker-inc/)。`Docker` 最初是在 `Ubuntu 12.04` 上开发实现的；`Red Hat` 则从 `RHEL 6.5` 开始对 `Docker` 进行支持；`Google` 也在其 `PaaS` 产品中广泛应用 `Docker`。

**Docker** 使用 `Google` 公司推出的 [Go 语言](https://golang.google.cn/) 进行开发实现，基于 `Linux` 内核的 [cgroup](https://zh.wikipedia.org/wiki/Cgroups)，[namespace](https://en.wikipedia.org/wiki/Linux_namespaces)，以及 [OverlayFS](https://docs.docker.com/storage/storagedriver/overlayfs-driver/) 类的 [Union FS](https://en.wikipedia.org/wiki/Union_mount) 等技术，对进程进行封装隔离，属于 [操作系统层面的虚拟化技术](https://en.wikipedia.org/wiki/Operating-system-level_virtualization)。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。最初实现是基于 [LXC](https://linuxcontainers.org/lxc/introduction/)，从 `0.7` 版本以后开始去除 `LXC`，转而使用自行开发的 [libcontainer](https://github.com/docker/libcontainer)，从 `1.11` 版本开始，则进一步演进为使用 [runC](https://github.com/opencontainers/runc) 和 [containerd](https://github.com/containerd/containerd)。

![Docker 架构](https://docs.microsoft.com/en-us/virtualization/windowscontainers/deploy-containers/media/docker-on-linux.png)

> `runc` 是一个 Linux 命令行工具，用于根据 [OCI容器运行时规范](https://github.com/opencontainers/runtime-spec) 创建和运行容器。

> `containerd` 是一个守护程序，它管理容器生命周期，提供了在一个节点上执行容器和管理镜像的最小功能集。

**Docker** 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 `Docker` 技术比虚拟机技术更为轻便、快捷。

下面的图片比较了 **Docker** 和传统虚拟化方式的不同之处。传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。

![传统虚拟机与Docker的比较](../_images/传统虚拟机与Docker比较.png)

::: details 查看图片说明（AI）
这张图片展示了传统虚拟机（Virtual Machines）和Docker容器（Docker）之间的比较。从图中可以看出，两者在架构和资源使用上存在显著差异：

**Docker容器：**

应用和依赖：Docker容器包含了应用程序（App A/B）及其依赖项（Bins/Libs），但只限于必要的二进制文件和库。
隔离性：容器作为主机操作系统上用户空间中的孤立进程运行，这意味着它们与其他容器共享同一个内核，但仍然保持隔离。
资源效率：由于共享内核，Docker容器享有资源隔离和分配的优势，但相比于虚拟机，它们更加便携和高效。

**传统虚拟机：**

应用和依赖：虚拟机不仅包含了应用程序（可能只有几十MB）和必要的二进制文件和库，还包括整个客户操作系统（Guest OS），这使得虚拟机的体积可能达到数GB。
隔离性：每个虚拟机通过Hypervisor（虚拟机监视器）运行，拥有自己的内核和操作系统副本，提供了高度的隔离性。
资源占用：由于每个虚拟机都需要完整的操作系统，因此它们在资源占用上比Docker容器要大得多。

**Docker Engine：**

Docker Engine是Docker容器的运行时环境，它允许容器在主机操作系统上运行，而不需要为每个应用程序启动一个完整的操作系统。

**Host OS：**

在Docker的架构中，所有容器共享同一个宿主机操作系统（Host OS），而在传统虚拟机中，每个虚拟机都有自己的客户操作系统（Guest OS）。


<u>总结来说，Docker容器在资源利用和部署效率上优于传统虚拟机，但虚拟机提供了更高的隔离性和安全性。选择使用哪种技术取决于具体的应用场景和需求。</u>
:::
