---
Titile: fabric_1.4.6
description: 联盟链1.x版本搭建环境
---



# fabric_1.4.6版本完整搭建过程

## 序言

网络上的搭建过程都是大同小异，由于时间原因，有些方式不可使用，会凭空出现大量错误，因此写个系列记录一下，不过建议使用2.x版本，1.x做为学习了解版本即可。

**注意：操作系统建议使用Linux**

## Git

```shell
yum -y install git
```

## go

- 下载并安装Go语言环境

  ```shell
  # cd /opt
  # mkdir golang
  # cd golang
  # yum install wget
  # wget https://studygolang.com/dl/golang/go1.14.3.linux-amd64.tar.gz
  # tar -zxvf go1.14.3.linux-amd64.tar.gz
  ```

- 配置Go语言环境变量

  ```shell
  vi /etc/profile
  #添加如下内容到/etc/profile后面
  export GOPATH=/opt/gopath
  export GOROOT=/opt/golang/go
  export PATH=$GOROOT/bin:$PATH
  #生效配置文件
  source /etc/profile
  ```

## docker

- 设置 yum 源

  ```shell
  # 安装 yum-utils
  sudo yum install -y yum-utils
  # 设置 yum 源为阿里云方便下载 Docker Engine
  sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  ```

* Docker 安装

  ```shell
  sudo yum install docker-ce docker-ce-cli containerd.io

- 安装校验

  ```shell
  docker -v
  docker version
  ```

- 
  配置镜像加速

  ```shell
  mkdir -p /etc/docker
  sudo tee /etc/docker/daemon.json <<-'EOF'{"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn", "http://hub-mirror.c.163.com"]}EOF
  #重新加载配置信息及重启 Docker 服务
  sudo systemctl daemon-reload
  # 重新启动 docker
  sudo systemctl restart docker
  ```

## docker-compose

- 安装

  > 刚开始用的是2.24版本 发现后面运行总是说peer-base.yaml这个文件read cann’t。看了看这个文件说在base/docker-compose-base.yaml配置文件中，由extends.file指向了一个peer-base.yaml的配置文件，该配置文件设置了所有Peer容器的基本的共同信息。我感觉是docker-compose安装版本的问题，所以建议用v2.23版本

  ```shell
  curl -L https://github.com/docker/compose/releases/download/2.23.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose  （慢死了需要魔法）
  ```

- 授权

  ```shell
  # 将可执行权限应用于该二进制文件
  sudo chmod +x /usr/local/bin/docker-compose
  ```

- 测试

  ```shell
  #测试
  docker-compose --version
  ```

## Fabric安装

- 创建生成目录

  ```shell
  mkdir -p /src/github.com/hyperledger/
  cd /src/github.com/hyperledger/
  ```

- 克隆源码

  ```shell
  git clone https://github.com/hyperledger/fabric.git  #优先
  #若github下载太慢，可以将https改成git
  git clone git://github.com/hyperledger/fabric.git  #(备选1)
  #也可以用国内镜像
  git clone https://github.com.cnpmjs.org/hyperledger/fabric.git #(备选2)
  cd fabric/
  ```

* 切换分支

  ```shell
  git checkout -b release-1.4 origin/release-1.4
  #检查一下分支
  git branch
  ```

修改编译环境脚本`bootstrap.sh`	

```shell
cd /opt/src/github.com/hyperledger/fabric/scripts
vim bootstrap.sh
(版本改成如上)
# if version not passed in, default to latest released version
export VERSION=1.4.6
# if ca version not passed in, default to latest released version
export CA_VERSION=1.4.6
# current version of thirdparty images (couchdb, kafka and zookeeper) released
export THIRDPARTY_IMAGE_VERSION=0.4.21
export ARCH=$(echo "$(uname -s|tr '[:upper:]' '[:lower:]'|sed 's/mingw64_nt.*/windows/')-$(uname -m | sed 's/x86_64/amd64/g')")
export MARCH=$(uname -m)




因为有些网站官方都没有维护了，我们需要自己手动下载，需要注释binariesInstall函数
如下：
# binariesInstall() {
#  echo "===> Downloading version ${FABRIC_TAG} platform specific fabric binaries"
#  binaryDownload ${BINARY_FILE} https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric/hyperledger-fabric/${ARCH}-${VERSION}/${BINARY_FILE}
#  if [ $? -eq 22 ]; then
#     echo
#     echo "------> ${FABRIC_TAG} platform specific fabric binary is not available to download <----"
#     echo
#   fi
#
#  echo "===> Downloading version ${CA_TAG} platform specific fabric-ca-client binary"
#  binaryDownload ${CA_BINARY_FILE} https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric-ca/hyperledger-fabric-ca/${ARCH}-${CA_VERSION}/${CA_BINARY_FILE}
#  if [ $? -eq 22 ]; then
#     echo
#     echo "------> ${CA_TAG} fabric-ca-client binary is not available to download  (Available from 1.1.0-rc1) <----"
#     echo
#   fi
#}
```

​	

* 执行脚本`bootstrap.sh`

```shell
cd /opt/gopath/src/github.com/hyperledger/fabric/scripts
./bootstrap.sh
```

由于网络原因，该脚本可能会中断运行，多运行几次即可。运行完毕之后若镜像有以下镜像则说明成功

* 手动下载fabric-sample 用来测试网络

> https://github.com/hyperledger/fabric-samples/tree/v1.4.6

```shell
cd /opt/gopath/src/github.com/hyperledger/fabric/scripts/
git clone https://github.com/hyperledger/fabric-samples
cd fabric-samples
git checkout -b release-1.4.6 
git branch(查看版本是否是1.4.6)
```

* 手动下载二进制文件

> [下载hyperledger-fabric-ca-linux-amd64-1.4.6.tar.gz](https://github.com/hyperledger/fabric-ca/releases/tag/v1.4.6) (目前暂时用不到)

> [下载hyperledger-fabric-linux-amd64-1.4.6.tar.gz](https://github.com/hyperledger/fabric/releases/tag/v1.4.6)

```shell
cd /opt/gopath/src/github.com/hyperledger/fabric/scripts/fabric-samples
wget https://github.com/hyperledger/fabric-ca/releases/download/v1.4.6/hyperledger-fabric-ca-linux-amd64-1.4.6.tar.gz
tar -zxvf hyperledger-fabric-ca-linux-amd64-1.4.6.tar.gz
wget https://github.com/hyperledger/fabric/releases/download/v1.4.6/hyperledger-fabric-linux-amd64-1.4.6.tar.gz
tar -zxvf hyperledger-fabric-linux-amd64-1.4.6.tar.gz
```



## Fabric运行

- 执行脚本

  ```shell
  #cd /opt/gopath/src/github.com/hyperledger/fabric/scripts/fabric-samples/first-network
  #./byfn.sh up
  ```

  启动的时候，开始会是有一个“START”的字样，然后经历了一段时间，日志会打印出“END”来表示整个过程已经，至此，`fabric1.4`就正式搭建好环境了





