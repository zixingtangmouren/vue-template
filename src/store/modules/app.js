/**
 * @Author: tangzhicheng
 * @Date: 2021-03-23 17:24:05
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-23 20:33:18
 * @Description: file content
 */

export const appMutations = {
  STRAT_REQUEST: 'STRAT_REQUEST',
  END_REQUEST: 'END_REQUEST'
}

export const appGetter = {
  GET_LODING: 'GET_LODING'
}

const appModule = {
  state: () => ({
    loading: false,
    requestCount: 0
  }),

  getters: {
    [appGetter.GET_LODING] (state) {
      return state.loading
    }
  },

  mutations: {
    [appMutations.STRAT_REQUEST] (state) {
      state.requestCount += 1
      if (!state.loading) {
        state.loading = true
      }
    },

    [appMutations.END_REQUEST] (state) {
      state.requestCount -= 1
      if (state.requestCount <= 0 && state.loading) {
        state.loading = false
      }
    }
  }

}

export default appModule
