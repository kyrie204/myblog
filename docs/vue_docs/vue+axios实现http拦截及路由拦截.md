---
title: Vue+axios 实现http拦截及路由拦截 
date: 2018-04-10 14:01:17
tags: [vue,"跨域"]
categories: vue
---

每个前端对于Vue都不会陌生,Vue框架是如今最流行的前端框架之一,其势头直追react.最近我用vue做了一个项目,下面便是我从中取得的一点收获.
基于现在用vue+webpack搭建项目的文档已经有很多了,我就不再累述了.
技术栈 
vue2.0
vue-router
axios
<!--more-->
拦截器 
*  首先我们要明白设置拦截器的目的是什么,当我们需要统一处理http请求和响应时我们通过设置拦截器处理方便很多.

这个项目我引入了element ui框架,所以我是结合element中loading和message组件来处理的[组件文档](http://element.eleme.io/#/zh-CN/component/loading#loading-jia-zai).我们可以单独建立一个http的js文件处理axios,再到main.js中引入. 
```javaScript
import axios from 'axios'; // 引入axios
import router from '../router';
import store from './../vuex/store'
import qs from 'qs'; // 引入qs模块，用来序列化post类型的数据
import {
  Toast
} from 'vant';

// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = '';
// }


// 请求超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    // const token = store.state.token;        
    // token && (config.headers.Authorization = token);  
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0,
        className: 'loading'
      }) 
    if (router.history.current.name != 'login') {
      // config.headers['patient_token'] = sessionStorage.getItem('patient_token') || '';
      config.headers['patient_token'] = store.state.patient_token || '';
    }

    return config;
  },
  error => {
    return Promise.error(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
    // 否则的话抛出错误
    Toast.clear()
    if (response.status === 200) {
      if (response.data.status != '0') {
        Toast({
          message: response.data.msg||'请求失败',
          duration: 1500,
          forbidClick: true
        });
        return Promise.reject(response);
      }
      if (router.history.current.name == 'login') {
        // sessionStorage.setItem("patient_token", response.headers.patient_token);
        store.commit('settoken', response.headers.patient_token)
      }
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    Toast.clear()
    // if (error.response.status) {
      Toast({
        message: '请求失败',
        duration: 1500,
        forbidClick: true
      });
      return Promise.reject(error.response);
    // }
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err)
    })
  });
}


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, JSON.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err)
      })
  });
}

```
这样我们就统一处理了http请求和响应的拦截.当然我们可以根据具体的业务要求更改拦截中的处理. 


