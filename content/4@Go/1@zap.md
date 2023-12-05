---
title: Zap
description: zap的使用
---

## Zap日志库的使用



### Zap 简介

在许多Go语言项目中，我们需要一个好的日志记录器能够提供下面这些功能：

- 能够将事件记录到文件中，而不是应用程序控制台。
- 日志切割-能够根据文件大小、时间或间隔等来切割日志文件。
- 支持不同的日志级别。例如INFO，DEBUG，ERROR等。
- 能够打印基本信息，如调用文件/函数名和行号，日志时间等。

Go 中的快速、结构化、分级日志记录。

### 安装

`go get -u go.uber.org/zap`

### 性能

Zap提供了两种类型的日志记录器—`Sugared Logger`和`Logger`。

在性能很好但不是很关键的上下文中，使用`SugaredLogger`。它比其他结构化日志记录包快4-10倍，并且支持结构化和printf风格的日志记录。

在每一微秒和每一次内存分配都很重要的上下文中，使用`Logger`。它甚至比`SugaredLogger`更快，内存分配次数也更少，但它只支持强类型的结构化日志记录。

### 使用

```go
package main

import (
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"gopkg.in/natefinch/lumberjack.v2"
	"net/http"
)

// 定义一个全局变量之后被初始化
var logger *zap.Logger
var sugaredLogger *zap.SugaredLogger

func main() {
	InitLogger()
	defer logger.Sync()
	simpleHttpGet("https://www.baidu.com")
}

// InitLogger 内置初始化
/*func InitLogger() {
	logger, _ = zap.NewProduction()
}*/

// InitLogger 自定义初始化
func InitLogger() {
	encoder := GetEncoder()
	//writeSyncer := GetWiryeSyncer()
	writeSyncer := getLogWriter()
	core := zapcore.NewCore(encoder, writeSyncer, zapcore.DebugLevel)
	logger = zap.New(core, zap.AddCaller()) // zap.AddCaller() 记录在哪一行调用logger.info 等信息
	sugaredLogger = logger.Sugar()
}

// GetEncoder 内置和自定义初始化encoder
func GetEncoder() zapcore.Encoder {
	//return zapcore.NewJSONEncoder(zap.NewProductionEncoderConfig())// 内置初始化
	encoder := zapcore.EncoderConfig{ // 自定义初始化
		TimeKey:        "ts",
		LevelKey:       "level",
		NameKey:        "logger",
		CallerKey:      "caller",
		FunctionKey:    zapcore.OmitKey,
		MessageKey:     "msg",
		StacktraceKey:  "stacktrace",
		LineEnding:     zapcore.DefaultLineEnding,
		EncodeLevel:    zapcore.LowercaseLevelEncoder,
		EncodeTime:     zapcore.ISO8601TimeEncoder, // 改变了时间戳 "2023-12-04T20:47:11.256+0800" 同样可以自定义格式
		EncodeDuration: zapcore.SecondsDurationEncoder,
		EncodeCaller:   zapcore.ShortCallerEncoder,
	}
	return zapcore.NewJSONEncoder(encoder)
	// return zapcore.NewConsoleEncoder(zap.NewProductionEncoderConfig()) // 控制台
}

// GetWiryeSyncer 不使用日志切割
/*func GetWiryeSyncer() zapcore.WriteSyncer {
	//file, _ := os.Create("./text.log")
	file, _ := os.OpenFile("./text.log", os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0744)
	return zapcore.WriteSyncer(file)
}*/
//使用Lumberjack进行日志切割归档
func getLogWriter() zapcore.WriteSyncer {
	lumberJackLogger := &lumberjack.Logger{
		Filename:   "./test.log",
		MaxSize:    200, // 单位M
		MaxBackups: 2,   //备份
		MaxAge:     7,   //备份天数
		Compress:   false,
	}
	return zapcore.AddSync(lumberJackLogger)
}

// 调用http方法
func simpleHttpGet(url string) {
	resp, err := http.Get(url)
	if err != nil {
		logger.Error(
			"Error fetching url..",
			zap.String("url", url),
			zap.Error(err))
	} else {
		logger.Info("Success..",
			zap.String("statusCode", resp.Status),
			zap.String("url", url))
		// 成功之后应该释放
		resp.Body.Close()
	}
}

