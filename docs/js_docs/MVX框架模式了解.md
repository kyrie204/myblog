---
title: MVX框架模式了解
date: 2018-04-01 10:01:17
tags: vue
---
#### MVX框架模式：MVC+MVP+MVVM
1.MVC:
> Model(模型)+View(视图)+controller(控制器)，主要是基于分层的目的，让彼此的职责分开。
      View通过Controller来和Model联系，Controller是View和Model的协调者，View和Model不直接联系，基本联系都是单向的。
        用户User通过控制器Controller来操作模板Model从而达到视图View的变化。
<!--more-->
2.MVP:
> 是从MVC模式演变而来的，都是通过Controller/Presenter负责逻辑的处理+Model提供数据+View负责显示。
      在MVP中，Presenter完全把View和Model进行了分离，主要的程序逻辑在Presenter里实现。
并且，Presenter和View是没有直接关联的，是通过定义好的接口进行交互，从而使得在变更View的时候可以保持Presenter不变。

3.MVVM：
> MVVM是把MVC里的Controller和MVP里的Presenter改成了ViewModel。Model+View+ViewModel。
       View的变化会自动更新到ViewModel,ViewModel的变化也会自动同步到View上显示。
     这种自动同步是因为ViewModel中的属性实现了Observer，当属性变更时都能触发对应的操作。


MVVM模式的框架有：AngularJS+Vue.js