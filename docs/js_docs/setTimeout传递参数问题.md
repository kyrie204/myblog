---
title: setTimeout传递参数问题
date: 2018-03-14 19:01:17
tags: js
categories: javaScript
---
## setTimeout传参数问题 
无论是`window.setTimeout`还是`window.setInterval`，在使用函数名作为调用句柄时都不能带参数，而在 许多场合必须要带参数，这就需要想方法解决。例如对于函数`hello(_name)`，它用于针对用户名显示欢迎信息：
<!--more-->
```
var userName="jack"; 
//根据用户名显示欢迎信息 
function hello(_name){ 
    alert("hello,"+_name); 
} 
```

这时，如果企图使用以下语句来使`hello`函数延迟3秒执行是不可行的：
```
window.setTimeout(hello(userName),3000); 
```
这将使hello函数立即执行，并将返回值作为调用句柄传递给`setTimeout`函数，其结果并不是程序需要的 。而使用字符串形式可以达到想要的结果：
```
window.setTimeout("hello(userName)",3000); 
```
这里的字符串是一段JavaScript代码，其中的`userName`表示的是变量。但这种写法不够直观，而且有些 场合必须使用函数名，并且所传的变量**必须为全局变量，不能传递局变量** 
下面用一个小技巧来实现带参数函数的调用： 
```
<script language="JavaScript" type="text/javascript"> 
<!-- 
var userName="jack"; 
//根据用户名显示欢迎信息 
function hello(_name){ 
       alert("hello,"+_name); 
} 
//创建一个函数，用于返回一个无参数函数 
function _hello(_name){ 
       return function(){ 
             hello(_name); 
       } 
} 
window.setTimeout(_hello(userName),3000); 
//--> 
</script> 
```
**此技巧，不管是全局变量，还是局部变量都可以传递**
这里定义了一个函数`_hello`，用于接收一个参数，并返回一个不带参数的函数，在这个函数内部使用了 外部函数的参数，从而对其调用，不需要使用参数。在`window.setTimeout`函数中，使用`_hello (userName)`来返回一个不带参数的函数句柄，从而实现了参数传递的功能。
来自：http://www.cnblogs.com/chinahnzl/articles/612147.html


