// 1.区分开发环境和和生产环境
export const BASE_URL = 'http://codercba.com:8000'
export const TIME_OUT = 10000

// 2.代码逻辑判断， 判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)

// let BASE_URL = ''
// if (import.meta.env.MODE === 'production') {
//   BASE_URL = 'http://xxx.prod:8000'
// } else {
//   BASE_URL = 'http://xxx.dev:8000'
// }
// export { BASE_URL }
