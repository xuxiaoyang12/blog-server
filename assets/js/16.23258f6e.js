(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{438:function(s,t,a){"use strict";a.r(t);var n=a(65),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("笔记")]),s._v(" "),a("p",[s._v("[toc]")]),s._v(" "),a("h1",{attrs:{id:"程序员的数学课"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序员的数学课"}},[s._v("#")]),s._v(" 程序员的数学课")]),s._v(" "),a("h2",{attrs:{id:"怎么学好数学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么学好数学"}},[s._v("#")]),s._v(" 怎么学好数学")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你只想当一个普通的程序员，那数学对你来说不重要，如果你想当一个顶级的程序员，梦想改变世界，那数学对你来说就很重要了")])]),s._v(" "),a("h3",{attrs:{id:"刘浩说-怎么学好数学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刘浩说-怎么学好数学"}},[s._v("#")]),s._v(" 刘浩说：“怎么学好数学？”")]),s._v(" "),a("p",[s._v("1、学数学就像学习一门新的技术")]),s._v(" "),a("p",[s._v("学习一门新的技术要三个阶段：")]),s._v(" "),a("ol",[a("li",[s._v("怎么使用？")]),s._v(" "),a("li",[s._v("如何实现？原理是什么？")]),s._v(" "),a("li",[s._v("为什么要这样实现？")])]),s._v(" "),a("h3",{attrs:{id:"徐文浩说-先广度-再深度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#徐文浩说-先广度-再深度"}},[s._v("#")]),s._v(" 徐文浩说：“先广度，再深度”")]),s._v(" "),a("h2",{attrs:{id:"什么是二进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是二进制"}},[s._v("#")]),s._v(" 什么是二进制")]),s._v(" "),a("ol",[a("li",[s._v("左移位  移动一位增大一倍")]),s._v(" "),a("li",[s._v("右移位 移动一位缩小一倍")])]),s._v(" "),a("h2",{attrs:{id:"余数-取余操作本身就是个哈希函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#余数-取余操作本身就是个哈希函数"}},[s._v("#")]),s._v(" 余数：取余操作本身就是个哈希函数")]),s._v(" "),a("p",[s._v("通过取余数可以将任意数值，转换为有限范围内的的一个数值，然后根据这个新的数值来确定数据存在何处.")]),s._v(" "),a("p",[s._v("思考下"),a("code",[s._v("Java")]),s._v("中的"),a("code",[s._v("HashMap")]),s._v("的"),a("code",[s._v("key")]),s._v("键值的设计思想")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 代码如下：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1、首先获取到当前key的hashCode，hashCode为一串数字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2、hashCode往右移动16位 相当于截取低位")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//\t为什么要右移动16位？")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//\ta. 保证高16位也参与计算， 我们知道int占4字节 32位，16是中位数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//\tb. 因为大部分情况下，都是低16位参与运算，高16位可以减少hash冲突")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//\tc. 右移动16位，高16位也能参与运算")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3、再取异或运算  相同时为0 不同时为1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//\t如果高16位都为0，0和hashCode异或运算，还是hashCode本身")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hashCode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);