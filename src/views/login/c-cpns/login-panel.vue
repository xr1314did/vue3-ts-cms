<template>
  <div class="login-panel">
    <!-- 顶部的标题 -->
    <h1 class="title">后台管理系统</h1>
    <!-- 中间的tabs切换 -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="帐号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <PaneAccount />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <PanePhone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginBtnClick"
    >
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

const activeName = ref('account')
const isRemPwd = ref(true)

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    console.log('用户在进行账号登录')
  } else {
    console.log('用户在进行手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .label {
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      margin-left: 5px;
    }
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;

    // --el-button-size: 50px !important;
  }
}
</style>
