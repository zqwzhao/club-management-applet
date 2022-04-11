import axios from "axios";

// 根据环境修改baseURL
// const baseURL = (() => {
//    let { VUE_APP_PLATFORM } = process.env;
//    if (VUE_APP_PLATFORM === "app-plus") {
//       return "http://120.55.80.30:8080";
//    } else {
//       return "/api";
//    }
// })();

// create an axios instance
const instance = axios.create({
   baseURL: "http://rcrxy.ren:8080", // url = base url + request url
   // withCredentials: true, // send cookies when cross-domain requests 注意：withCredentials和后端配置的cross跨域不可同时使用
   timeout: 10000, // request timeout
   // crossDomain: true,
});

let httpCode = {
   //这里我简单列出一些常见的http状态码信息，可以自己去调整配置
   400: "请求参数错误",
   401: "权限不足, 请重新登录",
   403: "服务器拒绝本次访问",
   404: "请求资源未找到",
   500: "内部服务器错误",
   501: "服务器不支持该请求中使用的方法",
   502: "网关错误",
   504: "网关超时",
};

/** 添加请求拦截器 **/
instance.interceptors.request.use(
   config => {
      config.headers["token"] = uni.getStorageSync("token") || "";
      // config.headers["Content-Type"] = "application/json;charset=utf-8";
      return config;
   },
   error => {
      // 对请求错误做些什么
      return Promise.reject(error);
   }
);

/** 添加响应拦截器  **/
instance.interceptors.response.use(
   response => {
      if (response.data.code !== 200) {
         uni.showModal({
            content: response.data.message,
            showCancel: false,
            success: res => {
               let { data } = response;
               if (data.resultCode === "403") {
                  uni.navigateTo({ url: "/pages/common/Login" });
               }
            },
         });
      }
      return Promise.resolve(response.data);
   },
   error => {
      if (error.response) {
         return Promise.reject(error);
      } else {
         console.log("请求超时, 请刷新重试");
         return Promise.reject(new Error("请求超时, 请刷新重试"));
      }
   }
);

axios.defaults.adapter = function (config) {
   return new Promise((resolve, reject) => {
      var settle = require("axios/lib/core/settle");
      var buildURL = require("axios/lib/helpers/buildURL");
      uni.request({
         method: config.method.toUpperCase(),
         url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
         header: config.headers,
         data: config.data,
         dataType: config.dataType,
         responseType: config.responseType,
         sslVerify: config.sslVerify,
         complete: function complete(response) {
            response = {
               data: response.data,
               status: response.statusCode,
               errMsg: response.errMsg,
               header: response.header,
               config: config,
            };

            settle(resolve, reject, response);
         },
      });
   });
};

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
   return new Promise((resolve, reject) => {
      instance({
         method: "get",
         url,
         params,
         ...config,
      })
         .then(response => {
            resolve(response);
         })
         .catch(error => {
            reject(error);
         });
   });
};

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
   return new Promise((resolve, reject) => {
      instance({
         method: "post",
         url,
         data,
         ...config,
      })
         .then(response => {
            resolve(response);
         })
         .catch(error => {
            reject(error);
         });
   });
};
