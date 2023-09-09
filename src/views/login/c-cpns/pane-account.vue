<template>
  <div class="pane-account">
    <el-form
      label-width="60px"
      :model="account"
      :rules="accountRules"
      status-icon
      ref="formRef"
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
import { reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import useLoginStore from '@/store/login/login'

// 1. 定义account
const account = reactive({
  name: '',
  password: ''
})

// 2.定义校验规则
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

// 3. 执行帐号的登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()

function loginAction() {
  // 检测form中帐号和密码是否验证成功?
  formRef.value?.validate((valid) => {
    if (valid) {
      // 验证成功
      // 1. 获取用户输入的账号和密码
      const name = account.name
      const password = account.password
      // 2. 向服务器发送网络请求(携带帐号和密码)
      loginStore.loginAccountAction({ name, password })
    } else {
      // 验证失败
      ElMessage.error('Oops, 请输入正确的格式后再操作~.')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.pane-account {
}
</style>
