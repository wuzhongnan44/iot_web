import request from 'api/request';
import {baseURL} from 'api/config';

/**
 * 产品列表显示
 * @param data
 */
export function index(data) {
   return request.post(`${baseURL}iot/product/list`, data);
}

/**
 * 产品删除显示
 * @param data
 */
export function deleted(id) {
   return request.post(`${baseURL}iot/product/delete/${id}`);
}

export function save(data,id) {
   console.log("=============",data)
   if (id)
      return request.post(`${baseURL}iot/product/update`, data);
   return request.post(`${baseURL}iot/product/add`, data);
}
