/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 17:24:05
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-25 19:28:19
 * @Description: file content
 */

// import UserApi from '../../api/'

// console.log(UserApi)

export const userMutations = {
  SET_TOKEN: 'SET_TOKEN',
  SET_ID: 'SET_ID'
}

export const userGetter = {
  GET_TOKEN: 'GET_TOKEN'
}

export const userAction = {
  Login: 'Login'
}

const userModule = {
  state: () => ({
    id: '',
    token: localStorage.getItem('access_token') || ''
  }),

  getters: {
    [userGetter.GET_TOKEN](state) {
      return state.token
    }
  },

  mutations: {
    [userMutations.SET_TOKEN](state, payload) {
      state.token = payload
      localStorage.setItem('access_token', state.token)
    },
    [userMutations.SET_ID](state, payload) {
      state.id = payload
    }
  },

  actions: {
    async [userAction.Login]({ commit }) {
      // const res = await UserApi.login(data)
      // console.log(res)
      commit(userMutations.SET_TOKEN, 'ssss')
    }
  }

}

export default userModule
