/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 19:06:19
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-23 20:39:27
 * @Description: file content
 */

import { AxiosRequestConfig } from "axios";

export interface RequestOptions {
  url: string
  method: ('GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH')
  data?: object
  config?: AxiosRequestConfig
  load?: boolean
  catchError?: boolean
  catchUnxpected?: boolean
  getData?: boolean
}


export interface ResData {
  code: number
  data: any
  msg: string
}