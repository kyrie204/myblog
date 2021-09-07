(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{910:function(e,t,a){"use strict";a.r(t);var l=a(119),n=Object(l.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"key-到底有什么用啊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-到底有什么用啊"}},[e._v("#")]),e._v(" :key 到底有什么用啊")]),e._v(" "),a("p",[e._v("个人总结：Vue在为了节省DOM操作的性能，使用了重复策略。而在一个特别时，我们不需要重复策略，这时可以通过"),a("code",[e._v(":key")]),e._v("属性来指定不同的值，让它不执行重复策略，实现重新渲染")]),e._v(" "),a("h4",{attrs:{id:"条件渲染中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染中"}},[e._v("#")]),e._v(" 条件渲染中")]),e._v(" "),a("p",[e._v("Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果允许用户在不同的登录方式之间切换：\n例如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<template v-if="loginType === \'username\'">\n  <label>Username</label>\n  <input placeholder="Enter your username">\n</template>\n<template v-else>\n  <label>Email</label>\n  <input placeholder="Enter your email address">\n</template>\n')])])]),a("p",[e._v("那么在上面的代码中切换 loginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，"),a("code",[e._v("<input>")]),e._v(" 不会被替换掉——仅仅是替换了它的 "),a("code",[e._v("placeholder")]),e._v("这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<template v-if="loginType === \'username\'">\n  <label>Username</label>\n  <input placeholder="Enter your username" key="username-input">\n</template>\n<template v-else>\n  <label>Email</label>\n  <input placeholder="Enter your email address" key="email-input">\n</template>\n')])])]),a("p",[e._v("现在，每次切换时，输入框都将被重新渲染。注意，"),a("code",[e._v("<label>")]),e._v(" 元素仍然会被高效地复用，因为它们没有添加 key 属性")]),e._v(" "),a("h4",{attrs:{id:"v-for-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-for-中"}},[e._v("#")]),e._v(" V-for 中")]),e._v(" "),a("p",[e._v("当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。\n这个"),a("strong",[e._v("默认的模式是高效的")]),e._v("，但是"),a("strong",[e._v("只适用于不依赖子组件状态或临时 DOM 状态")]),e._v(" (例如：表单输入值) 的列表渲染输出。\n为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为"),a("strong",[e._v("每项提供一个唯一 key 属性")]),e._v("。理想的 key 值是每项"),a("strong",[e._v("都有的且唯一的id")]),e._v("。\n但它的工作方式类似于一个属性，所以需要用 v-bind 来绑定动态值 (在这里使用简写)：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<div v-for="item in items" :key="item.id">\n  \x3c!-- 内容 --\x3e\n</div>\n')])])]),a("p",[e._v("建议尽可能在使用 "),a("code",[e._v("v-for")]),e._v(" 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。\n因为它是 Vue 识别节点的一个通用机制，key 并不与 "),a("code",[e._v("v-for")]),e._v(" 特别关联，key 还具有其他用途，将在以后的开发学习中慢慢接触。\n另注：:key要放在真正的html元素上，不能放在"),a("code",[e._v("<template></template>")]),e._v("\n参考: https://segmentfault.com/q/1010000009077632/a-1020000009077906"),a("br"),e._v("\nvuejs官网：https://cn.vuejs.org/v2/guide/list.html#key")])])}),[],!1,null,null,null);t.default=n.exports}}]);