---
title: Gin_Viper
description: viper在gin框架的使用
---

## viper在gin框架的使用



### viper简介

Viper是适用于Go应用程序（包括`Twelve-Factor App`）的完整配置解决方案。它被设计用于在应用程序中工作，并且可以处理所有类型的配置需求和格式。它支持以下特性：

- 设置默认值
- 从`JSON`、`TOML`、`YAML`、`HCL`、`envfile`和`Java properties`格式的配置文件读取配置信息
- 实时监控和重新读取配置文件（可选）
- 从环境变量中读取
- 从远程配置系统（etcd或Consul）读取并监控配置变化
- 从命令行参数读取配置
- 从buffer读取配置
- 显式配置值



### viper能做什么

Viper能够为你执行下列操作：

1. 查找、加载和反序列化`JSON`、`TOML`、`YAML`、`HCL`、`INI`、`envfile`和`Java properties`格式的配置文件。
2. 提供一种机制为你的不同配置选项设置默认值。
3. 提供一种机制来通过命令行参数覆盖指定选项的值。
4. 提供别名系统，以便在不破坏现有代码的情况下轻松重命名参数。
5. 当用户提供了与默认值相同的命令行或配置文件时，可以很容易地分辨出它们之间的区别。

Viper会按照下面的优先级。每个项目的优先级都高于它下面的项目:

- 显示调用`Set`设置值
- 命令行参数（flag）
- 环境变量
- 配置文件
- key/value存储
- 默认值

### 安装

`"go get github.com/spf13/viper"`

### 详细了解

https://github.com/spf13/viper **真的很详细**

### 实例

```go
package main

import (
	"fmt"
	"github.com/fsnotify/fsnotify"
	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"net/http"
)

func main() {
	//viper.SetConfigFile("./gin_viper/") // 指定配置文件路径
	viper.SetConfigName("config")      // 配置文件名称(无扩展名)
	viper.SetConfigType("yaml")        // 如果配置文件的名称中没有扩展名，则需要配置此项
	viper.AddConfigPath("./gin_viper") // 查找配置文件所在的路径
	if err := viper.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); ok {
			// 配置文件未找到错误；如果需要可以忽略
			fmt.Println(" err.(viper.ConfigFileNotFoundError) is fail")
			return
		} else {
			// 配置文件被找到，但产生了另外的错误
			fmt.Println("viper.ReadInConfig() is fail")
			return
		}
	}

	viper.WatchConfig()
	viper.OnConfigChange(func(e fsnotify.Event) {
		// 配置文件发生变更之后会调用的回调函数
		fmt.Println("Config file changed:", e.Name)
	})
	
	Init()

}

func Init() {
	engine := gin.Default()

	engine.GET("/", func(context *gin.Context) {
		context.String(http.StatusOK, viper.GetString("mysql.port")) // 当你修改配置文件时，会自动修改，热配置
	})
	engine.Run()

}

