---
title: css居中小技巧
date: 2018-03-15 09:56:41
tags: css
categories: css
---

在我们项目开发中，总会遇到许许多多的水平或者垂直居中问题，这是我在敲代码的时候总结的一些小技巧，以便自己后面的开发学习。
## 居中问题
如果是块级元素，我们可以给块级元素设置一个宽度，然后利用margin:0 auto对其进行水平居中，这算是比较常见的一种；如果是行内元素，可以直接使用text-align:center进行居中。
<!--more-->
另外一种用的方法就是绝对定位。通过父元素设置相对定位，子元素设置为绝对定位，然后对子元素进行left：0; top: 0; right: 0; bottom: 0; 接下来是最重要的一点就是 `margin:0 auto;`便可以通过这种方式实现居中。代码如下:
```css
<style>
    .center{
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        top:0;
        margin: auto auto;
    }
</style>
```
但是这样的方式在IE7下是不能生效的。那么用另一种方式实现居中
解决： 使用另一种方法，`top : 50%, left: 50%, transform: translate(-50%,-50%);` 成功的实现了兼容。
```css
<style>
    .center{
        position: absolute;
        background-color: #fff;
        border-radius: 20px;
        width: 300px;
        height: 350px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
</style>
```
还有一种就是利用的表格的属性进行居中。
## flex布局
最后这里要介绍的就是利用css3.0的样式，flex布局进行居中:传统的布局方式有三种，哪三种呢：那么分别就是display，position和float，传统的布局方式有个明显缺点，那就是垂直居中不易实现，所以我们就想到了弹性盒子，也就是flex布局，flex布局可以更好地实现响应式布局。
任何容器都可以使用flex布局，一旦父元素成为了flex布局，那么它的子元素也就自动成为了容器的成员，也就是flex项目。Flex容器默认存在2根轴线（水平主轴和垂直交叉轴）,布局就是根据这2根轴来排列项目显示的。
块级元素：display:flex;
内联元素：display:inlne-flex;
注意：使用了flex布局后，项目的float、clear、vertical-align都将失去效果。
### flex容器属性
总共有六个属性：
#### 1.flex-direction
设置主轴的方向，默认为水平，从左至右。它的值有四个：
```css
flex-direction: row | row-reverse | column | column-reverse;
```
#### 2.flex-wrap
设置项目是否换行排列。
nowrap（默认值）：不换行。
wrap：换行，第一行在上方。
wrap-reverse：换行，第一行在下方。
```css
flex-wrap: nowrap | wrap | wrap-reverse;
```
#### 3.justify-content
设置项目的水平对齐方式。
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```css
justify-content: flex-start | flex-end | center | space-between | space-around;
```
#### 4.align-items
设置项目垂直方向对齐方式。
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
```css
align-items: flex-start | flex-end | center | baseline | stretch;
```
#### 5.align-content
当项目定义了横竖2根轴的时候生效，相当于justify-content和align-items的简写。
#### 6.flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
```css
flex-flow: <flex-direction> || <flex-wrap>;
```
## flex项目属性
#### 1.order
```css
order: <integer>
```
定义项目的排列顺序，值越小越考前，默认为0。
#### 2.flex-grow
```css
flex-grow: <number>; 
```
定义项目的放大比例，默认为0（不放大）。
#### 3.flex-shrink
```css
flex-shrink: <number>; 
```
定义项目的缩小比例，默认为1，如果空间不足湘江将自动缩小。
#### 4.flex-basis
```css
flex-basis: <length> | auto;
```
定义项目主轴空间，相当于设置width，默认为auto。
#### 5.align-self
```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```
定义项目的对齐方式。可覆盖align-items。默认值：auto。
#### 6.flex
```css
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

