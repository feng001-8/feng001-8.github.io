---
Titile: fabric_learn
description: 联盟链学习
---



#### 准备工作

> 1. 官方帮助文档：https://hyperledger-fabric.readthedocs.io/en/release-x.x/
> 2. 安装 cURL(https://curl.haxx.se/download.html),`curl --version` 查询版本
> 3. 安装docker，`docker --version` 查询版本
> 4. 安装docker-compose,`docker-compose --version` 查询版本
> 5. 安装 go 语言环境，`go version` 查询版本
> 6. 安装node.js, `node  -v` 查询版本
> 7. Python 版本要求为 2.7，`python --version` 查询版本

## Fabric核心架构简介

> **Fabric架构的核心包括三部分：**
>
> - <font color='red'>**Identity - 身份管理**</font>
> - <font color='red'>**Smart Contact - 智能合约**</font>
> - <font color='red'>**Ledger及Transactions - 账本和交易**</font>

#### 1. Identity

> Identity，也就是身份管理，Fabric是目前为止在设计上最贴近联盟链思想的区块链。联盟链考虑到商业应用对安全、隐私、监管、审计、性能的需求，提高准入门槛，成员必须被许可才能加入网络。Fabric成员管理服务为整个区块链网络提供身份管理、隐私、保密和可审计的服务。成员管理服务通过公钥基础设施PKI和去中心化共识机制使得非许可的区块链变成许可制的区块链。

#### 2. Smart Contract

> Fabric的智能合约smart contract称为链码**chaincode**，是一段代码，它处理网络成员所同意的业务逻辑。和以太坊相比，Fabric链码和底层账本是分开的，升级链码时并不需要迁移账本数据到新链码当中，真正实现了逻辑与数据的分离。
>
> 链码可采用`Go、Java、Node.js`语言编写。链码被编译成一个独立的应用程序，fabric用Docker容器来运行chaincode，里面的base镜像都是经过签名验证的安全镜像，包括OS层和开发chaincode的语言、runtime和SDK层。一旦chaincode容器被启动，它就会通过gRPC与启动这个chaincode的Peer节点连接。

#### 3. Ledger | Transactions

> Fabric使用建立在HTTP/2上的P2P协议来管理分布式账本。采取可插拔的方式来根据具体需求来设置共识协议，比如PBFT，Raft，PoW和PoS等。

- **Ledger**

  > 账本Ledger主要包含两块：blockchain和state。blockchain就是一系列连在一起的block，用来记录历史交易。state对应账本的当前最新状态，它是一个key-value数据库，Fabric默认采用`Level DB`, 可以替换成其他的Key-value数据库，如`Couch DB`。举个例子。我们采用区块链实现一个弹珠交易的系统。我们开发了一个Chaincode, 每个弹珠有以下几个属性：Name, owner, color, size.  可以定义一个JSON对象，用name做KEY, JSON对象做Value，存储在Level DB或者CouchDB中。

- **Transactions**

  > <font color="red">**Fabric上的transction交易分两种，部署交易和调用交易。**</font>
  >
  > - <font color="red">**部署交易**</font>
  >
  >   把Chaincode部署到peer节点上并准备好被调用，当一个部署交易成功执行时，Chaincode就被部署到各个peer节点上。好比把一个web service或者EJB部署到应用服务器上的不同实例上。
  >
  > - <font color="red">**调用交易**</font>
  >
  >   客户端应用程序通过Fabric提供的API调用先前已部署好的某个chaincode的某个函数执行交易，并相应地读取和写入K-V数据库，返回是否成功或者失败。

### Fabric 网络

> 业务网络，也叫共识网络或区块链网络，由不同的节点构成。节点是区块链的通信实体，节点是一个逻辑概念，不同类型的节点可以运行在同一台物理服务器上。这些节点可能部署在云上面或者本地。可能来自不同的公司或者组织。在区块链网络中有两种类型的节点：Peer节点和Orderer节点

- **Peer节点：**

  > chaincode部署在Peer节点上，它对账本进行读写操作。一个Peer节点可以充当多种角色，如背书者endorser, 提交者committer。一个区块链网络中会有多个Peer节点。

- **Orderer节点：**

  > 对交易进行排序，批量打包，生成区块，发给Peer节点。一个区块链网络中会有多个Orderer节点，它们共同提供排序服务。排序服务可以别实现为多种不同的方式，从一个中心化的服务（被用于开发和测试，如Solo）,到分布式协议（如Kafka）。
  >
  > 排序服务提供了通向客户端和Peer节点的共享通信通道。提供了包含交易的消息广播服务（broadcast和deliver）。客户端可以通过这个通道向所有的节点广播（broadcast）消息。通道可以向连接到该通道的节点投递(deliver)消息。
  >
  > 排序服务支持多通道，类似于发布/订阅消息系统中的主题topic。客户端和Peer节点可以连接到一个给点的通道，并通过给定的通道发送和接收消息。多通道使得Peer节点可以基于应用访问控制策略来订阅任意数量的通道; 也就是说，应用程序在指定Peer节点的子集中架设通道。这些peer组成提交到该通道交易的相关者集合，而且只有这些peer可以接收包含相关交易的区块，与其他交易完全隔离，实现数据隔离和保密。
  >
  > 此外，peers的子集将这些私有块提交到不同的账本上，允许它们保护这些私有交易，与其他peers子集的账本隔离开来。应用程序根据业务逻辑决定将交易发送到1个或多个通道。

- **Channel**

  > Channel在fabric中是一个相当重要的概念，可译作通道或频道。对于channel的理解，不妨想象一下电视节目的频道和“我和你不在一个频道”这句话。Channel本身存在于orderer结点内部，但需要通过peer结点使用`peer channel ...`命令进行维护。一个peer结点要想与另一个peer结点发生交易，最基本的前提就是两个结点必须同时处在同一个Channel中，block账本与channel也是一对一的关系，即一个channel一个账本。

##  Fabric核心模块

Fabric是一个由五个核心模块组成的程序组. 在fabric在成功编译完成之后, 一共会有五个核心模块, 如下:

|    模块名称     |                     功能                     |
| :-------------: | :------------------------------------------: |
|     `peer`      | 主节点模块, 负责存储区块链数据, 运行维护链码 |
|    `orderer`    |              交易打包, 排序模块              |
|   `cryptogen`   |              组织和证书生成模块              |
|  `configtxgen`  |              区块和交易生成模块              |
| `configtxlator` |              区块和交易解析模块              |

> 五个模块中`peer`和`orderer`属于系统模块, `cryptogen`, `configtxgen`, `configtxlator`属于工具模块。工具模块负责证书文件、区块链创始块、通道创始块等相关文件和证书的生成工作，但是工具模块不参与系统的运行。peer模块和 orderer 模块作为系统模块是Fabric的核心模块，启动之后会以守护进程的方式在系统后台长期运行。
>
> Fabric的5个核心模块都是基于命令行的方式运行的，目前Fabric没有为这些模块提供相关的图形界面，因此想要熟练使用Fabric的这些核心模块，必须熟悉这些模块的命令选项。

#### cryptogen 模块命令

> cryptogen模块是通过命令行的方式运行的，一个cryptogen命令由命令行参数和配置文件两部分组成，通过执行命令`cryptogen --help`可以显示cryptogen模块的命令行选项，执行结果如下所示：

```shell
$ cryptogen --help
usage: cryptogen [<flags>] <command> [<args> ...]
Utility for generating Hyperledger Fabric key material
Flags:
  --help  Show context-sensitive help (also try --help-long and --help-man).
Commands:
   # 显示帮助信息
  `help [<command>...]
   # 根据配置文件生成证书信息。
  `generate [<flags>]	
   # 显示系统默认的cryptogen模块配置文件信息
  `showtemplate
   # 显示当前模块版本号
  `version`
   # 扩展现有网络
  `extend [<flags>]
```

##### cryptogen 模块配置文件

> cryptogen模块的配置文件用来描述需要生成的证书文件的特性，比如：有多少个组织有多少个节点，需要多少个账号等。这里我们通过一个cryptogen模块配置文件的具体例子来初步了解配置文件的结构，该例子是Fabric源代码中自带的示例 -  crypto-config.yaml:
>
> <font color="red">这个配置文件的名字可以根据自己的意愿进行自定义, 即: xxx.yaml</font>

```yarn
OrdererOrgs:					# 排序节点的组织定义
  - Name: Orderer				# orderer节点的名称
 	Domain: example.com			# orderer节点的根域名 
 	Specs:
	    - Hostname: orderer		# orderer节点的主机名
PeerOrgs:						# peer节点的组织定义
  - Name: Org1					# 组织1的名称	1	1
	Domain: org1.example.com	# 组织1的根域名
 	EnableNodeOUs: true			# 是否支持node.js
 	Template:					
	    Count: 2				# 组织1中的节点(peer)数目
	Users:
 	    Count: 1				# 组织1中的用户数目
  - Name: Org2
    Domain: org2.example.com
    EnableNodeOUs: true
    Template:
        Count: 2
    Users:
        Count: 1
# ---------------------------------------------------------------------------
# "OrdererOrgs" - Definition of organizations managing orderer nodes
# ---------------------------------------------------------------------------
OrdererOrgs:
  # ---------------------------------------------------------------------------
  # Orderer
  # ---------------------------------------------------------------------------
  - Name: Orderer
    Domain: example.com
    EnableNodeOUs: false

    # ---------------------------------------------------------------------------
    # "Specs" - See PeerOrgs below for complete description
    # ---------------------------------------------------------------------------
    Specs:
      - Hostname: orderer

# ---------------------------------------------------------------------------
# "PeerOrgs" - Definition of organizations managing peer nodes
# ---------------------------------------------------------------------------
PeerOrgs:
  # ---------------------------------------------------------------------------
  # Org1
  # ---------------------------------------------------------------------------
  - Name: Org1
    Domain: org1.example.com
    EnableNodeOUs: false

    # ---------------------------------------------------------------------------
    # "CA"
    # ---------------------------------------------------------------------------
    # Uncomment this section to enable the explicit definition of the CA for this
    # organization.  This entry is a Spec.  See "Specs" section below for details.
    # ---------------------------------------------------------------------------
    # CA:
    #    Hostname: ca # implicitly ca.org1.example.com
    #    Country: US
    #    Province: California
    #    Locality: San Francisco
    #    OrganizationalUnit: Hyperledger Fabric
    #    StreetAddress: address for org # default nil
    #    PostalCode: postalCode for org # default nil

    # ---------------------------------------------------------------------------
    # "Specs"
    # ---------------------------------------------------------------------------
    # Uncomment this section to enable the explicit definition of hosts in your
    # configuration.  Most users will want to use Template, below
    #
    # Specs is an array of Spec entries.  Each Spec entry consists of two fields:
    #   - Hostname:   (Required) The desired hostname, sans the domain.
    #   - CommonName: (Optional) Specifies the template or explicit override for
    #                 the CN.  By default, this is the template:
    #
    #                              "{{.Hostname}}.{{.Domain}}"
    #
    #                 which obtains its values from the Spec.Hostname and
    #                 Org.Domain, respectively.
    #   - SANS:       (Optional) Specifies one or more Subject Alternative Names
    #                 to be set in the resulting x509. Accepts template
    #                 variables {{.Hostname}}, {{.Domain}}, {{.CommonName}}. IP
    #                 addresses provided here will be properly recognized. Other
    #                 values will be taken as DNS names.
    #                 NOTE: Two implicit entries are created for you:
    #                     - {{ .CommonName }}
    #                     - {{ .Hostname }}
    # ---------------------------------------------------------------------------
    # Specs:
    #   - Hostname: foo # implicitly "foo.org1.example.com"
    #     CommonName: foo27.org5.example.com # overrides Hostname-based FQDN set above
    #     SANS:
    #       - "bar.{{.Domain}}"
    #       - "altfoo.{{.Domain}}"
    #       - "{{.Hostname}}.org6.net"
    #       - 172.16.10.31
    #   - Hostname: bar
    #   - Hostname: baz

    # ---------------------------------------------------------------------------
    # "Template"
    # ---------------------------------------------------------------------------
    # Allows for the definition of 1 or more hosts that are created sequentially
    # from a template. By default, this looks like "peer%d" from 0 to Count-1.
    # You may override the number of nodes (Count), the starting index (Start)
    # or the template used to construct the name (Hostname).
    #
    # Note: Template and Specs are not mutually exclusive.  You may define both
    # sections and the aggregate nodes will be created for you.  Take care with
    # name collisions
    # ---------------------------------------------------------------------------
    Template:
      Count: 1
      # Start: 5
      # Hostname: {{.Prefix}}{{.Index}} # default
      # SANS:
      #   - "{{.Hostname}}.alt.{{.Domain}}"

    # ---------------------------------------------------------------------------
    # "Users"
    # ---------------------------------------------------------------------------
    # Count: The number of user accounts _in addition_ to Admin
    # ---------------------------------------------------------------------------
    Users:
      Count: 1

  # ---------------------------------------------------------------------------
  # Org2: See "Org1" for full specification
  # ---------------------------------------------------------------------------
  - Name: Org2
    Domain: org2.example.com
    EnableNodeOUs: false
    Template:
      Count: 1
    Users:
      Count: 1
```

##### 生成证书文件

````shell
```shell
# 根据默认模板在对应目录下生成证书
$ cryptogen generate
# 根据指定的模板在指定目录下生成证书
$ cryptogen generate --config=./crycrypto-config.yaml --output ./crypto-config
	--config: 指定配置文件
	--output: 指定证书文件的存储位置, 可以不指定。会在对应路径生成目录，默认名字为：crypto-config
```
````



```shell
 tree 
.
├── ordererOrganizations # orderer节点相关的证书文件
│   └── example.com   # 根域名为example.com的orderer节点的相关证书文件
│       ├── ca # CA服务器的签名文件
│       │   ├── ca.example.com-cert.pem
│       │   └── priv_sk
│       ├── msp
│       │   ├── admincerts # orderer管理员的证书
│       │   │   └── Admin@example.com-cert.pem
│       │   ├── cacerts # orderer根域名服务器的签名证书
│       │   │   └── ca.example.com-cert.pem
│       │   └── tlscacerts # tls连接用的身份证书
│       │       └── tlsca.example.com-cert.pem
│       ├── orderers # orderer节点需要的相关的证书文件
│       │   └── orderer.example.com
│       │       ├── msp # orderer节点相关证书
│       │       │   ├── admincerts
│       │       │   │   └── Admin@example.com-cert.pem
│       │       │   ├── cacerts
│       │       │   │   └── ca.example.com-cert.pem
│       │       │   ├── keystore
│       │       │   │   └── priv_sk
│       │       │   ├── signcerts
│       │       │   │   └── orderer.example.com-cert.pem
│       │       │   └── tlscacerts
│       │       │       └── tlsca.example.com-cert.pem
│       │       └── tls # orderer节点和其他节点连接用的身份证书
│       │           ├── ca.crt
│       │           ├── server.crt
│       │           └── server.key
│       ├── tlsca
│       │   ├── priv_sk
│       │   └── tlsca.example.com-cert.pem
│       └── users
│           └── Admin@example.com
│               ├── msp
│               │   ├── admincerts
│               │   │   └── Admin@example.com-cert.pem
│               │   ├── cacerts
│               │   │   └── ca.example.com-cert.pem
│               │   ├── keystore
│               │   │   └── priv_sk
│               │   ├── signcerts
│               │   │   └── Admin@example.com-cert.pem
│               │   └── tlscacerts
│               │       └── tlsca.example.com-cert.pem
│               └── tls
│                   ├── ca.crt
│                   ├── client.crt
│                   └── client.key
└── peerOrganizations  #组织相关的证书文件(组织的节点数, 用户数等证书文件)
    ├── org1.example.com
    │   ├── ca # 根节点签名证书
    │   │   ├── ca.org1.example.com-cert.pem
    │   │   └── priv_sk
    │   ├── msp # 组织管理员的证书
    │   │   ├── admincerts
    │   │   │   └── Admin@org1.example.com-cert.pem
    │   │   ├── cacerts # 组织的根证书
    │   │   │   └── ca.org1.example.com-cert.pem
    │   │   └── tlscacerts # TLS连接身份证书
    │   │       └── tlsca.org1.example.com-cert.pem
    │   ├── peers
    │   │   └── peer0.org1.example.com
    │   │       ├── msp
    │   │       │   ├── admincerts # 组织的管理证书, 创建通道必须要有该证书
    │   │       │   │   └── Admin@org1.example.com-cert.pem
    │   │       │   ├── cacerts # 组织根证书
    │   │       │   │   └── ca.org1.example.com-cert.pem
    │   │       │   ├── keystore # 当前节点的私钥
    │   │       │   │   └── priv_sk
    │   │       │   ├── signcerts # 当前节点签名的数字证书
    │   │       │   │   └── peer0.org1.example.com-cert.pem
    │   │       │   └── tlscacerts # tls连接的身份证书
    │   │       │       └── tlsca.org1.example.com-cert.pem
    │   │       └── tls 
    │   │           ├── ca.crt # 组织的根证书
    │   │           ├── server.crt # 验证本节点签名的证书
    │   │           └── server.key # 当前节点的私钥
    │   ├── tlsca
    │   │   ├── priv_sk
    │   │   └── tlsca.org1.example.com-cert.pem
    │   └── users
    │       ├── Admin@org1.example.com
    │       │   ├── msp
    │       │   │   ├── admincerts
    │       │   │   │   └── Admin@org1.example.com-cert.pem
    │       │   │   ├── cacerts
    │       │   │   │   └── ca.org1.example.com-cert.pem
    │       │   │   ├── keystore
    │       │   │   │   └── priv_sk
    │       │   │   ├── signcerts
    │       │   │   │   └── Admin@org1.example.com-cert.pem
    │       │   │   └── tlscacerts
    │       │   │       └── tlsca.org1.example.com-cert.pem
    │       │   └── tls
    │       │       ├── ca.crt
    │       │       ├── client.crt
    │       │       └── client.key
    │       └── User1@org1.example.com
    │           ├── msp
    │           │   ├── admincerts # 组织的根证书, 作为管理身份的验证
    │           │   │   └── User1@org1.example.com-cert.pem
    │           │   ├── cacerts # 用户所属组织的根证书
    │           │   │   └── ca.org1.example.com-cert.pem
    │           │   ├── keystore # 用户私钥
    │           │   │   └── priv_sk
    │           │   ├── signcerts # 用户的签名证书
    │           │   │   └── User1@org1.example.com-cert.pem
    │           │   └── tlscacerts # tls连接通信证书, sdk客户端使用
    │           │       └── tlsca.org1.example.com-cert.pem
    │           └── tls
    │               ├── ca.crt # 组织的根证书
    │               ├── client.crt # 客户端身份的证书
    │               └── client.key # 客户端的私钥
    └── org2.example.com
        ├── ca
        │   ├── ca.org2.example.com-cert.pem
        │   └── priv_sk
        ├── msp
        │   ├── admincerts
        │   │   └── Admin@org2.example.com-cert.pem
        │   ├── cacerts
        │   │   └── ca.org2.example.com-cert.pem
        │   └── tlscacerts
        │       └── tlsca.org2.example.com-cert.pem
        ├── peers
        │   └── peer0.org2.example.com
        │       ├── msp
        │       │   ├── admincerts
        │       │   │   └── Admin@org2.example.com-cert.pem
        │       │   ├── cacerts
        │       │   │   └── ca.org2.example.com-cert.pem
        │       │   ├── keystore
        │       │   │   └── priv_sk
        │       │   ├── signcerts
        │       │   │   └── peer0.org2.example.com-cert.pem
        │       │   └── tlscacerts
        │       │       └── tlsca.org2.example.com-cert.pem
        │       └── tls
        │           ├── ca.crt
        │           ├── server.crt
        │           └── server.key
        ├── tlsca
        │   ├── priv_sk
        │   └── tlsca.org2.example.com-cert.pem
        └── users
            ├── Admin@org2.example.com
            │   ├── msp
            │   │   ├── admincerts
            │   │   │   └── Admin@org2.example.com-cert.pem
            │   │   ├── cacerts
            │   │   │   └── ca.org2.example.com-cert.pem
            │   │   ├── keystore
            │   │   │   └── priv_sk
            │   │   ├── signcerts
            │   │   │   └── Admin@org2.example.com-cert.pem
            │   │   └── tlscacerts
            │   │       └── tlsca.org2.example.com-cert.pem
            │   └── tls
            │       ├── ca.crt
            │       ├── client.crt
            │       └── client.key
            └── User1@org2.example.com
                ├── msp
                │   ├── admincerts
                │   │   └── User1@org2.example.com-cert.pem
                │   ├── cacerts
                │   │   └── ca.org2.example.com-cert.pem
                │   ├── keystore
                │   │   └── priv_sk
                │   ├── signcerts
                │   │   └── User1@org2.example.com-cert.pem
                │   └── tlscacerts
                │       └── tlsca.org2.example.com-cert.pem
                └── tls
                    ├── ca.crt
                    ├── client.crt
                    └── client.key


```

#### configtxgen

>configtxgen 模块的功能一共有两个:
>
>- 生成 orderer 节点的初始化文件
>- 生成 channel 的初始化文件

##### configtxgen 模块命令

>configtxgen 模块是通过命令行的方式运行的，通过执行命令`configtxgen --help`可以显示 configtxgen 模块的命令行选项，执行结果如下所示：

```shell
$ configtxgen --help
Usage of ./configtxgen:
  # 指定所属的组织
  -asOrg string
        Performs the config generation as a particular organization (by name), only 
        including values in the write set that org (likely) has privilege to set
  # 指定创建的channel的名字, 如果没指定系统会提供一个默认的名字.
  -channelID string
        The channel ID to use in the configtx
  # 执行命令要加载的配置文件的路径, 不指定会在当前目录下查找
  -configPath string
        The path containing the configuration to use (if set)
  # 打印指定区块文件中的配置内容，string：查看的区块文件的名字
  -inspectBlock string
        Prints the configuration contained in the block at the specified path
  # 打印创建通道的交易的配置文件
  -inspectChannelCreateTx string
        Prints the configuration contained in the transaction at the specified path
  # 更新channel的配置信息
  -outputAnchorPeersUpdate string
        Creates an config update to update an anchor peer (works only with the default 
        channel creation, and only for the first update)
  # 输出区块文件的路径
  -outputBlock string
        The path to write the genesis block to (if set)
  # 标示输出创始区块文件
  -outputCreateChannelTx string
        The path to write a channel creation configtx to (if set)
  #  将组织的定义打印为JSON(这对在组织中手动添加一个通道很有用)。
  -printOrg string
        Prints the definition of an organization as JSON. (useful for adding an org to
        a channel manually)
  # 指定配置文件中的节点
  -profile string
        The profile from configtx.yaml to use for generation. (default
        "SampleInsecureSolo")
  # 显示版本信息
  -version
        Show version information
```



##### configtxgen模块配置文件

> configtxgen 模块的配置文件包含Fabric系统初始块、Channel初始块文件等信息。configtxgen 模块的配置文件样例如下所示，以下部分定义了整个系统的配置信息：

```shell
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#

---
################################################################################
#
#   Section: Organizations
#
#   - This section defines the different organizational identities which will
#   be referenced later in the configuration.
#
################################################################################
Organizations:

    # SampleOrg defines an MSP using the sampleconfig.  It should never be used
    # in production but may be used as a template for other definitions
    - &OrdererOrg
        # DefaultOrg defines the organization which is used in the sampleconfig
        # of the fabric.git development environment
        Name: OrdererOrg

        # ID to load the MSP definition as
        ID: OrdererMSP

        # MSPDir is the filesystem path which contains the MSP configuration
        MSPDir: crypto-config/ordererOrganizations/example.com/msp

    - &Org1
        # DefaultOrg defines the organization which is used in the sampleconfig
        # of the fabric.git development environment
        Name: Org1MSP

        # ID to load the MSP definition as
        ID: Org1MSP

        MSPDir: crypto-config/peerOrganizations/org1.example.com/msp

        AnchorPeers:
            # AnchorPeers defines the location of peers which can be used
            # for cross org gossip communication.  Note, this value is only
            # encoded in the genesis block in the Application section context
            - Host: peer0.org1.example.com
              Port: 7051

    - &Org2
        # DefaultOrg defines the organization which is used in the sampleconfig
        # of the fabric.git development environment
        Name: Org2MSP

        # ID to load the MSP definition as
        ID: Org2MSP

        MSPDir: crypto-config/peerOrganizations/org2.example.com/msp

        AnchorPeers:
            # AnchorPeers defines the location of peers which can be used
            # for cross org gossip communication.  Note, this value is only
            # encoded in the genesis block in the Application section context
            - Host: peer0.org2.example.com
              Port: 7051

################################################################################
#
#   SECTION: Capabilities
#
#   - This section defines the capabilities of fabric network. This is a new
#   concept as of v1.1.0 and should not be utilized in mixed networks with
#   v1.0.x peers and orderers.  Capabilities define features which must be
#   present in a fabric binary for that binary to safely participate in the
#   fabric network.  For instance, if a new MSP type is added, newer binaries
#   might recognize and validate the signatures from this type, while older
#   binaries without this support would be unable to validate those
#   transactions.  This could lead to different versions of the fabric binaries
#   having different world states.  Instead, defining a capability for a channel
#   informs those binaries without this capability that they must cease
#   processing transactions until they have been upgraded.  For v1.0.x if any
#   capabilities are defined (including a map with all capabilities turned off)
#   then the v1.0.x peer will deliberately crash.
#
################################################################################
Capabilities:
    # Channel capabilities apply to both the orderers and the peers and must be
    # supported by both.  Set the value of the capability to true to require it.
    Global: &ChannelCapabilities
        # V1.1 for Global is a catchall flag for behavior which has been
        # determined to be desired for all orderers and peers running v1.0.x,
        # but the modification of which would cause incompatibilities.  Users
        # should leave this flag set to true.
        V1_1: true

    # Orderer capabilities apply only to the orderers, and may be safely
    # manipulated without concern for upgrading peers.  Set the value of the
    # capability to true to require it.
    Orderer: &OrdererCapabilities
        # V1.1 for Order is a catchall flag for behavior which has been
        # determined to be desired for all orderers running v1.0.x, but the
        # modification of which  would cause incompatibilities.  Users should
        # leave this flag set to true.
        V1_1: true

    # Application capabilities apply only to the peer network, and may be safely
    # manipulated without concern for upgrading orderers.  Set the value of the
    # capability to true to require it.
    Application: &ApplicationCapabilities
        # V1.2 for Application is a catchall flag for behavior which has been
        # determined to be desired for all peers running v1.0.x, but the
        # modification of which would cause incompatibilities.  Users should
        # leave this flag set to true.
        V1_2: true

################################################################################
#
#   SECTION: Application
#
#   - This section defines the values to encode into a config transaction or
#   genesis block for application related parameters
#
################################################################################
Application: &ApplicationDefaults

    # Organizations is the list of orgs which are defined as participants on
    # the application side of the network
    Organizations:

################################################################################
#
#   SECTION: Orderer
#
#   - This section defines the values to encode into a config transaction or
#   genesis block for orderer related parameters
#
################################################################################
Orderer: &OrdererDefaults

    # Orderer Type: The orderer implementation to start
    # Available types are "solo" and "kafka"
    OrdererType: solo

    Addresses:
        - orderer.example.com:7050

    # Batch Timeout: The amount of time to wait before creating a batch
    BatchTimeout: 2s

    # Batch Size: Controls the number of messages batched into a block
    BatchSize:

        # Max Message Count: The maximum number of messages to permit in a batch
        MaxMessageCount: 10

        # Absolute Max Bytes: The absolute maximum number of bytes allowed for
        # the serialized messages in a batch.
        AbsoluteMaxBytes: 99 MB

        # Preferred Max Bytes: The preferred maximum number of bytes allowed for
        # the serialized messages in a batch. A message larger than the preferred
        # max bytes will result in a batch larger than preferred max bytes.
        PreferredMaxBytes: 512 KB

    Kafka:
        # Brokers: A list of Kafka brokers to which the orderer connects
        # NOTE: Use IP:port notation
        Brokers:
            - 127.0.0.1:9092

    # Organizations is the list of orgs which are defined as participants on
    # the orderer side of the network
    Organizations:

################################################################################
#
#   Profile
#
#   - Different configuration profiles may be encoded here to be specified
#   as parameters to the configtxgen tool
#
################################################################################
Profiles:

    TwoOrgsOrdererGenesis:
        Capabilities:
            <<: *ChannelCapabilities
        Orderer:
            <<: *OrdererDefaults
            Organizations:
                - *OrdererOrg
            Capabilities:
                <<: *OrdererCapabilities
        Consortiums:
            SampleConsortium:
                Organizations:
                    - *Org1
                    - *Org2
    TwoOrgsChannel:
        Consortium: SampleConsortium
        Application:
            <<: *ApplicationDefaults
            Organizations:
                - *Org1
                - *Org2
            Capabilities:
                <<: *ApplicationCapabilities


```

> 上述配置文件中的 Profiles节点定义了整个系统的结构和channel的结构, 配置文件中的`Profiles`关键字不允许修改，否则配置无效。系统配置信息中设置了系统中orderer节点的信息以及系统中包含的组织数。

##### configtxgen 的使用

> <font color="red">configtxgen  命令在执行的时候需要加载一个叫做configtx.yaml的配置文件, 如果没有指定默认重命令执行的当前目录查找，我们可以通过参数 `-configPath`进行指定，也可以将这个目录设置到环境变量`FABRIC_CFG_PATH`中。</font>
>
> export FABRIC_CFG_PATH=$(pwd)/networks/config/

- 创建 `orderer` 的初始块

  ```shell
  $ configtxgen -profile xxxOrgOrdererGenesis -outputBlock ./channel-artifacts/genesis.block
  # xxxtOrgOrdererGenesis: 要和配置文件中的配置项对应, 可以由数字和字母构成.
  # orderer初始块文件为genesis.block，生成在channel-artifacts目录中
  ```

- 创建 `channel` 的初始块

  ```shell
  $ configtxgen -profile xxxOrgsChannel -outputCreateChannelTx ./channel-artifacts/channel.tx -channelID mychannel
  # OrgsChannel: 要和配置文件中的配置项对应
  # channel.tx 为生成的频道文件, 在channel-artifacts目录中
  # 创建的频道名称为: mychannel
  ```

- 创建锚点更新文件 - 每个组织分别进行更新

```shell
# 更新第一个组织 OrgGoMSP 的peer节点
$ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/GoMSPanchors.tx -channelID mychannel -asOrg OrgGoMSP
# TwoOrgsChannel: 要和配置文件中的配置项对应
# OrgGoMSP组织使用的频道为 mychannel 生成的配置信息文件名为 GoMSPanchors.tx
#==============================================================================
# 更新第2个组织 OrgJavaMSP 的peer节点
$ configtxgen -profile TwoOrgsChannel -outputAnchorPeersUpdate ./channel-artifacts/JavaMSPanchors.tx -channelID mychannel -asOrg OrgJavaMSP
# TwoOrgsChannel: 要和配置文件中的配置项对应
# OrgJavaMSP组织使用的频道为 mychannel 生成的配置信息文件名为 JavaMSPanchors.tx
```

#### orderer模块的配置信息

```shell
# orderer节点运行需要配置一些环境变量
ORDERER_GENERAL_LOGLEVEL	# 日志级别
	- `critical | error | warning | notice | info | debug
ORDERER_GENERAL_LISTENADDRESS	# orderer服务器监听的地址
ORDERER_GENERAL_LISTENPORT		# orderer服务器监听的端口
ORDERER_GENERAL_GENESTSMETHOD	# 初始化块(Genesis)的来源方式, 一般赋值为 file 即可
ORDERER_GENERAL_GENESISFILE		# 存储初始块文件的路径
ORDERER_GENERAL_LOCALMSPID		# orderer节点的编号,在configtxgen模块配置文件中指定的
	- `configtx.yaml配置文件中排序节点的组织的ID
ORDERER_GENERAL_LOCALMSPDIR		# orderer节点msp文件路径
ORDERER_GENERAL_LEDGERTYPE		# 账本类型, ram, json, file
	- `ram: 账本数据存储在内存, 一般用于测试环境
	- `json/file: 账本数据保存在文件中, 生成环境中推荐使用file 
ORDERER_GENERAL_BATCHTIMEOUT	# 批处理超时, 创建批处理之前的等待时间
	- `每隔一个BATCHTIMEOUT时长, 就会生成一个新的区块
ORDERER_GENERAL_MAXMESSAGECOUNT	# 最大消息计数, 批处理的最大消息数量
	- `只要一个区块的消息达到MAXMESSAGECOUNT指定的数量, 就会生成一个新的区块
ORDERER_GENERAL_TLS_ENABLED		# 是否启用TLS, true/false
ORDERER_GENERAL_TLS_PRIVATEKEY	# orderer节点的私钥文件, 按照下边的示例目录找
	- `crypto-config/ordererOrganizations/xx.com/orderers/orderer.xx.com/tls/server.key
ORDERER_GENERAL_TLS_CERTIFICATE	# 证书文件
	- `crypto-config/ordererOrganizations/xx.com/orderers/orderer.xx.com/tls/server.crt
ORDERER—GENERAL_TLS_ROOTCAS		# 根证书文件
	- `crypto-config/ordererOrganizations/xx.com/orderers/orderer.xx.com/tls/ca.crt
```

####  peer

> peer模块是Fabric中最重要的模块，也是在Fabric系统使用最多的模块。peer模块在Fabric中被称为主节点模块，主要负责存储区块链数据、运行维护链码、提供对外服务接口等作用。

##### 命令行和常用参数

```shell
# 通过docker启动peer节点的镜像文件
$ docker run -it hyperledger/fabric-peer bash
$ peer --help
Usage:
  peer [command]

Available Commands:
  `chaincode`   相关的子命令:
  		`install`
  		`instantiate`
  		`invoke`
  		`package`
  		`query`
  		`signpackage`
  		`upgrade`
  		`list`
  channel     通道操作: create|fetch|join|list|update|signconfigtx|getinfo.
  help        查看相关命令的帮助信息
  logging     日志级别: getlevel|setlevel|revertlevels.
  node        node节点操作: start|status.
  version     当前peer的版本.

Flags:
  -h, --help                   help for peer
      --logging-level string   Default logging level and overrides, see core.yaml for full syntax
```

##### peer channel子命令

> peer channel的子命令可以通过 `peer channel --help`进行查看. 这里介绍一个这些子命令可以共用的一些参数:
>
> - `--cafile `:  当前orderer节点pem格式的tls证书文件, <font color="red">要使用绝对路径</font>.
>
>   `crypto-config/ordererOrganizations/itcast.com/orderers/ubuntu.itcast.com/msp/tlscacerts/tlsca.itcast.com-cert.pem`
>
> - `-o, --orderer`: orderer节点的地址
>
> - `--tls`: 通信时是否使用tls加密

- **create** - 创建通道

  >命令: `peer channel create [flags]`, 可用参数为:
  >
  >- ` -c, --channelID`: 要创建的通道的ID, 必须小写, 在250个字符以内
  >- `-f, --file`: 由configtxgen 生成的通道文件, 用于提交给orderer
  >- `-t, --timeout`: 创建通道的超时时长

  ```shell
  $ peer channel create -o ubuntu.itcast.com:7050 -c $CHANNEL_NAME -f ./channel-artifacts/channel.tx --tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA
  ```

- **join** - 将peer加入到通道中

  > 命令: `peer channel join[flags]`, 可用参数为:
  >
  > - `-b, --blockpath`: genesis创始块文件

  ```shell
  $ peer channel join -b mychannel.block
  ```

- **list** - 列出peer加入的通道

  ```shell
  $ peer channel list
  ```

- **update** - 更新

  > 命令: `peer channel update [flags]`, 可用参数为:
  >
  > - ` -c, --channelID`: 要创建的通道的ID, 必须小写, 在250个字符以内
  > - `-f, --file`: 由configtxgen 生成的组织锚节点文件, 用于提交给orderer

  ```shell
  $ peer channel update -o orderer.example.com:7050 -c mychannel -f ./channel-artifacts/Org1MSPanchors.tx --tls true --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
  ```

##### **peer 的环境变量**

```shell
# 配置文件和环境变量是设置peer启动参数的重要手段, 相关环境变量如下:
CORE_VM_ENDPOINT	# docker服务器的Deamon地址, 默认取端口的套接字, 如下:
	- `unix:///var/run/docker.sock
CORE_VM_DOCKER_HOSTCONFIG_NETWORKMODE	# chaincode容器的网络命名模式, 自己取名即可
	- `节点运行在同一个网络中才能相互通信, 不同网络中的节点相互隔离
CORE_PEER_PROFILE_ENABLED	# 使用peer内置的 profile server
	- `fabric的peer内置有profile server，默认时运行在6060端口上的，并且默认关闭。
CORE_LOGGING_LEVEL		# log日志的级别
	- `critical | error | warning | notice | info | debug
CORE_PEER_ID	# peer节点的编号, 自定义一个即可
CORE_PEER_GOSSIP_USELEADERELECTION	# 是否自动选举leader节点, 自动:true
CORE_PEER_GOSSIP_ORGLEADER			# 当前节点是否为leader节点, 是:true
CORE_PEER_ADDRESS					# 当前peer节点的访问地址
	- `格式: 域名:端口 / IP:端口
CORE_PEER_CHAINCODELISTENADDRESS	# chaincode的监听地址
CORE_PEER_GOSSIP_EXTERNALENDPOINT	# 节点被组织外节点感知时的地址
	- `默认为空, 代表不被其他组织节点所感知
CORE_PEER_GOSSIP_BOOTSTRAP	# 启动节点后向哪些节点发起gossip连接, 以加入网络
	- `这些节点与本地节点需要属于同一个网络
CORE_PEER_LOCALMSPID 	# peer节点所属的组织的编号, 在configtxgen.yaml中设置的
CORE_CHAINCODE_MODE		# chaincode的运行模式
	- `net: 网络模式
	- `dev: 开发模式, 该模式下可以在容器外运行chaincode
CORE_PEER_MSPCONFIGPATH	# 当前节点的msp文件路径
	- `启动peer的时候需要使用msp账号文件
	- `crypto-config/peerOrganizations/org1.x.com/peers/peer0.org1.x.com/msp
	- `创建channel的时候需要使用msp账号文件
	- `crypto-config/peerOrganizations/org1.x.com/users/Admin@org1.x.com/msp
CORE_PEER_TLS_ENABLED	# 是否激活tls, 激活:true, 不激活:false
CORE_PEER_TLS_CERT_FILE	# 服务器身份验证证书
	- `crypto-config/peerOrganizations/org1.x.com/peers/peer0.org1.x.com/tls/server.crt
CORE_PEER_TLS_KEY_FILE	# 服务器的私钥文件
	- `crypto-config/peerOrganizations/org1.x.com/peers/peer0.org1.x.com/tls/server.key
CORE_PEER_TLS_ROOTCERT_FILE	# 根服务器证书
	- `crypto-config/peerOrganizations/org1.x.com/peers/peer0.org1.x.com/tls/ca.crt
```

> <font color="red">每个 org 会选举出一个 **leader peer**（实际上可以存在多个），负责连接到 orderer。**leader peer**从orderer 拿到新块的信息后分发给其他 peer。</font>
>
> - 静态选择leader peer
>
>   ```shell
>   export CORE_PEER_GOSSIP_USELEADERELECTION=false
>   export CORE_PEER_GOSSIP_ORGLEADER=true #指定某一个peer为leader peer
>   # 1. 如果都配置为 false，那么 peer 不会尝试变成一个 leader
>   # 2. 如果都配置为 true，会引发异常
>   # 3. 静态配置的方式，需要自行保证 leader 的可用性
>   ```
>
> - 动态选择leader peer
>
>   ```shell
>   export CORE_PEER_GOSSIP_USELEADERELECTION=true
>   export CORE_PEER_GOSSIP_ORGLEADER=false
>   ```

##### **peer 默认监听的端口**

> 下面是Hyperledger中相关监听的服务端口（默认）
>
> - 7050: REST 服务端口
> - 7051：peer gRPC 服务监听端口
>
> - 7052：peer CLI 端口
>
> - 7053：peer 事件服务端口
>
> - 7054：eCAP
> - 7055：eCAA
>
> - 7056：tCAP
>
> - 7057：tCAA
>
> - 7058：tlsCAP
>
> - 7059：tlsCAA

#### 启动docker-compose

##### 编写配置文件

> 编写docker-compose启动时加载的配置文件，默认加载的文件名为：``docker-compose.yml/yaml`，可通过命令`docker-compose --help`查看。我们将该文件放到项目目录`~/Demo`中。

##### docker-compose-cli.yaml 

```yaml
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#
# compose 版本号
version: '2'
# 数据卷映射, 本地 -> docker镜像
volumes:
  orderer.example.com:
  peer0.org1.example.com:
  peer1.org1.example.com:
  peer0.org2.example.com:
  peer1.org2.example.com:

networks: # 指定容器运行的网络, 同一网络中的容器才能相互通信
  byfn:

services:

  orderer.example.com:  # 定义的第1个服务名
    extends: # 继承自当前yaml文件或者其它文件中定义的服务
      file:   base/docker-compose-base.yaml
       # 要继承上述file文件中对应的名字叫做orderer.example.com的服务
      service: orderer.example.com # 容器名称, 可以自定义
    container_name: orderer.example.com # 指定容器启动后运行的网络名
    networks:
      - byfn

  peer0.org1.example.com: # 定义的第2个服务名
    container_name: peer0.org1.example.com
    extends:
      file:  base/docker-compose-base.yaml
      service: peer0.org1.example.com
    networks:
      - byfn

  peer1.org1.example.com: # 定义的第3个服务名
    container_name: peer1.org1.example.com
    extends:
      file:  base/docker-compose-base.yaml
      service: peer1.org1.example.com
    networks:
      - byfn

  peer0.org2.example.com: # 定义的第4个服务名
    container_name: peer0.org2.example.com
    extends:
      file:  base/docker-compose-base.yaml
      service: peer0.org2.example.com
    networks:
      - byfn

  peer1.org2.example.com: # 定义的第5个服务名
    container_name: peer1.org2.example.com
    extends:
      file:  base/docker-compose-base.yaml
      service: peer1.org2.example.com
    networks:
      - byfn

  cli: # 定义的第6个服务名
    container_name: cli
    image: hyperledger/fabric-tools:$IMAGE_TAG # 指定服务的镜像名称或镜像 ID
    tty: true
    stdin_open: true
    environment:  # 环境变量设置
      - GOPATH=/opt/gopath
      - CORE_VM_ENDPOINT=unix:///host/var/run/docker.sock
      #- CORE_LOGGING_LEVEL=DEBUG
      - CORE_LOGGING_LEVEL=INFO
      - CORE_PEER_ID=cli
      - CORE_PEER_ADDRESS=peer0.org1.example.com:7051
      - CORE_PEER_LOCALMSPID=Org1MSP
      - CORE_PEER_TLS_ENABLED=true
      - CORE_PEER_TLS_CERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/server.crt
      - CORE_PEER_TLS_KEY_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/server.key
      - CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
      - CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
    working_dir: /opt/gopath/src/github.com/hyperledger/fabric/peer # 工作目录
    command: /bin/bash   # 容器启动后执行的命令
    volumes: # 本地数据卷内容挂载到容器, 挂载到容器中的数据是只读的
        - /var/run/:/host/var/run/
        - ./../chaincode/:/opt/gopath/src/github.com/chaincode
        - ./crypto-config:/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/
        - ./scripts:/opt/gopath/src/github.com/hyperledger/fabric/peer/scripts/
        - ./channel-artifacts:/opt/gopath/src/github.com/hyperledger/fabric/peer/channel-artifacts
    depends_on: # 指定了容器的启动顺序, 下边5个服务全部启动之后, 启动cli服务
      - orderer.example.com     # 定义的服务器名1
      - peer0.org1.example.com  # 定义的服务器名2
      - peer1.org1.example.com  # 定义的服务器名3
      - peer0.org2.example.com  # 定义的服务器名4
      - peer1.org2.example.com  # 定义的服务器名5
    networks:
      - byfn


```

> 接下来就上面 `docker-compose-cli.yaml` 文件中依赖的文件`docker-compose-base.yaml`，根据上面的指定可以知道该文件是放到base目录中，也就是说需要在Demo目录中创建子目录base：`mkdir base`。

```yaml
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#

version: '2'

services:

  orderer.example.com:  # 排序节点服务名称
    container_name: orderer.example.com
    image: hyperledger/fabric-orderer:$IMAGE_TAG
    environment:
      - ORDERER_GENERAL_LOGLEVEL=INFO
      - ORDERER_GENERAL_LISTENADDRESS=0.0.0.0
      - ORDERER_GENERAL_GENESISMETHOD=file
      - ORDERER_GENERAL_GENESISFILE=/var/hyperledger/orderer/orderer.genesis.block
      - ORDERER_GENERAL_LOCALMSPID=OrdererMSP
      - ORDERER_GENERAL_LOCALMSPDIR=/var/hyperledger/orderer/msp
      # enabled TLS
      - ORDERER_GENERAL_TLS_ENABLED=true
      - ORDERER_GENERAL_TLS_PRIVATEKEY=/var/hyperledger/orderer/tls/server.key
      - ORDERER_GENERAL_TLS_CERTIFICATE=/var/hyperledger/orderer/tls/server.crt
      - ORDERER_GENERAL_TLS_ROOTCAS=[/var/hyperledger/orderer/tls/ca.crt]
    working_dir: /opt/gopath/src/github.com/hyperledger/fabric
    command: orderer
    volumes:
    - ../channel-artifacts/genesis.block:/var/hyperledger/orderer/orderer.genesis.block
    - ../crypto-config/ordererOrganizations/example.com/orderers/orderer.example.com/msp:/var/hyperledger/orderer/msp
    - ../crypto-config/ordererOrganizations/example.com/orderers/orderer.example.com/tls/:/var/hyperledger/orderer/tls
    - orderer.example.com:/var/hyperledger/production/orderer
    ports:
      - 7050:7050

  peer0.org1.example.com:
    container_name: peer0.org1.example.com
    extends:
      file: peer-base.yaml
      service: peer-base
    environment:
      - CORE_PEER_ID=peer0.org1.example.com
      - CORE_PEER_ADDRESS=peer0.org1.example.com:7051
      - CORE_PEER_GOSSIP_BOOTSTRAP=peer1.org1.example.com:7051
      - CORE_PEER_GOSSIP_EXTERNALENDPOINT=peer0.org1.example.com:7051
      - CORE_PEER_LOCALMSPID=Org1MSP
    volumes:
        - /var/run/:/host/var/run/
        - ../crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/msp:/etc/hyperledger/fabric/msp
        - ../crypto-config/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls:/etc/hyperledger/fabric/tls
        - peer0.org1.example.com:/var/hyperledger/production
    ports:
      - 7051:7051
      - 7053:7053

  peer1.org1.example.com:
    container_name: peer1.org1.example.com
    extends:
      file: peer-base.yaml
      service: peer-base
    environment:
      - CORE_PEER_ID=peer1.org1.example.com
      - CORE_PEER_ADDRESS=peer1.org1.example.com:7051
      - CORE_PEER_GOSSIP_EXTERNALENDPOINT=peer1.org1.example.com:7051
      - CORE_PEER_GOSSIP_BOOTSTRAP=peer0.org1.example.com:7051
      - CORE_PEER_LOCALMSPID=Org1MSP
    volumes:
        - /var/run/:/host/var/run/
        - ../crypto-config/peerOrganizations/org1.example.com/peers/peer1.org1.example.com/msp:/etc/hyperledger/fabric/msp
        - ../crypto-config/peerOrganizations/org1.example.com/peers/peer1.org1.example.com/tls:/etc/hyperledger/fabric/tls
        - peer1.org1.example.com:/var/hyperledger/production

    ports:
      - 8051:7051
      - 8053:7053

  peer0.org2.example.com:
    container_name: peer0.org2.example.com
    extends:
      file: peer-base.yaml
      service: peer-base
    environment:
      - CORE_PEER_ID=peer0.org2.example.com
      - CORE_PEER_ADDRESS=peer0.org2.example.com:7051
      - CORE_PEER_GOSSIP_EXTERNALENDPOINT=peer0.org2.example.com:7051
      - CORE_PEER_GOSSIP_BOOTSTRAP=peer1.org2.example.com:7051
      - CORE_PEER_LOCALMSPID=Org2MSP
    volumes:
        - /var/run/:/host/var/run/
        - ../crypto-config/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/msp:/etc/hyperledger/fabric/msp
        - ../crypto-config/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls:/etc/hyperledger/fabric/tls
        - peer0.org2.example.com:/var/hyperledger/production
    ports:
      - 9051:7051
      - 9053:7053

  peer1.org2.example.com:
    container_name: peer1.org2.example.com
    extends:
      file: peer-base.yaml
      service: peer-base
    environment:
      - CORE_PEER_ID=peer1.org2.example.com
      - CORE_PEER_ADDRESS=peer1.org2.example.com:7051
      - CORE_PEER_GOSSIP_EXTERNALENDPOINT=peer1.org2.example.com:7051
      - CORE_PEER_GOSSIP_BOOTSTRAP=peer0.org2.example.com:7051
      - CORE_PEER_LOCALMSPID=Org2MSP
    volumes:
        - /var/run/:/host/var/run/
        - ../crypto-config/peerOrganizations/org2.example.com/peers/peer1.org2.example.com/msp:/etc/hyperledger/fabric/msp
        - ../crypto-config/peerOrganizations/org2.example.com/peers/peer1.org2.example.com/tls:/etc/hyperledger/fabric/tls
        - peer1.org2.example.com:/var/hyperledger/production
    ports:
      - 10051:7051
      - 10053:7053
```

> 在上面的docker-compose-base.yaml文件中又引用了文件`peer-base.yaml`，接下来我们对该文件进行修改。 

```yaml
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
#

version: '2'

services:
  peer-base:
    image: hyperledger/fabric-peer:$IMAGE_TAG
    environment:
      - CORE_VM_ENDPOINT=unix:///host/var/run/docker.sock
      # the following setting starts chaincode containers on the same
      # bridge network as the peers
      # https://docs.docker.com/compose/networking/
      - CORE_VM_DOCKER_HOSTCONFIG_NETWORKMODE=${COMPOSE_PROJECT_NAME}_byfn
      - CORE_LOGGING_LEVEL=INFO
      #- CORE_LOGGING_LEVEL=DEBUG
      - CORE_PEER_TLS_ENABLED=true
      - CORE_PEER_GOSSIP_USELEADERELECTION=true
      - CORE_PEER_GOSSIP_ORGLEADER=false
      - CORE_PEER_PROFILE_ENABLED=true
      - CORE_PEER_TLS_CERT_FILE=/etc/hyperledger/fabric/tls/server.crt
      - CORE_PEER_TLS_KEY_FILE=/etc/hyperledger/fabric/tls/server.key
      - CORE_PEER_TLS_ROOTCERT_FILE=/etc/hyperledger/fabric/tls/ca.crt
    working_dir: /opt/gopath/src/github.com/hyperledger/fabric/peer
    command: peer node start
```

#### channel管理
