---
title: Snowflake
description: 雪花算法
---



## Snowflake

#### snowflake简介
****

 **Snowflake是一个Go包，提供**

* 一个非常简单的Twitter雪花生成器。
* 解析现有雪花ID的方法。
* 将雪花ID转换为多种其他数据类型并返回的方法。
* JSON Marshal/Unmarshal 函数可在 JSON API 中轻松使用雪花 ID。
* 单调时钟计算可防止时钟停止。

#### ID 格式

****

**默认情况下，ID 格式遵循原始 Twitter 雪花格式**。

- 整个 ID 是一个 63 位整数，存储在 int64 中
- 41 位用于存储毫秒精度的时间戳，使用自定义纪元。
- 10 位用于存储节点 ID - 范围从 0 到 1023。
- 12 位用于存储序列号 - 范围从 0 到 4095

#### 怎么运行的

****

每次生成一个 ID 时，它都会像这样工作。

- 使用 41 位 ID 存储毫秒精度的时间戳。
- 然后将 NodeID 添加到后续位中。
- 然后添加序列号，从 0 开始，并针对同一毫秒内生成的每个 ID 递增。如果您在同一毫秒内生成足够多的 ID，导致序列滚动或溢出，则生成函数将暂停，直到下一毫秒。

默认 Twitter 格式如下所示。

```
+--------------------------------------------------------------------------+
| 1 Bit Unused | 41 Bit Timestamp |  10 Bit NodeID  |   12 Bit Sequence ID |
+--------------------------------------------------------------------------+
```



使用默认设置，这允许每个节点 ID 每毫秒生成 4096 个唯一 ID。

#### 安装

>  go get github.com/bwmarrin/snowflake



#### 实例

```go
package snowflake

import (
	sf "github.com/bwmarrin/snowflake"
	"time"
)

var node *sf.Node

func Init(startTime string, machineID int64) (err error) {
	var st time.Time
	st, err = time.Parse("2006-01-02", startTime)
	if err != nil {
		return
	}
	sf.Epoch = st.UnixNano() / 1000000
	node, err = sf.NewNode(machineID)
	return err
}
func GenID() int64 {
	return node.Generate().Int64()
}
```

