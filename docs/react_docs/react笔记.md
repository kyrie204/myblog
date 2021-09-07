---
title: react入门
date: 2018-05-14 19:01:17
tags: react
categories: react
---
**目前是处于刚学习react阶段，暂时整理如下资料，后续会继续修改和更新**
<!--more-->
### 认识React
>- 声明式设计 −React采用声明范式，可以轻松描述应用。
>- 高效 −React采用虚拟DOM.
>- 灵活 −React可以与已知的库或框架很好地配合。
>- JSX − JSX 是 JavaScript 语法的扩展。
>- 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
>- 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。
### 快速构建 React 开发环境
安装`create-react-app`的方式也非常简单，可以直接使用npm命令进行全局安装。
```javascript
npm install -g create-react-app
create-react-app my-app
cd my-app/
npm start
```
执行完上述命令之后，你可以直接打开`http://localhost:3000`，即可以看到你React APP的运行效果。此时也是处于开发模式下，如果你要进行发布，则使用`npm run build`进行编译。
如果是使用`npm start`来启动配置，那么自动会进入开发模式，此时热替换是处于自动激活状态，你也可以实时地在界面或者命令行中看到错误提示
如果使用`npm run build`来编译得到生产环境，此时代码会被编译到build目录下，此时会自动将整个应用打包发布，它会自动使用`Webpack`控件进行优化与压缩
### React JSX
React 使用 JSX 来替代常规的 JavaScript。
JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。
我们不需要一定使用 JSX，但它有以下优点：
>- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
>- 它是类型安全的，在编译过程中就能发现错误。
>- 使用 JSX 编写模板更加简单快速。
为什么引用jsx语法？
>- 解决了创建虚拟dom成本过大的问题
什么是jsx语法？
>- 简单地说，就是jsx语法让我们可以再js中写xhtml
### 组件
#### 组件是做什么的？
如果一个虚拟dom复用多次的时候，通常我们将它封装在一个组件当中，通常用组件封装一组虚拟dom，这一组虚拟dom通常称他为虚拟dom树。
#### 创建组件
React推出后，出于不同的原因先后出现三种定义react组件的方式，殊途同归；具体的三种方式：
>- 函数式定义的**无状态**组件
>- es5原生方式`React.createClass`定义的组件
>- es6形式的`extends React.Component`定义的组件

现在主要采用`React.Component`是以ES6的形式来创建react的组件的，是React目前极为推荐的创建有状态组件的方式，相对于 `React.createClass`可以更好实现代码复用，创建代码如下：
```javascript
import React,{ Component } from "react";

class Commentlist extends Component{
    render(){
        return(
            <div>
            </div>
        ) 
    }
}
export default Commentlist;
```
那么，组件创建完成之后，我们整理一下组件的属性
##### props属性
props属性是什么？
>- 和html给标签添加一个类一样，对于完全一致的统一组件他们暂时的样式是完全一致的，给其中一个添加一些属性，此时这个组件展示的结果就可能会不同，所以react提出了组件属性的概念。
如何添加props属性？
>- 在jsx中为组件添加属性跟html中添加属性的方法是一模一样的，只不过react组件可以执行插值(就是可以将js中数据添加到组件中)
##### state属性
state属性是什么？
>- 组件内部通常会维护一个状态，这个属性就是state，和props一样，我们都可以更改他是我们说props是在组建创建是传递的属性值不同而决定的，因此以后通常是更改不了的子组件）state通常是在产生交互时候改变的，一次她的改变永远伴随着一个交互state，props的改变都会执行一次render方法来重新渲染组件，组件是否更改是由虚拟d没有改变决定，如果虚拟dom改变了组件就会渲染。
##### state与props的区别
**state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。**
##### 正确修改state
直接修改state，组件并不会重新重发render。例如：
```javascript
// 错误
this.state.title = 'React';
```
正确的修改方式是使用setState():
```javascript
this.setState({title: 'React'});
```
##### State 的更新是异步的
调用setState，组件的state并不会立即改变，setState只是把要修改的状态放入一个队列中，React会优化真正的执行时机，并且React会出于性能原因，可能会将多次setState的状态修改合并成一次状态修改。所以不要依赖当前的State，计算下个State。当真正执行状态修改时，依赖的this.state并不能保证是最新的State，因为React会把多次State的修改合并成一次，这时，this.state将还是这几次State修改前的State。另外需要注意的事，同样不能依赖当前的Props计算下个状态，因为Props一般也是从父组件的State中获取，依然无法确定在组件状态更新时的值。
#### React组件生命周期小结
这几个生命周期相关的函数有：
- 构造函数，在创建组件的时候调用一次。
```javascript
constructor(props, context)
```
- 在组件挂载之前调用一次。如果在这个函数里面调用setState，本次的render函数可以看到更新后的state，并且只渲染一次。
```javascript
void componentWillMount()
```
- 在组件挂载之后调用一次。这个时候，子主键也都挂载好了，可以在这里使用refs。
```javascript
void componentDidMount()
```
- props是父组件传递给子组件的。父组件发生render的时候子组件就会调用componentWillReceiveProps（不管props有没有更新，也不管父子组件之间有没有数据交换）。
```javascript
void componentWillReceiveProps(nextProps)
```
- 组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。默认返回true，需要重新render。在比较复杂的应用里，有一些数据的改变并不影响界面展示，可以在这里做判断，优化渲染效率。
```javascript
bool shouldComponentUpdate(nextProps, nextState)
```
- shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpdate会被调用。
```
void componentWillUpdate(nextProps, nextState)
```
- 除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate。
```javascript
void componentDidUpdate()
```
**componentWillMount、componentDidMount和componentWillUpdate、componentDidUpdate可以对应起来。区别在于，前者只有在挂载的时候会被调用；而后者在以后的每次更新渲染之后都会被调用。**
- render是一个React组件所必不可少的核心函数（上面的其它函数都不是必须的）。记住，不要在render里面修改state。
```javascript
ReactElement render()
```
- 组件被卸载的时候调用。一般在componentDidMount里面注册的事件需要在这里删除。
```javascript
void componentWillUnmount()
```
#### 更新方式
在react中，触发render的有4条路径。
以下假设`shouldComponentUpdate`都是按照默认返回true的方式。
>- 首次渲染Initial Render
>- 调用this.setState （并不是一次setState会触发一次render，React可能会合并操作，再一次性进行render）
>- 父组件发生更新（一般就是props发生改变，但是就算props没有改变或者父子组件之间没有数据交换也会触发render）
>- 调用this.forceUpdate

下面是对React组件四条更新路径地总结：
![生命周期图片](https://upload-images.jianshu.io/upload_images/1814354-4bf62e54553a32b7.png?imageMogr2/auto-orient/)

最后来个测试例子：
```javascript
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        alert("Initial render");
        alert("constructor");
        this.state = {str: "hello"};
    }

    componentWillMount() {
        alert("componentWillMount");
    }

    componentDidMount() {
        alert("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        alert("componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() {
        alert("componentWillUpdate");
    }

    componentDidUpdate() {
        alert("componentDidUpdate");
    }

    componentWillUnmount() {
        alert("componentWillUnmount");
    }

    setTheState() {
        let s = "hello";
        if (this.state.str === s) {
            s = "HELLO";
        }
        this.setState({
            str: s
        });
    }

    forceItUpdate() {
        this.forceUpdate();
    }

    render() {
        alert("render");
        return(
            <div>
                <span>{"Props:"}<h2>{parseInt(this.props.num)}</h2></span>
                <br />
                <span>{"State:"}<h2>{this.state.str}</h2></span>
            </div>
        );
    }
}

class Container  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.random() * 100
        };
    }

    propsChange() {
        this.setState({
            num: Math.random() * 100
        });
    }

    setLifeCycleState() {
        this.refs.rLifeCycle.setTheState();
    }

    forceLifeCycleUpdate() {
        this.refs.rLifeCycle.forceItUpdate();
    }

    unmountLifeCycle() {
        // 这里卸载父组件也会导致卸载子组件
        React.unmountComponentAtNode(document.getElementById("container"));
    }

    parentForceUpdate() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.propsChange.bind(this)}>propsChange</a>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.setLifeCycleState.bind(this)}>setState</a>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</a>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.unmountLifeCycle.bind(this)}>unmount</a>
                <a href="javascript:;" className="weui_btn weui_btn_primary" onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</a>
                <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
            </div>
        );
    }
}

ReactDom.render(
    <Container></Container>,
    document.getElementById('container')
);
```


