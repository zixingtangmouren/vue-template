/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 23:53:58
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-02 11:52:06
 * @Description: file content
 */

import { requets } from '../../http'

const UserApi = {
  login: (data) => requets({
    method: 'POST',
    url: '/users/login',
    data,
    getData: true
  }),
  getUserInfo: () => requets({
    method: 'GET',
    url: '/users/userInfo',
    getData: true
  }),
  register: (data) => requets({
    method: 'POST',
    url: '/users/register',
    data
  })
}

export default UserApi
