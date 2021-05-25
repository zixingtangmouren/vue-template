/**
 * @Author: tangzhicheng
 * @Date: 2021-03-31 09:39:37
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-31 09:40:26
 * @Description: file content
 */

import { requets } from '../../http'

const AddressApi = {
  getAddressList: (data) => requets({
    method: 'GET',
    url: '/address/list',
    getData: true,
    data
  })
}

export default AddressApi
