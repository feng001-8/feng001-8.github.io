---
title: Information Find
description: 信息收集
---

# 信息收集

## 域名信息查询

#### IP反差域名

通过IP可以反查出绑定在该网站的域名，来发现更多资产

<details>
  <summary>在线网站</summary>
  <p>
    ip138: https://site.ip138.com/
  </p>
  <p>
    webscan: https://www.webscan.cc/
  </p>
  <p>
    VirusTotal: https://www.virustotal.com
  </p>
  <p>
  微步在线：https://x.threatbook.cn/
  </p>
</details>
#### whois查询

##### 1.在线网站

<!--whois指的是域名注册时留下的信息，比如留下管理员的名字、电话号码、邮箱。 -->

##### 2.Kali工具

`whois www.xxx.com`

#### ICP备案信息查询

网站备案是根据国家法律法规规定，需要网站的所有者向国家有关部门申请的备案，这是国家信息产业部对网站的一种管理，为了防止在网上从事非法的网站经营活动的发生。主要针对国内网站，如果网站搭建在其他国家，则不需要进行备案。

<details>
  <summary>常用的网站有以下几个： </summary>
    <p>
    工业和信息化部政务服务平台：https://beian.miit.gov.cn/
  </p>
  <p>
    全国互联网安全管理平台：http://www.beian.gov.cn/portal/recordQuery
  </p>
  <p>
  天眼查：http://www.tianyancha.com
  </p>
</details>
## 子域名收集

#### 网站查询子域名

<details>
  <summary>常用网站：</summary>
  <p>
    VirusTotal https://www.virustotal.com/gui/home/search
  </p>
  <p>
    fofa https://fofa.info/
  </p>
</details>

#### 工具扫描

**1.Layer子域名挖掘机**

https://github.com/euphrat1ca/LayerDomainFinder

#### 搜索引擎挖掘

 **如：** **在Google中输入 site:[http://qq.com](https://link.zhihu.com/?target=http%3A//qq.com)**

## 端口信息

**端口作为服务器和客户端交互的接口，起着非常重要的作用。一些常见的端口标识出服务器开启了什么服务，比如3389端口开启，可以认为服务器系统为windows并且开启了远程服务的功能。所以，端口扫描在渗透测试中是非常重要的。**

#### 工具扫描

**nmap-用法**

****

- **语法结构：nmap [Scan Type(s)] [Options] {target specification}**

- **端口状态介绍**

  * open：确定端口开放，可达

  - closed ：关闭的端口对于nmap也是可访问的， 它接收nmap探测报文并作出响应。但没有应用程序在其上监听。
  - filtered ：由于包过滤阻止探测报文到达端口，Nmap无法确定该端口是否开放。过滤可能来自专业的防火墙设备，路由规则 或者主机上的软件防火墙。
  - unfiltered ：未被过滤状态意味着端口可访问，但是Nmap无法确定它是开放还是关闭。 只有用于映射防火墙规则集的 ACK 扫描才会把端口分类到这个状态。
  - open | filtered ：无法确定端口是开放还是被过滤， 开放的端口不响应就是一个例子。没有响应也可能意味着报文过滤器丢弃了探测报文或者它引发的任何反应。UDP，IP协议,FIN, Null 等扫描会引起。
  - closed|filtered：（关闭或者被过滤的）：无法确定端口是关闭的还是被过滤的

- **扫描目标格式**

  - 示例： scanme.nmap.org, microsoft.com/24, 192.168.0.1; 10.0.0-255.1-254
  - -iL:从文件中加载目标
  - -iR:随机扫描
  - --exclude <host or network>:排除网段或主机地址
  - --excledefile:排除文件中的地址

- **主机发现**

  - -sL:列出需要扫描的目标，不扫描
  - -sn:只做ping扫描，不做端口扫描
  - -Pn：跳过主机发现，视所有主机都在线
  - -PS/PA/PU/PY[portlist]：基于TCP（SYN、ACK）、UDP、SCTP的指定端口的主机发现
  - -PE/PP/PM：基于ICMP的echo、timestamp、network request的主机发现
  - -PO[Protocol list]：基于IP协议字段的ping扫描
  - -n/-R: -n表示不对目标最DNS解析，-R表示进行DNS解析，缺省为必要时候进行DNS解析
  - --dns-servers <serv1[,serv2],...>: 指定DNS 服务器
  - --system-dns:调用系统的DNS服务器
  - --traceroute：显示追踪到目标的路径

- **扫描技术**

  - -sS/sT/sA/sW/sM:TCP扫描
    - S是SYN扫描，半连接扫描，nmap只发送SYN报文，通过服务器是否响应SYN+ACK来判断对应端口是否开放
    - T是全连接扫描会和服务器建立完整的三次握手，效率低
    - A发送ACK报文，通过服务器响应来判断是否开放，有的服务器不开会回复ICMP端口不可达，当回复RST时表示可能被拦截或者端口开放，不是一个准确的判断条件
    - W 是窗口扫描，发出的报文和ACK一样，利用的是在某些系统中如果端口开放，收到ACK包后会响应一个窗口非0的RST包
    - M是Maimon扫描，使用发现者的名字命名。其原理是向目标服务器发送FIN/ACK 报文，在某些系统中如果端口开放则会丢弃该报文不做响应，如果端口关闭则回复RST或者ICMP，Nmap可借此判断服务器端口的开放情况。不准
  - -sU：UDP扫描，某些系统如果UDP端口不开放会回复ICMP差错报文（这也是Linux系统中traceroute的实现原理）。Nmap UDP端口扫描的强大之处在于它会针对知名端口构造初始交互报文，比如会针对UDP 500构造一个主模式协商的IKE报文
  - -sN/sF/sX:特定TCP标志位的扫描，N是空标志位；F是FIN置位；X是Xmas扫描将FIN、PSH、URG同时置位。收到RST说明端口关闭，无响应说明被过滤或者端口开放，不准。
  - --scanflags <flags>：实现上同上面几种类似，可以让用户自定义TCP标志位。
  - -sI <zombie host[:probeport]>: Idle扫描需要一台没有流量的僵尸主机，这种扫描的实现原理是在一定的时间里，同一台主机发出的IP数据报文其ip头中的identification字段是累加的。探测分为3步：1、Nmap主机向僵尸机发包，通过僵尸机的响应包探测其ID；2、Nmap主机伪造僵尸机源地址向服务器的特定端口发送SYN包；3、Nmap主机再次探测僵尸机的ip.id。如果目标服务器端口开放，则必然会向僵尸机发送SYN/ACK，由于莫名其妙收到一个SYN/ACK 报文，僵尸机会向目标服务器发送RST报文，该报文的ip.id 是第一步+1，则第三步Nmap主机探测到的ip.id应该是第一步+2，说明目标主机端口开放。反之，如果目标主机端口未开放，则收到第二步的报文后会向僵尸机回复RST或者直接丢弃该报文不响应，无论哪种情况，都不会触发僵尸机发包，进而僵尸机的ip.id不会变化，第三步Nmap探测到的id应该是第一步+1.
  - -sY/sZ:SCTP协议INIT或cookie-echo扫描
  - -sO:基于IP协议的扫描，通过变换IP报文头中的Protocol值来对服务器进行探测
  - -b <FTP relay host>:：FTP反弹扫描，借助FTP特性，通过FTP服务器连接想要扫描的主机实现隐身的目的

- **端口相关参数**

  - -p:指定端口扫描范围，如：-p22; -p1-65535; -p U:53,111,137,T:21-25,80,139,8080,S:9
  - --exclude-ports <port ranges>: 排除端口
  - -F：扫描比缺省少的端口（缺省1000，加了-F100）
  - -r：顺序扫描端口，缺省是随机分组扫描
  - --top-ports <number>:按top排序扫描知名端口
  - --port-ratio <ratio>: 按比例扫描知名端口，值在0-1之间，越小扫的越多

- **系统/版本探测**

  - -sV:探测开放的端口的系统/服务信息
  - --version-intensity <level>:设置版本检测的详程度级别，0-9，越高越详细
  - --version-light：输出最可能的版本信息，缺省是2
  - --version-all：使用所有的探测条件进行版本/系统探测
  - --version-trace:打印详细的版本扫描过程

- **脚本扫描**

  - --script=<Lua scripts>:指定脚本名称
  - --script-args=<n1=v1,[n2=v2,...]>:为脚本指定参数
  - --script-help=<Lua scripts>: 查看脚本帮助信息
  - --script-updatedb:更新脚本数据库

- **系统探测**

  - -O:激活系统探测
  - --osscan-limit:只对开放端口的有效主机进行系统探测
  - --osscan-guess：推测系统信息

- **其他**

  - -T<0-5>:时间模板，越大速度越快
  - -6：使能IPV6探测
  - -A：使能系统探测、版本检测、脚本扫描、路由追踪
  - -V：打印版本号
  - -v：增加输出的详细程度
  
  
  
  ### 常用参数

|    参数     |            解释            |
| :---------: | :------------------------: |
|     -sP     |          Ping扫描          |
|     -sS     |    快速扫描，SYN半开放     |
|     -sT     |   TCP全链接扫描（默认）    |
|     -sU     |    UDP端口扫描，不准确     |
|     -sA     | 穿过防火墙的规则集，速度慢 |
|     -PN     | 防火墙禁ping，不使用ping扫描 |
|     -PR     | ARP Ping 扫描，速度很快 |
|     -PS     | TCP SYN Ping扫描 |
|     -PA     | TCP ACK Ping扫描 |
|     -sV     | 端口服务及版本 |
|     -sC     | –script=default 默认的脚本扫描，主要是搜集各种应用服务的信息 |
|     -O      | 探测目标系统版本 |
|     -A      | 包含了-sV，-O，全面系统检测，启动脚本检测，扫描漏洞等（有误报) |
|     -p      | 指定端口号 如:80,81,8000 |
|   --open    | 只显示开放端口 |
|   -v/--vv   | 显示详细信息，-vv 比 -v 更详细 |
|     -iL     | 从文件导入到要扫描的ip列表 |
| -oN/-oX/-oG | 将报告写入文件，格式分别为（txt，XML，grepable） |
|  -exclude   | 排除某些不需要扫描的ip |
|     -P0     | 空闲扫描，无Ping扫描 |

#### 基本使用

```php
nmap 127.0.0.1 # Nmap 默认发送一个arp的ping数据包，来探测目标主机在1-10000范围内所开放的端口
```

#### 主机发现

**主机发现的原理与Ping命令类似，发送探测包到目标主机，如果收到回复，那么说明目标主机是开启的**

```php
nmap -sP 127.0.0.0/24  #进行ping扫描，打印对扫描做出响应的主机，不做进一步测试端口扫描或者操作系统探测
```

#### 操作系统识别

```php
nmap -O 192.168.23.1 # 操作系统版本探测
nmap -O --osscan-limit 192.168.23.1 # 探测操作系统版本详细信息
nmap -O --osscan-guess 192.168.23.1 # 猜测操作系统版本
nmap -A 192.168.23.1 # 操作系统探测和服务版本探测等
```

#### 端口扫描

```php
nmap -sT 192.168.23.1 -p 21,22,23,53,80,135,443,445 # (默认) TCP全连接扫描,常见端口
nmap -sS 192.168.23.1 -p 1-3000 --open -vv # (常用) 快速扫描 1-3000 范围端口,只显示
开放端口信息
nmap -PN 192.168.23.1 -p 1-3000 # 不使用ping命令扫描
nmap -PR 192.168.23.1 -p 1-3000 # arp扫描，内网中局域网防火墙不拦截，速度很快
nmap -P0 192.168.23.1 -p 1-3000 # 空闲扫描，不会留下记录
nmap -sV 192.168.81.148 -p 3389,5985,6588,999,21,80 -A # 探测端口信息
```

#### 格式化输出

```php
 # 使用 nmap 结果美化 model, 美化 nmap 输出的 xml 文档，使用-oX xxx.xml 或者 -oA xxx 可将结果导出为 xml 格式
# 端口信息探测 + 系统探测 + 基础扫描
nmap -sV -A 192.168.23.1 -p 80,88,135,139,443,445,903,1080,1688,3306,5357 -oA
mysite
# 格式化 xml 文档
xsltproc -o mysite.html mode.xsl mysite.xml
# 使用浏览器打开 html 文档
firefox mysite.html
```

#### 常见端口

```php
80,89,8000,9090,1433,1521,3306,5432,445,135,443,873,5984,6379,7001,7002,9200,9300,11211,27017,27018,50000,50070,50030,21,22,23,2601,3389
```



---

#### masscan

**masscan 是 Kali 下集成的高效扫描器 , 速度非常快**

#### 御剑端口扫描

## C端和旁站

#### C段

**C段：同网段不同服务器的渗透方案**
C 段嗅探指的是拿下同一C段下的服务器，也就是说是D段1-255中的一台服务器，再通过内网横向移动
获取你想要的服务器权限。
例如192.168.1.66 -> 192.168.1.4 能够相互通讯
可以控制该网段中的192.168.1.66，再通过内网横向移动来控制 192.168.1.4
注意：一般情况下云服务器C段的IP都是相互独立的，这些服务器分属不同用户，没有渗透的必要。

#### 旁站

**旁注：同服务器不同站点的渗透方案**
旁站指的是网站所在服务器上部署的其他网站，同IP网站，一个IP上布置了多个网站
从同台服务器上的其他网站入手，获取到服务器权限，自然就获取到了目标网站的权限



#### 工具扫描c端

**nmap**

```php
nmap -A -vv 192.168.23.1/24 # 很慢，慎用可以加-T参数
nmap -PR -vv 192.168.23.1/24 -p 1-1000,8000-9000 --open # arp 扫描, 速度快
nmap -PN -vv 192.168.23.1/24 -p 1-1000 --open # 不使用ping扫描，能发现禁ping主机
```

**masscan**

```php
masscan 192.168.23.1/24 --ping # icmp探测C段在线主机
masscan 192.168.23.1/24 -p
21,22,80,137,138,139,443,445,1433,1434,1521,3306,6379,7001,8000,8080,9001 --open-only
```

**御剑**



## 目录信息收集

* 寻找到网站后台管理
* 寻找未授权界面
* 寻找网站更多隐藏信息
* 发现这个网站存在多少个目录，多少个页面，探索出网站的整体结构
* 发现敏感文件，后台文件，数据库文件，和信息泄漏文件等等

#### robots.txt

**Robots协议(Robots Exclusion Protocol)“网络爬虫排除标准”，网站通过Robots协议告诉搜索引擎哪些页面可以抓取，哪些页面不能抓取，同时也记录网站所具有基本的目录**

#### 目录扫描工具

**disearch-参数**

```bash
## 基本使用
-h # 使用帮助
-u # 指定目标url，最好加上协议类型 如http https
-L # 指定url列表文件
-e # 参数指定网站类型 php, jsp, asp, aspx, do, action, cgi, pl, html, htm, js,json, tar.gz, bak (-e *代表所有)
## 自定义选项
-w # 指定字典扫描
-t # 指定线程数（默认20）
-r # 递归扫描 扫描到目录文件会进一步向下挖掘
-random-agents #使用随机UA
-H # 使用指定headers (e.g. --header "Referer: example.com" --header "User-Agent:IE")
-m # 指定http请求方式，默认get
-d # 发送的 data 数据
--cookie # 添加 cookie
--proxy # 添加代理 e.g. --proxy 127.0.0.1:1080
## 过滤扫描结果
-i  # http 状态码白名单 (e.g. 200,300-399)
-x / --exclude-status # 排除指定 http 状态码 （e.g.: 301,403,500-599)
--exclude-texts # 文本排除响应 (e.g.: "Not found", "Error")
--exclude-regexps # 按regexp排除响应，用逗号分隔(e.g.: "Not foun[a-z]{1}","^Error$")
## 报告输出
-o #指定报告文件输出地址
--format #报告文件格式 (默认: simple, plain, json, xml,md, csv, html, sqlite)
--log #输出扫描日志文件 (一般不用)
```

## 网站指纹识别

**在web渗透过程中，Web指纹识别是信息收集环节中一个比较重要的步骤，通过一些开源的工具、平台或者手工检测CMS系统是公开的CMS程序还是二次开发至关重要，能准确的获取CMS类型、Web服务组件类型及版本信息可以帮助安全工程师快速有效的去验证已知漏洞。对目标渗透测试过程中，目标的cms是十分重要的信息，有了目标的cms，就可以利用相关bug进行测试进行代码审计等。**

#### 识别方式

**1、特定文件的MD5**

一些网站的特定图片文件、js文件、CSS等静态文件，如favicon.ico、css、logo.ico、js等文件一般不会修改，通过爬虫对这些文件进行抓取并比对md5值，如果和规则库中的Md5一致则说明是同一CMS。这种方式速度比较快，误报率相对低一些，但也不排除有些二次开发的CMS会修改这些文件。

**2、网站特有文件**

如/templets/default/style/dedecms.css  — dedecms

**3、正常页面或错误网页中包含的关键字**

· 先访问首页或特定页面如robots.txt等，通过正则的方式去匹配某些关键字，如Powered by Discuz、dedecms等。
· 或者可以构造错误页面，根据报错信息来判断使用的CMS或者中间件信息，比较常见的如tomcat的报错页面。

**4、请求头信息的关键字匹配**

· 查看http响应报头的X-Powered-By字段来识别；
· 根据Cookies来进行判断，比如一些waf会在返回头中包含一些信息，如360wzws、Safedog、yunsuo等；
· 根据header中的Server信息来判断，如DVRDVS-Webs、yunjiasu-nginx、Mod_Security、nginx-wallarm等；
· 根据WWW-Authenticate进行判断，一些路由交换设备可能存在这个字段，如NETCORE、huawei、h3c等设备。

**5、部分URL中包含的关键字，比如wp-includes、dede等URL关键特征**

#### 指纹识别的对象

1、CMS信息：比如大汉CMS、织梦、帝国CMS，phpcms，ecshop等
2、前段技术：HTML5、jquery、bootstrap、pure、ace等
3、Web服务器：比如Apache、lighttpd, Nginx, IIS等；
4、应用服务器：比如Tomcat、Jboss、weblogic、websphere等；
5、开发语言：比如PHP、Java、Ruby、Python、C#等；
6、操作系统信息：比如linux、win2008、win7、kali、centos等；
7、CDN信息：是否使用CDN，如cloudflare、360cdn、365cyd、yunjiasu等；
8、WAF信息：是否使用waf，如Topsec、safedog、Yundun等；
9、IP及域名信息：IP和域名注册信息、服务商信息等；
10、端口信息：有些软件或平台还会探测服务器开放的常见端口。

####  识别工具

**Kali工具：whatweb**
**whatweb 域名 # 单个域名识别**

<details>
  <summary>在线指纹识别：</summary>
  <p>
http://whatweb.bugscaner.com/
  </p>
  <p>
    http://pentest.gdpcisa.org/whatcms
  </p>
</details>

## CDN识别

<details>
  <summary>在线网站</summary>
  <p>
    https://ping.chinaz.com/
  </p>
  <p>
     https://tools.ipip.net/ping.php
  </p>
  <p>
    在线识别：https://www.cdnplanet.com/tools/cdnfinder
  </p>
</details>

## 搜索引擎

* fofa

* 360quake

* 奇安信鹰图

* google（高级语法）

  > site：可以限制你搜索范围的域名；
  > inurl：用于搜索网页上包含的URL，这个语法对寻找网页上的搜索，帮助之类的很有用；
  > intext: 只搜索网页<body>部分中包含的文字(也就是忽略了标题、URL等的文字)；
  > intitle: 查包含关键词的页面，一般用于社工别人的webshell密码；
  > filetype：搜索文件的后缀或者扩展名；
  > intitle：限制你搜索的网页标题；
  > inanchor: 搜素网站锚节点内容
  > cache # 缓存搜索 cache 关键字 cache:secquan.org 当一个链接无法访问时（或信息被屏蔽
  > 时）；当信息已经被修改，想看以前的信息时

  **常用技巧**

  > 查找后台地址：
  > site:域名
  > inurl:login|admin|manage|member|admin_login|login_admin|system|login|user|main|c
  > ms
  > 查找文本内容：
  > site:域名 intext:管理|后台|登陆|用户名|密码|验证码|系
  > 统|admin|login|sys|managetem|password|username
  > 查找可注入点：
  > site:域名 inurl:aspx|jsp|php|asp
  > 查找上传漏洞：
  > site:域名 inurl:file|load|editor|Files
  > 找eweb编辑器：
  > site:域名 inurl:ewebeditor|editor|uploadfile|eweb|edit
  > 存在的数据库：
  > site:域名 filetype:mdb|asp|#
  > 查看脚本类型：
  > site:域名 filetype:asp/aspx/php/jsp
  > 迂回策略入侵：
  > inurl:cms/data/templates/images/index/
  > inbody: 查找正文内容 inbody:密码|登陆
  > intitle: 查找标签内容
  > inanchor: 查找锚节点
  > filetype: 查找文件类型
  > site:返回属于指定网站的网页。若要搜索两个或更多域，请使用逻辑运算符OR对域进行分组
  > ip: 查找特点ip的网站

  
