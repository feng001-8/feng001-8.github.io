(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{446:function(t,n){const e={render:function(){var t=this;t.$createElement;return t._self._c,t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"frontmatter-markdown"},[e("h2",{attrs:{id:"snowflake"}},[t._v("Snowflake")]),t._v(" "),e("h4",{attrs:{id:"snowflake简介"}},[t._v("snowflake简介")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("Snowflake是一个Go包，提供")])]),t._v(" "),e("ul",[e("li",[t._v("一个非常简单的Twitter雪花生成器。")]),t._v(" "),e("li",[t._v("解析现有雪花ID的方法。")]),t._v(" "),e("li",[t._v("将雪花ID转换为多种其他数据类型并返回的方法。")]),t._v(" "),e("li",[t._v("JSON Marshal/Unmarshal 函数可在 JSON API 中轻松使用雪花 ID。")]),t._v(" "),e("li",[t._v("单调时钟计算可防止时钟停止。")])]),t._v(" "),e("h4",{attrs:{id:"id-格式"}},[t._v("ID 格式")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("默认情况下，ID 格式遵循原始 Twitter 雪花格式")]),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("整个 ID 是一个 63 位整数，存储在 int64 中")]),t._v(" "),e("li",[t._v("41 位用于存储毫秒精度的时间戳，使用自定义纪元。")]),t._v(" "),e("li",[t._v("10 位用于存储节点 ID - 范围从 0 到 1023。")]),t._v(" "),e("li",[t._v("12 位用于存储序列号 - 范围从 0 到 4095")])]),t._v(" "),e("h4",{attrs:{id:"怎么运行的"}},[t._v("怎么运行的")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("每次生成一个 ID 时，它都会像这样工作。")]),t._v(" "),e("ul",[e("li",[t._v("使用 41 位 ID 存储毫秒精度的时间戳。")]),t._v(" "),e("li",[t._v("然后将 NodeID 添加到后续位中。")]),t._v(" "),e("li",[t._v("然后添加序列号，从 0 开始，并针对同一毫秒内生成的每个 ID 递增。如果您在同一毫秒内生成足够多的 ID，导致序列滚动或溢出，则生成函数将暂停，直到下一毫秒。")])]),t._v(" "),e("p",[t._v("默认 Twitter 格式如下所示。")]),t._v(" "),e("pre",{staticClass:"language-bash"},[e("code",{pre:!0,attrs:{class:"language-bash"}},[t._v("+--------------------------------------------------------------------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" Bit Unused "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),t._v(" Bit Timestamp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" Bit NodeID  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" Bit Sequence ID "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+--------------------------------------------------------------------------+\n")])]),t._v(" "),e("p",[t._v("使用默认设置，这允许每个节点 ID 每毫秒生成 4096 个唯一 ID。")]),t._v(" "),e("h4",{attrs:{id:"安装"}},[t._v("安装")]),t._v(" "),e("blockquote",[e("p",[t._v("go get github.com/bwmarrin/snowflake")])]),t._v(" "),e("h4",{attrs:{id:"实例"}},[t._v("实例")]),t._v(" "),e("pre",{staticClass:"language-go"},[e("code",{pre:!0,attrs:{class:"language-go"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" snowflake\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tsf "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/bwmarrin/snowflake"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" node "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("sf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Node\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("startTime "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" machineID "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" st time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Time\n\tst"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2006-01-02"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tsf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Epoch "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" st"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnixNano")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),t._v("\n\tnode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewNode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("machineID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GenID")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Generate")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Int64")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}]};t.exports={attributes:{title:"Snowflake",description:"雪花算法"},vue:{render:e.render,staticRenderFns:e.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")},created:function(){this.templateRender=e.render,this.$options.staticRenderFns=e.staticRenderFns}}}}}}]);