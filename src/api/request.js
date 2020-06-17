import Qs from 'qs';
import axios from 'axios';
import {Message} from 'element-ui';
import {setToken} from 'service/token';

// 添加一个请求拦截器 （于transformRequest之前处理）
axios.interceptors.request.use(config => {
   return config;
}, error => {
   return Promise.reject(error);
});

// 添加一个返回拦截器 （于transformResponse之后处理）
axios.interceptors.response.use(response => {
   //token更新
   if (response && response.headers && response.headers.authorization) {
      setToken(response.headers.authorization, 1);
   }
   return response;
}, error => {
   return Promise.reject(error);
});

const request = {
   config: {
      headers: {
         'Content-Type': 'application/json;charset=UTF-8' // 'application/x-www-form-urlencoded' 'application/json;charset=UTF-8' 'multipart/form-data'
      },
      params: {},
      data: {},
      method: "GET",
      responseType: "json", //'json' 'blob'
      timeout: 60000,
      token: true, //是否需要带token
   },
   request(options = {}) {
      //根据method设置默认contentType
      if (!options.headers || (options.headers && !options.headers['Content-Type'])) {
         options.headers = options.headers || {};
         const method = options.method.toLowerCase();
         options.headers['Content-Type'] = 'application/json;charset=UTF-8';
      }
      options.method = options.method || this.config.method;
      options.responseType = options.responseType || this.config.responseType;
      options.token = options.token || this.config.token;
      options.data = options.data || this.config.data;
      options.params = options.params || this.config.params;

      //判断是否需要登录
      if (options.token) {
         const token = Cookies.get('token');
         if (token) {
            options.headers.Authorization = token;
         } else {
            //跳转到登录页
         }
      }

      //Content-Type判断
      const contentType = options.headers['Content-Type'];
      if (typeof contentType !== 'undefined') {
         if (~contentType.indexOf('json')) {
            // 类型 `application/json`
            // 服务器收到的raw body(原始数据) "{name:"jhon",sex:"man"}"（普通字符串）
            options.data = JSON.stringify(options.data);
         } else if (~contentType.indexOf('x-www-form-urlencoded')) {
            // 类型 `application/x-www-form-urlencoded`
            // 服务器收到的raw body(原始数据) name=homeway&key=nokey
            options.data = Qs.stringify(options.data);
         }
      }

      delete options.token;
      return axios(options).then(response => {
         const data = response.data;
         const message = data.message || '请求错误';
         console.log(data)
         if (data.code !== 10000) {
            if (data.code === 518) {
               //系统退出
               window.dispatchEvent(new CustomEvent('systemLogout'));
            } else if (response.config.responseType !== 'blob') {
               if (data.code == 500 || (data.code >= 5000 && data.code <= 6000)) {
                  this.errorMsg(message);
               }
            }
         }
         return response;
      }).catch(err => {
         return this.checkStatus(err)
      })
   },
   requestExport(options = {}) {
      //根据method设置默认contentType
      if (!options.headers || (options.headers && !options.headers['Content-Type'])) {
         options.headers = options.headers || {};
         const method = options.method.toLowerCase();
         options.headers['Content-Type'] = 'application/json;charset=UTF-8';
         // switch (method) {
         //    case 'get':
         //       options.headers['Content-Type'] = 'application/json;charset=UTF-8';
         //       break;
         //    case 'post':
         //       options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
         //       break;
         //    default:
         //       options.headers['Content-Type'] = 'application/json;charset=UTF-8';
         //       break;
         // }
      }
      options.method = options.method || this.config.method;
      options.responseType = options.responseType || this.config.responseType;
      options.token = options.token || this.config.token;
      options.data = options.data || this.config.data;
      options.params = options.params || this.config.params;
      options.responseType = "blob";

      //判断是否需要登录
      if (options.token) {
         const token = Cookies.get('token');
         if (token) {
            options.headers.Authorization = token;
         } else {
            //跳转到登录页
         }
      }

      //Content-Type判断
      const contentType = options.headers['Content-Type'];
      if (typeof contentType !== 'undefined') {
         if (~contentType.indexOf('json')) {
            // 类型 `application/json`
            // 服务器收到的raw body(原始数据) "{name:"jhon",sex:"man"}"（普通字符串）
            options.data = JSON.stringify(options.data);
         } else if (~contentType.indexOf('x-www-form-urlencoded')) {
            // 类型 `application/x-www-form-urlencoded`
            // 服务器收到的raw body(原始数据) name=homeway&key=nokey
            options.data = Qs.stringify(options.data);
         }
      }

      delete options.token;
      return axios(options).then(response => {
         return response.data;
      }).catch(err => {
         return this.checkStatus(err)
      })
   },
   get(url, data, options = {}) {
      options.url = url;
      options.params = data;
      options.method = 'GET';
      return this.request(options);
   },
   post(url, data, options = {}) {
      options.url = url;
      options.data = data;
      options.method = 'POST';
      return this.request(options);
   },
   checkStatus(response) {
      if (!response) return;
      let message = '请求错误';
      //http状态码判断
      switch (response.status) {
         case 400:
            message = '400: 错误请求';
            break;
         case 401:
            message = '401: 访问令牌无效或已过期';
            break;
         case 403:
            message = '403: 拒绝访问';
            break;
         case 404:
            message = '404：资源不存在';
            break;
         case 405:
            message = '405: 请求方法未允许';
            break;
         case 408:
            message = '408: 请求超时';
            break;
         case 500:
            message = '500：访问服务失败';
            break;
         case 501:
            message = '501：未实现';
            break;
         case 502:
            message = '502：无效网关';
            break;
         case 503:
            message = '503: 服务不可用';
            break;
      }

      this.errorMsg(message);
      return response;
   },
   errorMsg(message) {
      Message({
         type: 'error',
         message
      });
   }
};

export default request;
