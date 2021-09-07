(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{898:function(t,e,n){"use strict";n.r(e);var a=n(119),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h4",{attrs:{id:"什么是深拷贝、浅拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是深拷贝、浅拷贝"}},[t._v("#")]),t._v(" 什么是深拷贝、浅拷贝")]),t._v(" "),n("ul",[n("li",[t._v("浅拷贝：拷贝的值为引用而非其真实值\njs中会为引用类型分配在堆内，而我们声明的变量并不是保存着这个对象，而是保存着对象的引用！\n因此，传入参数时，也是按值传递的。但是，这个值是引用，所以修改同一引用会导致对象的直接变化。\n")]),t._v(" "),n("li",[t._v("深拷贝：拷贝的值为真实值而非引用。当拷贝的元素是对象是，深拷贝相当于会重新创建一个对象，并对对   象的值一个一个复制过来，而不是仅仅获得该对象的引用值。")])]),t._v(" "),n("h4",{attrs:{id:"为什么要深拷贝呢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么要深拷贝呢"}},[t._v("#")]),t._v(" 为什么要深拷贝呢")]),t._v(" "),n("p",[t._v("显然，浅拷贝会带来一个很大的问题。就是，如果我复制的值是一个引用地址，那么我通过一个变量去修改这个对象，会导致所有该对象的引用都发生变化。")]),t._v(" "),n("h4",{attrs:{id:"实现深拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现深拷贝"}},[t._v("#")]),t._v(" 实现深拷贝")]),t._v(" "),n("p",[t._v("如何实现深拷贝呢，采用的就是递归的思想")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function deepClone(obj) {\n    var newObj = obj instanceof Array ? [] : {};\n    //obj属于基本数据类型,直接返回obj\n    if(typeof obj !== 'object') {\n        return obj;\n    } else {\n    //obj属于数组或对象，遍历它们\n        for(var i in obj) {\n            newObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]):obj[i]; \n        }\n    }\n    return newObj;\n}\n")])])]),n("p",[t._v("参考：https://blog.csdn.net/qq_31628337/article/details/71123754")])])}),[],!1,null,null,null);e.default=s.exports}}]);