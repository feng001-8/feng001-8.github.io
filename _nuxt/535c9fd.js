(window.webpackJsonp=window.webpackJsonp||[]).push([[10,53,54],{431:function(t,_,v){t.exports=v.p+"img/1.8b02aa2.png"},432:function(t,_,v){t.exports=v.p+"img/2.99ea1f2.png"},460:function(t,_,v){const e={render:function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"tcp_ip协议复习"}},[t._v("TCP_IP协议复习")]),t._v(" "),e("ol",[e("li",[t._v("服务器一般是通过熟知的端口号来识别对应的应用程序，这类端口是由"),e("font",{attrs:{color:"red"}},[t._v("IANA")]),t._v("管理，其中1～1024是被"),e("strong",[t._v("RFC 3232")]),t._v("规定好了的，被称作“众所周知的端口”(Well Known Ports)； 从1025～65535的端口被称为"),e("strong",[t._v("动态端口")]),t._v("（Dynamic Ports），可用来建立与其它主机的会话，也可由用户自定义用途。")],1)]),t._v(" "),t._m(0),t._v(" "),e("p",[t._v("详细的看另一篇文章 Port")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[e("font",{attrs:{color:"red"}},[t._v("RFC(Request for comment)文档时关于Internet技术资料的汇编，这些文档详细讨论计算机网络技术的各种消息，重点是的网络协议、进程、程序，也记录会议的意见和看法")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[e("font",{attrs:{color:"red"}},[t._v("Socker（套接字）是应用程序与TCP/IP协议栈的接口，他定义了一组函数支持TCP/IP网络应用程序开发。同样还有Libpcap编程")]),t._v("。")],1)]),t._v(" "),t._m(1),t._v(" "),e("li",[e("p",[e("font",{attrs:{color:"red"}},[t._v("PPP是支持点到点连接的一种通信协议，既支持数据为8位和无奇偶校验的异步模式，也支持面向比特位的同步连接，提供对从局域网到广域网的数据链路封装支持")])],1)])]),t._v(" "),t._m(2),t._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[e("p",[e("font",{attrs:{color:"red"}},[t._v("PPPOE（Point to Point Protocol over Ethernet，以太网上的点到点协议）则是一种设计用于串行通信并为以太网进行了改造的PPP。通过在标准PPP报文的前面加上以太网的报头，PPPOE提供通过简单桥接接人设备连接远端接人设备，并可以利用以太网的共享性连接多个用户主机的机制")])],1)]),t._v(" "),e("li",[e("p",[t._v("链路层数据帧的最大长度就是"),e("font",{attrs:{color:"red"}},[t._v("MTU")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[e("font",{attrs:{color:"red"}},[t._v("环回接口")]),t._v("就是一种特殊的逻辑网络接口")],1)]),t._v(" "),e("li",[e("p",[t._v("IEEE 802.3 规定MAC地址是"),e("font",{attrs:{color:"red"}},[t._v("48位")]),t._v("大小")],1)]),t._v(" "),e("li",[e("p",[e("font",{attrs:{color:"red"}},[t._v("代理 ARP（proxy ARP）也称为ARP代理，是指如果 ARP请求是从一个网络的主机发往另一个网络上的主机，那么连接这两个网络的路由器就可以回答该请求，这个过程称代理 ARP或委托 ARP")])],1)]),t._v(" "),t._m(3),t._v(" "),e("li",[e("p",[t._v("ping是调试网络的基本工具，利用的就是最常用的ICMP 回显请求与应答机制，最基本的用途就是"),e("font",{attrs:{color:"red"}},[t._v("测试网络的连通性")]),t._v("。")],1)]),t._v(" "),e("li",[e("p",[t._v("UDP是"),e("font",{attrs:{color:"red"}},[t._v("一个简单的、面向数据报的传输层协议，它是无连接协议")]),t._v("，简单地把从 TCP/IP应用层得到的消息打包到数据报中")],1)]),t._v(" "),e("li",[e("p",[t._v("域名解析的方式有两种，一种称为"),e("font",{attrs:{color:"red"}},[t._v("递归解析")]),t._v("（recursive resolution）或递归查询，另一种称为"),e("font",{attrs:{color:"red"}},[t._v("迭代解析")]),t._v("（iterative resolution）或迭代查询")],1)])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("center",[e("div",{attrs:{alt:"fig"}},[t._v("TCP/IP的分层")]),t._v(" "),e("div",{attrs:{alt:"three-table"}},[e("table",[e("tr",[e("th",{attrs:{alt:"center"}},[t._v("层次")]),t._v(" "),e("th",{attrs:{alt:"center"}},[t._v("主要协议")]),t._v(" "),e("th",{attrs:{alt:"center"}},[t._v("主要功能")])]),t._v(" "),e("tr",[e("td",{attrs:{alt:"center"}},[t._v("应用层")]),t._v(" "),e("td",{attrs:{alt:"center"}},[t._v("HTTP、Telnet、FTP、SMTP等")]),t._v(" "),e("td",{attrs:{alt:"center"}},[t._v("按照不同应用的特定要求和方式把数据传输到传输层或者接收从传输层返回的数据")])]),t._v(" "),e("tr",[e("td",{attrs:{alt:"center"}},[t._v("传输层")]),t._v(" "),e("td",{attrs:{alt:"center"}},[t._v("TCP、UDP")]),t._v(" "),e("td",{attrs:{alt:"center"}},[t._v("TCP为两台主机提供高可靠性的数据通信，其工作包括把应用程序交来的数据分成合适的小块后交给下面的网络层，确认接收到的分组，设置发送最后确认分组的超时时钟等。UDP则为应用层提供一种非常简单的服务，它只是把数据报的分组从一台主机发送到另一台主机，但并不保证该数据报能到达另一端")])]),t._v(" "),e("tr",[e("td",{attrs:{alt:"center"}},[t._v("网络层")]),t._v(" "),e("td",{attrs:{alt:"center"}},[t._v("IP、ICMP、IGMP")]),t._v(" "),e("td",{attrs:{alt:"center"}},[t._v("有时也称作互联网层，主要数据包选择路由。其中，IP是TCP/IP协议族中最核心的协议。所有的 TCP、UDP、ICMP、IGMP 数据都以IP 数据报的格式传输")])]),t._v(" "),e("tr",[e("td",{attrs:{alt:"center"}},[t._v("网络接口层")]),t._v(" "),e("td",{attrs:{alt:"center"}},[t._v("ARP、RARP及设备驱动程序及接口")]),t._v(" "),e("td",{attrs:{alt:"center"}},[t._v("发送时将IP包作为帧发送，接收时把接收到的比特组装成帧链路管理错误检测等")])])])])]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("其中A、B、C 3类（如下表格）由InternetNIC在全球范围内统一分配，D、E类为特殊地址。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("img",{staticStyle:{zoom:"25%"},attrs:{src:v(431),alt:"1"}}),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("CRC字段用于帧内字节差错的循环冗余码检验，它也被称力 FCS（Frame CheckSequence，帧检验序列）。")]),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("在传输媒体上实际传输的比特流中，还要在如图所示的帧序列前多加8字节的前导（7字节的前同步码和1字节的起始帧定界符），用于帧收发的同步控制。这里没有标注出来是因为只有链路层硬件接口（如网卡）正确地从网络链路上接收到能够识别处理的比特流数据且没有差错并组装成帧后，才会由链路层协议栈来处理。或者说，不能够识别的或错误的比特流都被丢弃。因而，在各种协议分析器捕获的数据中都不会看到帧前导字节，甚至校验字节。Cisco Packet Tracer 模拟方式显示的帧有时会给出前导字节。")]),t._v(" "),e("img",{staticStyle:{zoom:"25%"},attrs:{src:v(432),alt:"2"}}),t._v(" "),e("h4",{attrs:{id:"rir协议"}},[t._v("RIR协议")]),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("RIP 运行过程如下。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("p",[t._v("（3）**接收到应答的路由器，可能会更新路由表（含增、删、改路由表项）。定期选路更新是指每过30s，所有或部分路由器将其完整路由表发送给相邻路由器。**而当有一条路由的度量发生变化时，则不需要发送完整路由表，而只需要发送那些发生变化的表项，这叫触发更新。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),e("p",[t._v("网络中的路由器各自建立描述网络结构的OSPF链路状态数据库，然后每个路由器根据数据库，按照链路权值的大小，以自身为根建立起最短路径树。查找最短路径树，获得最短路径，建立起路由表。然后，域边界路由器向骨干域广播路由表，从而广播到整个自治域")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),e("h4",{attrs:{id:"dhcp"}},[t._v("DHCP")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),e("h4",{attrs:{id:"bgp协议"}},[t._v("BGP协议")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),e("p",[t._v("①OSPF进程手工配置的router id具有最高优先级")]),t._v(" "),e("p",[t._v("②在全局模式下配置的公用router id的优先级仅次于直接给OSPF进程手工配置router id，即它具有第二优先级")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),e("h4",{attrs:{id:"dr和bdr选举"}},[t._v("DR和BDR选举")]),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41)],1)},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",[t._v("协议/服务名称")]),t._v(" "),v("th",[t._v("端口号")]),t._v(" "),v("th",[t._v("简介")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ftp")]),t._v(" "),v("td",[v("strong",[t._v("20、21")])]),t._v(" "),v("td",[t._v("File Transfer Protocol 文件传输协议，20用于连接，21用于传输")])]),t._v(" "),v("tr",[v("td",[t._v("ssh")]),t._v(" "),v("td",[t._v("22")]),t._v(" "),v("td",[t._v("[Secure Shell](https://baike.baidu.com/item/Secure Shell) 安全外壳协议，专为"),v("a",{attrs:{href:"https://baike.baidu.com/item/%E8%BF%9C%E7%A8%8B%E7%99%BB%E5%BD%95/1071998"}},[t._v("远程登录")]),t._v("会话和其他网络服务提供安全性的协议")])]),t._v(" "),v("tr",[v("td",[t._v("http")]),t._v(" "),v("td",[t._v("80")]),t._v(" "),v("td",[t._v("Hyper Text Transfer Protocol 超文本传输协议，用于网页浏览")])]),t._v(" "),v("tr",[v("td",[t._v("DNS")]),t._v(" "),v("td",[v("strong",[t._v("53")])]),t._v(" "),v("td",[t._v("Domain Name System 域名系统，域名解析")])]),t._v(" "),v("tr",[v("td",[t._v("Https")]),t._v(" "),v("td",[t._v("443")]),t._v(" "),v("td",[t._v("Hypertext Transfer Protocol Secure 超文本传输安全协议，用于安全浏览网页")])]),t._v(" "),v("tr",[v("td",[t._v("pop")]),t._v(" "),v("td",[v("strong",[t._v("110")])]),t._v(" "),v("td",[t._v("Post Office Protocol")])]),t._v(" "),v("tr",[v("td",[t._v("telnet")]),t._v(" "),v("td",[v("strong",[t._v("23")])]),t._v(" "),v("td",[t._v("不安全的文本传送")])]),t._v(" "),v("tr",[v("td",[t._v("smtp")]),t._v(" "),v("td",[v("strong",[t._v("25")])]),t._v(" "),v("td",[t._v("Simple Mail Transfer Protocol 简单邮件传输协议")])]),t._v(" "),v("tr",[v("td",[t._v("www")]),t._v(" "),v("td",[t._v("8080")]),t._v(" "),v("td",[t._v("Apache Tomcat web server，进行网页浏览")])])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("li",[v("p",[t._v("网络在链路层所使用的硬件不同，则会采用不同的链路层协议，如以太网、令牌环网、FDDI（Fiber Distributed Data Interface，光纤分布式数据接口）及 RS-232串行线路等。目前 TCP/IP 协议能够支持多种不同的链路层协议。在网络技术中，局域网占有非常重要的地位、按照网络拓扑结构，局域网可以分为"),v("strong",[t._v("星形、环形、总线型和树型网络")]),t._v("，代表性的网络主要是"),v("strong",[t._v("以太网、令牌环网和令牌总线网")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("支持同一链路上同时使用多种协议的封装方法")]),t._v(" "),v("li",[t._v("采用一个特殊的 LCP（Link Control Protocol，链路控制协议）来建立、配置、测试乃至终止链路，协商任何点到点链路的特性。")]),t._v(" "),v("li",[t._v("针对封装的不同网络协议，采用 NCP（Network Control Protocol，网络控制协议）来完成点对点通信设备之间网络层通信所需参数的配置，通过协议域来区分数据域中净载荷的数据类型")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("li",[v("p",[t._v("免费ARP 是指主机发送ARP 请求查找自己的IP地址。")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("递归解析方式在解析请求频繁时性能不够好，而迭代解析方式在解析请求不多时性能不好")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ol",{attrs:{start:"18"}},[v("li",[t._v("SNMP协议：简单网络管理协议")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[v("strong",[t._v("网络不可达")])])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[v("strong",[t._v("主机不可达")])])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("协议不可达")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[v("strong",[t._v("端口不可达")])])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("需要进行分片但设置不分片比特")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("源站选路失败")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("6")]),t._v(" "),v("td",[t._v("目的网络不认识")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("7")]),t._v(" "),v("td",[t._v("目的主机不认识")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("8")]),t._v(" "),v("td",[t._v("源主机被隔离（作废不用）")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("9")]),t._v(" "),v("td",[t._v("目的网络被强制禁止")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",[t._v("目的主机被强制禁止")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("11")]),t._v(" "),v("td",[t._v("由于TOS，网络不可达")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("12")]),t._v(" "),v("td",[t._v("由于TOS，主机不可达")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("13")]),t._v(" "),v("td",[t._v("由于过滤，通信被强制禁止")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("14")]),t._v(" "),v("td",[t._v("主机越权")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("15")]),t._v(" "),v("td",[t._v("优先权中止生效")])])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ol",{attrs:{start:"16"}},[v("li",[v("p",[t._v("traceroute 程序（Windows 下程序名称为tracert.exe）可以使用户获得IP 数据报从一台主机传输到另一台主机所经过的路由。")])]),t._v(" "),v("li",[v("p",[t._v("超文本传输协议（Hypertext Transfer Protocol,HTTP）主要用于从WwW服务器传输超文本到本地浏览")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("TCP/IP各层功能：")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("5类IP地址的格式：")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",[t._v("类别")]),t._v(" "),v("th",[t._v("最大网络数")]),t._v(" "),v("th",[t._v("IP地址范围")]),t._v(" "),v("th",[t._v("单个网段最大主机数")]),t._v(" "),v("th",[t._v("私有IP地址范围")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("A")]),t._v(" "),v("td",[t._v("126(2^7-2)")]),t._v(" "),v("td",[t._v("1.0.0.1-127.255.255.254")]),t._v(" "),v("td",[t._v("16777214")]),t._v(" "),v("td",[t._v("10.0.0.0-10.255.255.255")])]),t._v(" "),v("tr",[v("td",[t._v("B")]),t._v(" "),v("td",[t._v("16384(2^14)")]),t._v(" "),v("td",[t._v("128.0.0.1-191.255.255.254")]),t._v(" "),v("td",[t._v("65534")]),t._v(" "),v("td",[t._v("172.16.0.0-172.31.255.255")])]),t._v(" "),v("tr",[v("td",[t._v("C")]),t._v(" "),v("td",[t._v("2097152(2^21)")]),t._v(" "),v("td",[t._v("192.0.0.1-223.255.255.254")]),t._v(" "),v("td",[t._v("254")]),t._v(" "),v("td",[t._v("192.168.0.0-192.168.255.255")])])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("TCP/IP协议数据封装过程：")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("传输层（tcp）到网络层（ip）的数据单元叫做TCP报文段")]),t._v(" "),v("li",[t._v("网络层（ip）    到网络接口层的数据单元叫做IP数据报")]),t._v(" "),v("li",[t._v("网络接口层封装成以太网帧格式（长度46-1500字节）传递")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("以太网（IEEE802.2）帧格式:")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("大多数应用程序的以太网数据包都采用Ethernet I 格式的帧来封装（如HTTP、Telnet、FTP、SMTP、POP3 等应用），执行 STP（Spanning Tree Protocol，生成树协议）的交换机之间的BPDU（Bridge Protocol Data Unit，网桥协议数据单元）采用 IEEE802.3 SAP 帧（即 IEEE 802.3 MAC 和 IEEE 802.2 LLC），"),v("strong",[t._v("VLAN Trunk 协议 IEEE 802.1Q 和CDP（Cisco Discovery Protocol,Cisco发现协议）采用 IEEE 802.3 SNAP帧")]),t._v("。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("IEEE 802 标准定义的帧和 Ethernet I 的帧都有最小和最大长度要求。IEEE 802 标准规定帧的数据部分最少要有38字节，以太网则规定最少46字节。如果不足最小长度，则协议要求用插入填充（pad）字节的方式来补足。最大长度要求就是通常所说的 MTU（Maximum Transmission Unit，最大传输单元），"),v("strong",[t._v("IEEE 802 和 Ethernet I 的最大长度要求分别是 1492字节和1500字节")]),t._v("。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[v("p",[t._v("RIP是使用最广泛的动态选路协议，协议采用距离向量算法。")])]),t._v(" "),v("li",[v("p",[t._v("RIP 以跳数（bop count）作为路由器之间距离的度量，所有直接连接接口的跳数为1。每增加一个路由器，可达到的网络跳数加1。")])]),t._v(" "),v("li",[v("p",[t._v("RIP v2相比 RIPvI 增加了对变长子网的支持。")])]),t._v(" "),v("li",[v("p",[t._v("RIP 扱文包含在 UDP数据中，RIP 常用的UDP 端口号是 520")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("（1）初始化：在启动一个路由守护程序时，它先判断启动了哪些接口，"),v("strong",[t._v("并在每个接口上发送一个 RIP 请求报文，要求其他路由器发送完整路由表")]),t._v("。若网络支持广播的话，这种请求是以广播形式发送的。请求报文的命令字段1，地址系列字段设置为0，度量字段设置为16。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("（2）"),v("strong",[t._v("在网络上运行 RIP 的路由器，如果接收到这个特殊请求，就将完整的路由表发送给请求者")]),t._v("。如果是其他请求，则对有连接到指明地址的路由将度量设置成自己的值，否则将度量置16，表示没有到达目的的路由，然后发回应答。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("（4）"),v("strong",[t._v("RIP 为路由表中的每条路由都建立一个定时器，如果发现一条路由在180、内未更新，就将该路由的度量设置成无穷大（16），并标注为删除。再过60s，将从本地路由表中删除该路由。")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("h4",{attrs:{id:"ospf协议"}},[v("strong",[t._v("OSPF协议")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[v("p",[t._v("OSPF是一个链路状态协议，因而克服了RIP的所有限制。OSPF 在实现上直接使用IP协议，而不再使用传输层协议，如IIDP。")])]),t._v(" "),v("li",[v("p",[t._v("当一个区域的网络拓扑结构发生变化时，LSDB就会被更新，每10s评估一次LSDB，如果区域的拓扑结构没有改变，LSDB也就不做任何改动。")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("ospf原理")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("OSPF报文类型")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",[v("thead",[v("tr",[v("th",[t._v("类型值")]),t._v(" "),v("th",[t._v("类型名称")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("Hello")]),t._v(" "),v("td",[v("strong",[t._v("Hello报文是最常用的一种报文，其作用为建立和维护邻接关系")]),t._v("，周期性的在使能了OSPF的接口上发送。报文内容包括一些定时器的数值、DR、BDR以及自己已知的邻居。")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("DD")]),t._v(" "),v("td",[t._v("OSPF DD（Database Description）报文描述了本地LSDB的摘要信息，用于两台路由器进行数据库同步。")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("LSR")]),t._v(" "),v("td",[v("strong",[t._v("两台路由器互相交换过DD报文之后，知道对端的路由器有哪些LSA是本地的LSDB所缺少的和哪些LSA是已经失效的，这时需要发送LSR（Link  State Request）报文向对方请求所需的LSA")]),t._v("。OSPF LSR报文的内容包括所需要的LSA的摘要。LSR报文格式如下图所示，其中LS  type、Link State ID和Advertising Router可以唯一标识出一个LSA，当两个LSA一样时，需要根据LSA中的LS  sequence number、LS checksum和LS age来判断出所需要LSA的新旧。")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("LSU")]),t._v(" "),v("td",[v("strong",[t._v("OSPF LSU（Link State Update）报文用来向对端路由器发送其所需要的LSA")]),t._v("或者泛洪自己更新的LSA，内容是多条LSA（全部内容）的集合。")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("LSAck")]),t._v(" "),v("td",[v("strong",[t._v("OSPF LSAck（Link State Acknowledgment）用来对接收到的LSU报文进行确认")]),t._v("。内容是需要确认的LSA的Header（一个LSAck报文可对多个LSA进行确认）。")])])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("OSPF Router-ID 选举规则")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("如果通过Router-ID命令配置了Router-ID，则按照配置结果设置，选取优先级为第一")]),t._v(" "),v("li",[t._v("在没有配置Router-ID的情况下，如果存在配置了IP地址的Loopback 接口，则选择Loopback接口地址中最大的地址作为Router-ID，选取优先级为第二")]),t._v(" "),v("li",[t._v("如果没有已配置IP地址的Loopback接口，则从其他接口的IP地址中选择最大的地址作为 Router-ID(不考虑接口的Up/Down状态)，选取优先级为第三")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("广播式的DR和BDR")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[v("p",[t._v("DHCP（动态主机配置协议）是在 TCP/IP 网络上使计算机获得它所需要的所有配置信息的协议，不仅允许计算机快速、动态地获取IP地址和子网掩码，还可以获取其他网络配置信息，如DNS服务器")])]),t._v(" "),v("li",[v("p",[t._v("DHCP 采用UDP 作为传输协议，DHCP服务器使用67号端口，客户机使用68号端")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("DHCP 的基本工作辻程描述如下。")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[v("p",[t._v("首先，客户机在物理网络中发出 DHCPDISCOVER广播报文，以查找可用的DHCP服务器，报文中包含了客户机想要获得的各种参数。")])]),t._v(" "),v("li",[v("p",[t._v("网络中所有接收到 DHCPDISCOVER广播报文的DHCP 服务器都会响应一个DHCHOFFER报文，这个报文中包含客户机的MAC地址、服务器提供的IP 地址、子网掩码、租赁期、提供DHCP的服务器IP 地址等。同时，DHCP服务器会保存已分配IP地址的记录。")])]),t._v(" "),v("li",[v("p",[t._v("客户机能收到每个 DHCPOFFER 报文，但一次只能处理一个，一般处理最先收到的 DHCPOFFER 报文。接着，客户机会再发出 DHCPREQUEST广播报文，这个请求报文中有事务 ID 和客户选择接收的 DHCP 服务器地址。")])]),t._v(" "),v("li",[v("p",[t._v("DHCP 服务器收到 DHCPREQUEST报文，判断报文中服务器地址是否与自己的地址相同，如果相同，DHCP服务器响应 DHCPACK 报文，并在选项字段中增加了IP地址使用租期选项；如果不同，则服务器收回作出的分配。")])]),t._v(" "),v("li",[v("p",[t._v("客户机收到 DHCPACK报文后，判断 DHCP 服务器分配给自己的IP地址是否一致，如果是，则表明客户机成功获得 IP 地址；否则通知 DHCP 服务器禁用这个 IP地址，以免引起IP地址冲突，然后客户机从步骤（1）重新开始执行。")])]),t._v(" "),v("li",[v("p",[t._v("客户机在成功获取IP 地址后，随时可以向服务器发出 DHCPRELEASE 报文，释放自己的IP 地址，DHCP 服务器收到 DHCPRELEASE 后，会回收相应的IP 地址，进行重新分配。")])]),t._v(" "),v("li",[v("p",[t._v("客户机根据 IP 地址使用租期自动进行租约更新")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("BGP协议使用tcp协议作为器传输层协议")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("四次断开")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[v("strong",[t._v("第一次挥手")]),t._v("： Client端发起挥手请求，向Server端发送标志位是FIN报文段，设置序列号seq，此时，Client端进入"),v("code",{pre:!0},[t._v("FIN_WAIT_1")]),t._v("状态，这表示Client端没有数据要发送给Server端了。")]),t._v(" "),v("li",[v("strong",[t._v("第二次分手")]),t._v("：Server端收到了Client端发送的FIN报文段，向Client端返回一个标志位是ACK的报文段，ack设为seq加1，Client端进入"),v("code",{pre:!0},[t._v("FIN_WAIT_2")]),t._v("状态，Server端告诉Client端，我确认并同意你的关闭请求。")]),t._v(" "),v("li",[v("strong",[t._v("第三次分手")]),t._v("： Server端向Client端发送标志位是FIN的报文段，请求关闭连接，同时Client端进入"),v("code",{pre:!0},[t._v("LAST_ACK")]),t._v("状态。")]),t._v(" "),v("li",[v("strong",[t._v("第四次分手")]),t._v(" ： Client端收到Server端发送的FIN报文段，向Server端发送标志位是ACK的报文段，然后Client端进入"),v("code",{pre:!0},[t._v("TIME_WAIT")]),t._v("状态。Server端收到Client端的ACK报文段以后，就关闭连接。此时，Client端等待"),v("strong",[t._v("2MSL")]),t._v("的时间后依然没有收到回复，则证明Server端已正常关闭，那好，Client端也可以关闭连接了。")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("h4",{attrs:{id:"ospf的router-id选举"}},[v("strong",[t._v("OSPF的Router-ID选举")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("router id（router identifier，路由器标识符），用于在一个OSPF域中唯一地标识一台路由器。")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("1、优先手工配置的router id；")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("2、在没有手工配置的前提下")]),t._v("，优选loopback接口地址中最大的地址作为router id；")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("3、在没有配置loopback接口地址的前提下")]),t._v("，优选其他接口的IP地址中选择最大的地址作为router id (不考虑接口的Up/Down状态)。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("OSPF中设置了DR，当指定了DR后，所有的路由器都与DR建立起邻接关系，DR成为该广播网络上的中心点。")]),t._v(" "),v("li",[t._v("DR一旦出现故障，其与其他路由器之间的邻接关系将全部失效，链路状态数据库也无法同步。此时就需要重新选举DR，再与非DR路由器建立邻接关系，完成LSA的同步。为了规避单点故障风险，通过选举备份指定路由器BDR，在DR失效时快速接管DR的工作")])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[v("strong",[t._v("DR/BDR的选举是基于接口的")]),t._v("（也可说是基于网段的）")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ul",[v("li",[t._v("接口的DR优先级越大越优先，优先级默认为1，范围：0~255")]),t._v(" "),v("li",[t._v("优先级为0：不参加选举")]),t._v(" "),v("li",[t._v("接口的DR优先级相等时，Router ID越大越优先。")]),t._v(" "),v("li",[t._v("稳定大于一切原则：谁先配置谁就是DR。之后配置的路由器不抢占DR。（最开始配置的路由器，网络中只有它一台，所以它认为自己是老大）")])])}]};t.exports={attributes:{title:"TCP_IP",description:"协议复习"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);