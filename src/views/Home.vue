<!--
 * @Author: tangzhicheng
 * @Date: 2021-03-23 20:02:16
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-30 14:33:57
 * @Description: file content
-->
<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <el-form :model="model">
      <el-form-item label="user:"
                    label-width="120px">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="psd:"
                    label-width="120px">
        <el-input v-model="model.password"
                  type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="login">登录</el-button>
    <el-button @click="getUserInfo">getInfo</el-button>
  </div>
</template>

<script>
import { userMutations } from '../store/modules/user'

export default {
  name: 'Home',
  data() {
    return {
      model: {
        username: 'tang123456',
        password: 'tzc5566666'
      }
    }
  },
  methods: {
    async login() {
      const res = await this.$api.UserApi.login(this.model)
      this.$store.commit(userMutations.SET_TOKEN, res.token)
      this.$store.commit(userMutations.SET_ID, res.id)
    },
    async getUserInfo() {
      const res = await this.$api.UserApi.getUserInfo()
      console.log(res)
    }
  }
}
</script>
