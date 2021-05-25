<!--
 * @Author: tangzhicheng
 * @Date: 2021-03-30 14:37:32
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-31 14:45:08
 * @Description: file content
-->

<template>
  <div>
    <el-form :model="user">
      <el-form-item label="username"
                    label-width="130px">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="password"
                    label-width="130px">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item label="introduce"
                    label-width="130px">
        <el-input v-model="user.introduce"></el-input>
      </el-form-item>
      <el-form-item label="sex"
                    label-width="130px">
        <el-radio v-model="user.sex"
                  :label="0">男</el-radio>
        <el-radio v-model="user.sex"
                  :label="1">女</el-radio>
      </el-form-item>
      <el-form-item label="qq_number"
                    label-width="130px">
        <el-input v-model="user.qq_number"></el-input>
      </el-form-item>
      <el-form-item label="wx_number"
                    label-width="130px">
        <el-input v-model="user.wx_number"></el-input>
      </el-form-item>
      <el-form-item label="borthday"
                    label-width="130px">
        <el-date-picker v-model="user.borthday"
                        type="date"
                        placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="address"
                    label-width="130px">
        <el-cascader v-model="user.address"
                     :props="props"
                     :getCheckedNodes="getCheckedNodes"></el-cascader>
      </el-form-item>
      <el-form-item label="music-label"
                    label-width="130px">
        <el-input v-model="musicLabel"></el-input>
        <el-button @click="addLabel">添加</el-button>
      </el-form-item>
      <el-form-item label="muisc_labels">
        <el-tag v-for="label in user.muisc_labels"
                :key="label"
                closable
                style="margin-right:15px">{{ label }}</el-tag>
      </el-form-item>
    </el-form>
    <el-button @click="register">register</el-button>
  </div>
</template>

<script>
import AddressApi from '../api/address'
import UserApi from '../api/user'

export default {
  name: 'Register',
  components: {},
  data() {
    return {
      musicLabel: '',
      user: {
        username: '',
        password: '',
        sex: 0,
        qq_number: '',
        wx_number: '',
        address: [],
        borthday: new Date(),
        introduce: '',
        muisc_labels: []
      },
      props: {
        lazy: true,
        label: 'name',
        value: 'code',
        lazyLoad(node, resolve) {
          const { level, data } = node
          let type
          let parent_code

          switch (level) {
            case 1:
              type = 'citys'
              parent_code = data.code
              break
            case 2:
              type = 'areas'
              parent_code = data.code
              break
            case 0:
              type = 'provinces'
              break
          }

          AddressApi.getAddressList({ type, parent_code }).then(res =>
            resolve(
              res.map(it => ({
                ...it,
                leaf: level > 1
              }))
            )
          )
        }
      }
    }
  },
  methods: {
    register() {
      console.log(this.user)
      UserApi.register(this.user)
    },
    addLabel() {
      this.user.muisc_labels.push(this.musicLabel)
      this.musicLabel = ''
    },
    getCheckedNodes(node) {
      console.log(node)
    }
  }
}
</script>

<style lang='less' scoped>
</style>
