(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{451:function(t,e){const n={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frontmatter-markdown"},[n("h1",{attrs:{id:"fabric_146版本完整搭建过程"}},[t._v("fabric_1.4.6版本完整搭建过程")]),t._v(" "),n("h2",{attrs:{id:"序言"}},[t._v("序言")]),t._v(" "),n("p",[t._v("网络上的搭建过程都是大同小异，由于时间原因，有些方式不可使用，会凭空出现大量错误，因此写个系列记录一下，不过建议使用2.x版本，1.x做为学习了解版本即可。")]),t._v(" "),n("p",[n("strong",[t._v("注意：操作系统建议使用Linux")])]),t._v(" "),n("h2",{attrs:{id:"git"}},[t._v("Git")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("yum -y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])]),t._v(" "),n("h2",{attrs:{id:"go"}},[t._v("go")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("下载并安装Go语言环境")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd /opt")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mkdir golang")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cd golang")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yum install wget")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# wget https://studygolang.com/dl/golang/go1.14.3.linux-amd64.tar.gz")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tar -zxvf go1.14.3.linux-amd64.tar.gz")]),t._v("\n")])])]),t._v(" "),n("li",[n("p",[t._v("配置Go语言环境变量")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/profile\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加如下内容到/etc/profile后面")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPATH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/gopath\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOROOT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/golang/go\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GOROOT")]),t._v("/bin:"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#生效配置文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /etc/profile\n")])])])]),t._v(" "),n("h2",{attrs:{id:"docker"}},[t._v("docker")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("设置 yum 源")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 yum-utils")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 yum 源为阿里云方便下载 Docker Engine")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Docker 安装")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce docker-ce-cli containerd.io\n\n")])])])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("安装校验")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" -v\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" version\n")])])]),t._v(" "),n("li",[n("p",[t._v("配置镜像加速")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /etc/docker\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/docker/daemon.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<-")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EOF'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registry-mirrors"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docker.mirrors.ustc.edu.cn"')]),t._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://hub-mirror.c.163.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("EOF\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重新加载配置信息及重启 Docker 服务")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新启动 docker")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])])]),t._v(" "),n("h2",{attrs:{id:"docker-compose"}},[t._v("docker-compose")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("安装")]),t._v(" "),n("blockquote",[n("p",[t._v("刚开始用的是2.24版本 发现后面运行总是说peer-base.yaml这个文件read cann’t。看了看这个文件说在base/docker-compose-base.yaml配置文件中，由extends.file指向了一个peer-base.yaml的配置文件，该配置文件设置了所有Peer容器的基本的共同信息。我感觉是docker-compose安装版本的问题，所以建议用v2.23版本")])]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://github.com/docker/compose/releases/download/2.23.3/docker-compose-"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -s"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("-"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" -o /usr/local/bin/docker-compose  （慢死了需要魔法）\n")])])]),t._v(" "),n("li",[n("p",[t._v("授权")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将可执行权限应用于该二进制文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/docker-compose\n")])])]),t._v(" "),n("li",[n("p",[t._v("测试")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#测试")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" --version\n")])])])]),t._v(" "),n("h2",{attrs:{id:"fabric安装"}},[t._v("Fabric安装")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("创建生成目录")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /src/github.com/hyperledger/\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /src/github.com/hyperledger/\n")])])]),t._v(" "),n("li",[n("p",[t._v("克隆源码")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/hyperledger/fabric.git  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#优先")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#若github下载太慢，可以将https改成git")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git://github.com/hyperledger/fabric.git  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#(备选1)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#也可以用国内镜像")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com.cnpmjs.org/hyperledger/fabric.git "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#(备选2)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" fabric/\n")])])])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("切换分支")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b release-1.4 origin/release-1.4\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#检查一下分支")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n")])])])]),t._v(" "),n("p",[t._v("修改编译环境脚本"),n("code",{pre:!0},[t._v("bootstrap.sh")])]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/src/github.com/hyperledger/fabric/scripts\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" bootstrap.sh\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("版本改成如上"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if version not passed in, default to latest released version")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("VERSION")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),t._v(".6\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if ca version not passed in, default to latest released version")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CA_VERSION")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),t._v(".6\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# current version of thirdparty images (couchdb, kafka and zookeeper) released")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("THIRDPARTY_IMAGE_VERSION")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),t._v(".21\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ARCH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -s"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tr")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[:upper:]'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[:lower:]'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/mingw64_nt.*/windows/'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("-"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/x86_64/amd64/g'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MARCH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\n\n\n\n因为有些网站官方都没有维护了，我们需要自己手动下载，需要注释binariesInstall函数\n如下：\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# binariesInstall() {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#  echo "===> Downloading version ${FABRIC_TAG} platform specific fabric binaries"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  binaryDownload ${BINARY_FILE} https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric/hyperledger-fabric/${ARCH}-${VERSION}/${BINARY_FILE}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  if [ $? -eq 22 ]; then")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     echo")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#     echo "------\x3e ${FABRIC_TAG} platform specific fabric binary is not available to download <----"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     echo")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   fi")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#  echo "===> Downloading version ${CA_TAG} platform specific fabric-ca-client binary"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  binaryDownload ${CA_BINARY_FILE} https://nexus.hyperledger.org/content/repositories/releases/org/hyperledger/fabric-ca/hyperledger-fabric-ca/${ARCH}-${CA_VERSION}/${CA_BINARY_FILE}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  if [ $? -eq 22 ]; then")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     echo")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#     echo "------\x3e ${CA_TAG} fabric-ca-client binary is not available to download  (Available from 1.1.0-rc1) <----"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     echo")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   fi")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#}")]),t._v("\n")])]),t._v(" "),n("p",[t._v("​")]),t._v(" "),n("ul",[n("li",[t._v("执行脚本"),n("code",{pre:!0},[t._v("bootstrap.sh")])])]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/gopath/src/github.com/hyperledger/fabric/scripts\n./bootstrap.sh\n")])]),t._v(" "),n("p",[t._v("由于网络原因，该脚本可能会中断运行，多运行几次即可。运行完毕之后若镜像有以下镜像则说明成功")]),t._v(" "),n("ul",[n("li",[t._v("手动下载fabric-sample 用来测试网络")])]),t._v(" "),n("blockquote",[n("p",[t._v("https://github.com/hyperledger/fabric-samples/tree/v1.4.6")])]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/gopath/src/github.com/hyperledger/fabric/scripts/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/hyperledger/fabric-samples\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" fabric-samples\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b release-1.4.6 \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("查看版本是否是1.4.6"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("ul",[n("li",[t._v("手动下载二进制文件")])]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://github.com/hyperledger/fabric-ca/releases/tag/v1.4.6"}},[t._v("下载hyperledger-fabric-ca-linux-amd64-1.4.6.tar.gz")]),t._v(" (目前暂时用不到)")])]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://github.com/hyperledger/fabric/releases/tag/v1.4.6"}},[t._v("下载hyperledger-fabric-linux-amd64-1.4.6.tar.gz")])])]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/gopath/src/github.com/hyperledger/fabric/scripts/fabric-samples\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/hyperledger/fabric-ca/releases/download/v1.4.6/hyperledger-fabric-ca-linux-amd64-1.4.6.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf hyperledger-fabric-ca-linux-amd64-1.4.6.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/hyperledger/fabric/releases/download/v1.4.6/hyperledger-fabric-linux-amd64-1.4.6.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf hyperledger-fabric-linux-amd64-1.4.6.tar.gz\n")])]),t._v(" "),n("h2",{attrs:{id:"fabric运行"}},[t._v("Fabric运行")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("执行脚本")]),t._v(" "),n("pre",{staticClass:"language-shell"},[n("code",{pre:!0,attrs:{class:"language-shell"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cd /opt/gopath/src/github.com/hyperledger/fabric/scripts/fabric-samples/first-network")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#./byfn.sh up")]),t._v("\n")])]),t._v(" "),n("p",[t._v("启动的时候，开始会是有一个“START”的字样，然后经历了一段时间，日志会打印出“END”来表示整个过程已经，至此，"),n("code",{pre:!0},[t._v("fabric1.4")]),t._v("就正式搭建好环境了")])])])])}]};t.exports={attributes:{Titile:"fabric_1.4.6",description:"联盟链1.x版本搭建环境"},vue:{render:n.render,staticRenderFns:n.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}}}]);