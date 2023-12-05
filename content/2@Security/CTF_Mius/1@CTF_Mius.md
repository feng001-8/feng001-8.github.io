---
title: Mius
description: ctf杂项
---

# Mius 杂项



## mius

### 文件操作与隐写

#### 常用文件头信息

| **图片**       | 文件头                        | 文件尾                   |
| -------------- | ----------------------------- | ------------------------ |
| JPG            | FF D8 FF                      | FF D9                    |
| PNG            | 89 50 4E 47 0D 0A 1A 0A       | AE 42 60 82              |
| GIF            | 47 49 46 38 39(37) 61         | 00 3B                    |
| TGA            | 00 00 02 00（没有压缩前）     | 00 00 10 00 00（压缩后） |
| BMP            | 42 4D                         |                          |
| Psd            | 38 42 50 53                   |                          |
| **office文件** | 文件头                        |                          |
| xls/or         | D0 CF 11 E0                   |                          |
| mob            | 53 74 61 6E 64 61 72 64 20 4A |                          |
| wpd            | FF 57 50 43                   |                          |
| pdf            | 25 50 44 46 2D 31 2E          |                          |
| **压缩文件**   | 文件头                        | 文件尾                   |
| zip            | 50 4B 03 04                   | 50 4B                    |
| rar            | 52 61 72 21                   |                          |
| **音频文件**   | 文件头                        |                          |
| wav            | 57 41 56 45                   |                          |
| audio          | 4D 54 68 64                   |                          |
| acc            | FF F1(9）                     |                          |
| **视频文件**   | 文件头                        |                          |
| avi            | 41 56 49 20                   |                          |
| ram            | 2E 72 61 FD                   |                          |
| mov            | 6D 6F 6F 76                   |                          |
| asf            | 0 26 B2 75 8E 66 CF 11        |                          |
| 代码文件       | 文件头                        |                          |
| xml            | 3C 3F 78 6D 6C                |                          |
| html           | 68 74 6D 6C 3E                |                          |
| qdf            | AC 9E BD 8F                   |                          |
| der            | 30 82 03 C9                   |                          |
|                |                               |                          |



#### 文件没有后缀名

> file [文件名]
>
> 工具识别文件头 [winhex] [notepad++] 
>
> 用十六进制看头文件（前4位）的编码识别文件类型

#### 文件头缺失

> 工具补充文件头

#### 文件分离

> Binwalk 工具
>
> Binwalk filename（查看） / -e filename(分离) 
>
> Foremost 工具
>
> foremost filename -o xxx(目录)
>
> dd 工具
>
> dd if=[目标文件] of=[结果文件] bs=* count=* skip=*
>
> 手动分离

#### 文件合并

> 1.linux的文件合并
>
> cat [合并文件] > [输出文件]
>
> md5sum
>
> 2.windows的文件合并
>
> copy /b [合并文件]+[]... [输入文件]
>
>  certutil -hashfile [校验文件]

### 图片隐写术

**照片**

> **wbs43open-win** 
>
> **zster [文件]**
>
> **tweakpng** （文件头正常，打不开文件，修改crc校验）
>
> * go写通过crc处理照片高度
>
> **bftools** 用于解密照片信息
>
> bftools.exe decode braincopter -o 123.png
>
> bftool.exe run [照片]
>
> **silently** 将文字或者文件隐藏到图片的工具
>
> **JPG图像解密**
>
> stegdetect [.jpg]
>
> 



#### **二维码处理**

> 补全二维码
>
> 取反（黑白）（画图）
>
> Stegetect

### 压缩文件处理

#### 暴力破解

> 文件修复
>
> archpr
>
> Ziperello

#### 伪加密

> zip 
>
> Rar

### 流量取证技术

#### 总体把握

> 协议语法
>
> **过滤命令**
>
> ip.src eq x.x.x.x or ip.dst eq x.x.x.x 或者ip.addr eq x.x.x.x [过滤IP，如源IP或者目标x.x.x.x]
>
> **过滤端口**
>
> Tcp.port eq 80 or udp.port eq 80
>
> Tcp.dstpost == 80
>
> Tcp.srcport == 80
>
> Tcp.port >= 1 and tcp.port <= 80
>
> **过滤协议**
>
> Tcp/udp/arp/icmp/http/ftp/dns/ip
>
> 过滤mac
>
> eth.dst == A0:00:00:04:c5:84 [过滤目标Mac]
>
> 包长度过滤 
>
> udp.length == 26 
>
> Tcp.len >= 7
>
> ip.len == 94 
>
> frame.len = 119 
>
> **http模式过滤**
>
> http.request.method == "GET"
>
> http.request.method == "POST"
>
> http.request.uri == "/img/logo-edu.gif"
>
> http contains "GET"
>
> http contains "HTTP/1."
>
> http contains ".methond" == "GET" && http
>
> http contains "flag"
>
> http contains "key"
>
> tcp contain "flag"
>
>  端点统计

#### 过滤筛选

> 过滤语法
>
> Host,protocol,contains, 特征值

#### 发现异常

> 特殊字符串
>
> 协议某字段
>
> flag位于服务器中

#### 数据提取

> 字符串提取
>
> 文件提取

#### 方向

> 流量包修复
>
> 协议分析
>
> 数据分析
>
> aircrack-ng wife 破解

 
