/// <reference types="vite/client" />

// 声明.vue文件模块
declare module '*vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
