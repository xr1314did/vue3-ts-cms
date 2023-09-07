<template>
  <div class="pane-account">
    <el-form
      label-width="60px"
      :model="account"
      :rules="accountRules"
      status-icon
    >
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'

const account = reactive({
  name: '',
  password: ''
})

// 定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入帐号信息~', trigger: 'blur' },
    {
      pattern: /^[0-9a-z]{6,20}$/,
      message: '必须6~20数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码信息', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须3位以上数字或者字母组成',
      trigger: 'blur'
    }
  ]
}
</script>

<style lang="less" scoped>
.pane-account {
}
</style>
