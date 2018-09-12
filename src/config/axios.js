import axios from 'axios'
import {Message} from 'element-ui'
import {baseUrl} from "./env";

axios.interceptors.request.use(config=> {
  return config;
}, err=> {
  Message.error("请求超时!");
  return Promise.resolve(err);
})
axios.interceptors.response.use(data=> {
  if (data.status && data.status == 200 && data.data.status == 'error') {
    Message.error({message: data.data.msg});
    return;
  }
  return data;
}, err=> {
  if (err.response.status == 500) {
    Message.error(err.response.data.message);
  }else if (err.response.status == 504||err.response.status == 404) {
    Message.error("服务器被吃了⊙﹏⊙∥");
  } else if (err.response.status == 403) {
    Message.error("权限不足,请联系管理员!");
  }else {
    Message.error("未知错误!");
  }
  return Promise.resolve(err);
})

let base = baseUrl;

export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}


export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: `${base}${url}`
  });
}
