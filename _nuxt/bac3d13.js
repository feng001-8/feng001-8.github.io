(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{435:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"zap日志库的使用"}},[t._v("Zap日志库的使用")]),t._v(" "),e("h3",{attrs:{id:"zap-简介"}},[t._v("Zap 简介")]),t._v(" "),e("p",[t._v("在许多Go语言项目中，我们需要一个好的日志记录器能够提供下面这些功能：")]),t._v(" "),e("ul",[e("li",[t._v("能够将事件记录到文件中，而不是应用程序控制台。")]),t._v(" "),e("li",[t._v("日志切割-能够根据文件大小、时间或间隔等来切割日志文件。")]),t._v(" "),e("li",[t._v("支持不同的日志级别。例如INFO，DEBUG，ERROR等。")]),t._v(" "),e("li",[t._v("能够打印基本信息，如调用文件/函数名和行号，日志时间等。")])]),t._v(" "),e("p",[t._v("Go 中的快速、结构化、分级日志记录。")]),t._v(" "),e("h3",{attrs:{id:"安装"}},[t._v("安装")]),t._v(" "),e("p",[e("code",{pre:!0},[t._v("go get -u go.uber.org/zap")])]),t._v(" "),e("h3",{attrs:{id:"性能"}},[t._v("性能")]),t._v(" "),e("p",[t._v("Zap提供了两种类型的日志记录器—"),e("code",{pre:!0},[t._v("Sugared Logger")]),t._v("和"),e("code",{pre:!0},[t._v("Logger")]),t._v("。")]),t._v(" "),e("p",[t._v("在性能很好但不是很关键的上下文中，使用"),e("code",{pre:!0},[t._v("SugaredLogger")]),t._v("。它比其他结构化日志记录包快4-10倍，并且支持结构化和printf风格的日志记录。")]),t._v(" "),e("p",[t._v("在每一微秒和每一次内存分配都很重要的上下文中，使用"),e("code",{pre:!0},[t._v("Logger")]),t._v("。它甚至比"),e("code",{pre:!0},[t._v("SugaredLogger")]),t._v("更快，内存分配次数也更少，但它只支持强类型的结构化日志记录。")]),t._v(" "),e("h3",{attrs:{id:"使用"}},[t._v("使用")]),t._v(" "),e("pre",{staticClass:"language-go"},[e("code",{pre:!0,attrs:{class:"language-go"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.uber.org/zap"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"go.uber.org/zap/zapcore"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gopkg.in/natefinch/lumberjack.v2"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个全局变量之后被初始化")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" logger "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("zap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sugaredLogger "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("zap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SugaredLogger\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("InitLogger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("simpleHttpGet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// InitLogger 内置初始化")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*func InitLogger() {\n\tlogger, _ = zap.NewProduction()\n}*/")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// InitLogger 自定义初始化")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("InitLogger")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tencoder "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetEncoder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//writeSyncer := GetWiryeSyncer()")]),t._v("\n\twriteSyncer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogWriter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tcore "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewCore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" writeSyncer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DebugLevel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tlogger "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddCaller")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// zap.AddCaller() 记录在哪一行调用logger.info 等信息")]),t._v("\n\tsugaredLogger "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sugar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GetEncoder 内置和自定义初始化encoder")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetEncoder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Encoder "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//return zapcore.NewJSONEncoder(zap.NewProductionEncoderConfig())// 内置初始化")]),t._v("\n\tencoder "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EncoderConfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义初始化")]),t._v("\n\t\tTimeKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tLevelKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"level"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tNameKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logger"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tCallerKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"caller"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tFunctionKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OmitKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tMessageKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"msg"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tStacktraceKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stacktrace"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tLineEnding"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultLineEnding"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tEncodeLevel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LowercaseLevelEncoder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tEncodeTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ISO8601TimeEncoder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 改变了时间戳 "2023-12-04T20:47:11.256+0800" 同样可以自定义格式')]),t._v("\n\t\tEncodeDuration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SecondsDurationEncoder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tEncodeCaller"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ShortCallerEncoder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewJSONEncoder")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoder"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return zapcore.NewConsoleEncoder(zap.NewProductionEncoderConfig()) // 控制台")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GetWiryeSyncer 不使用日志切割")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*func GetWiryeSyncer() zapcore.WriteSyncer {\n\t//file, _ := os.Create("./text.log")\n\tfile, _ := os.OpenFile("./text.log", os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0744)\n\treturn zapcore.WriteSyncer(file)\n}*/')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用Lumberjack进行日志切割归档")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogWriter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteSyncer "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlumberJackLogger "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lumberjack"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tFilename"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./test.log"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tMaxSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单位M")]),t._v("\n\t\tMaxBackups"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//备份")]),t._v("\n\t\tMaxAge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//备份天数")]),t._v("\n\t\tCompress"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" zapcore"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddSync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lumberJackLogger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用http方法")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("simpleHttpGet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tresp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlogger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error fetching url.."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tzap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tzap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlogger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Success.."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tzap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statusCode"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Status"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tzap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成功之后应该释放")]),t._v("\n\t\tresp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])}]};t.exports={attributes:{title:"Zap",description:"zap的使用"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);