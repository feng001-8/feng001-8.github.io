---
title: Zap_Gin
description: Gin框架下的Zap的使用
---



## Gin框架下的zap的使用



### gin默认的中间件

```go
func main() {
	r := gin.Default()
	r.GET("/hello", func(c *gin.Context) {
		c.String("hello liwenzhou.com!")
	})
	r.Run(
}

```

接下来我们看一下`gin.Default()`的源码

```go
func Default() *Engine {
	debugPrintWARNINGDefault()
	engine := New()
	engine.Use(Logger(), Recovery())
	return engine
}
```

也就是我们在使用`gin.Default()`的同时是用到了gin框架内的两个默认中间件`Logger()`和`Recovery()`。

### 基于zap的中间件

我们可以模仿`Logger()`和`Recovery()`的实现，使用我们的日志库来接收gin框架默认输出的日志

### 实例


```go
package main

import (
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"gopkg.in/natefinch/lumberjack.v2"
	"net"
	"net/http"
	"net/http/httputil"
	"os"
	"runtime/debug"
	"strings"
	"time"
)

var logger *zap.Logger

func main() {
	InitLogger()
	// gin gin框架内的两个默认中间件Logger()和Recovery()。
	//r := gin.Default()
	r := gin.New()
	r.Use(GinLogger(logger), GinRecovery(logger, true))
	r.GET("/hello", func(c *gin.Context) {
		c.String(http.StatusOK, "hello word")
	})
	r.Run()
}
func InitLogger() {
	encoder := GetEncoder()
	//writeSyncer := GetWiryeSyncer()
	writeSyncer := getLogWriter()
	core := zapcore.NewCore(encoder, writeSyncer, zapcore.DebugLevel)
	logger = zap.New(core, zap.AddCaller()) // zap.AddCaller() 记录在哪一行调用logger.info 等信息
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

// GinLogger 接收gin框架默认的日志
func GinLogger(logger *zap.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		path := c.Request.URL.Path
		query := c.Request.URL.RawQuery
		c.Next()

		cost := time.Since(start)
		logger.Info(path,
			zap.Int("status", c.Writer.Status()),
			zap.String("method", c.Request.Method),
			zap.String("path", path),
			zap.String("query", query),
			zap.String("ip", c.ClientIP()),
			zap.String("user-agent", c.Request.UserAgent()),
			zap.String("errors", c.Errors.ByType(gin.ErrorTypePrivate).String()),
			zap.Duration("cost", cost),
		)
	}
}

// GinRecovery recover掉项目可能出现的panic
func GinRecovery(logger *zap.Logger, stack bool) gin.HandlerFunc {
	return func(c *gin.Context) {
		defer func() {
			if err := recover(); err != nil {
				// Check for a broken connection, as it is not really a
				// condition that warrants a panic stack trace.
				var brokenPipe bool
				if ne, ok := err.(*net.OpError); ok {
					if se, ok := ne.Err.(*os.SyscallError); ok {
						if strings.Contains(strings.ToLower(se.Error()), "broken pipe") || strings.Contains(strings.ToLower(se.Error()), "connection reset by peer") {
							brokenPipe = true
						}
					}
				}

				httpRequest, _ := httputil.DumpRequest(c.Request, false)
				if brokenPipe {
					logger.Error(c.Request.URL.Path,
						zap.Any("error", err),
						zap.String("request", string(httpRequest)),
					)
					// If the connection is dead, we can't write a status to it.
					c.Error(err.(error)) // nolint: errcheck
					c.Abort()
					return
				}
	
				if stack {
					logger.Error("[Recovery from panic]",
						zap.Any("error", err),
						zap.String("request", string(httpRequest)),
						zap.String("stack", string(debug.Stack())),
					)
				} else {
					logger.Error("[Recovery from panic]",
						zap.Any("error", err),
						zap.String("request", string(httpRequest)),
					)
				}
				c.AbortWithStatus(http.StatusInternalServerError)
			}
		}()
		c.Next()
	}
}


