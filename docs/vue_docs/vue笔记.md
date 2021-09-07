---
title: vue笔记(上)
date: 2018-04-21 19:01:17
tags: vue
categories: vue
---
- 先来个链接 [vue 中文网](https://cn.vuejs.org/)
- Vue.js 是一套构建用户界面(UI)的渐进式JavaScript框架
<!--more-->
### 什么是vue
简而言之：Vue.js是一个构建**数据驱动**的 web 界面的渐进式框架。Vue.js 的目标是通过尽可能简单的 API 实现响应的**数据绑定**和组合的**视图组件**。核心是一个响应的**数据绑定系统**。
它有以下几个特点：
>- 简洁、轻量、组件化、快速、数据驱动、双向数据绑定、指令
### 学习Vue要转化思想
>- 不要在想着怎么操作DOM，而是想着如何操作数据！(体现数据驱动)
### [配置安装脚手架](https://www.jianshu.com/p/1626b8643676)
```
1. npm install vue-cli -g  全局安装
2. vue init webpack (文件名:不能为中文)
3. cd (文件名)
4. npm install
5. npm run dev
```
配置完成之后进入目录就会看到下图结构
![](https://upload-images.jianshu.io/upload_images/3868852-dc56e16bc1ae6b13.png)
#### Vue实例
- 注意 1：先在data中声明数据，再使用数据
- 注意 2：可以通过 `vm.$data` 访问到data中的所有属性，或者 `vm.msg`
```
var vm = new Vue({
  data: {
    msg: '大家好，...'
  }
})
vm.$data.msg === vm.msg // true
```
#### 指令
- 解释：指令 (Directives) 是带有 `v-` 前缀的特殊属性
- 作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

##### v-text
- 解释：更新DOM对象的 textContent
```
<h1 v-text="msg"></h1>
```
##### v-html
- 解释：更新DOM对象的 innerHTML
```
<h1 v-html="msg"></h1>
```
##### v-bind
- 作用：当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM
- 语法：`v-bind:title="msg"`
- 简写: `title="msg"`
```
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```
##### v-on
- 作用：绑定事件
- 语法：`v-on:click="say"` or `v-on:click="say('参数', $event)"`
- 简写：`@click="say"`
- 说明：绑定的事件定义在`methods`
```
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>
<!-- 缩写 -->
<a @click="doSomething"></a>
```
##### v-model
- 作用：在表单元素上创建双向数据绑定
- 说明：监听用户的输入事件以更新数据
- 案例：计算器
```
<input type="text" v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```
##### v-for
- 作用：基于源数据多次渲染元素或模板块
```
<!-- 1 基础用法 -->
<div v-for="item in items">
  {{ item.text }}
</div>

<!-- item 为当前项，index 为索引 -->
<p v-for="(item, index) in list">{{item}} -- {{index}}</p>
<!-- item 为值，key 为键，index 为索引 -->
<p v-for="(item, key, index) in obj">{{item}} -- {{key}}</p>
<p v-for="item in 10">{{item}}</p>
```
###### key属性
- 推荐：使用 `v-for` 的时候提供 `key` 属性，以获得性能提升。
- 说明：使用 `key`，VUE会基于 `key` 的变化重新排列元素顺序，并且会移除 `key` 不存在的元素。
```
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```
##### 事件修饰符
- `.stop` 阻止冒泡，调用 `event.stopPropagation()`
- `.prevent` 阻止默认行为，调用 `event.preventDefault()`
- `.capture` 添加事件侦听器时使用事件捕获模式
- `.self` 只当事件在该元素本身（比如不是子元素）触发时，才会触发事件
- `.once` 事件只触发一次



