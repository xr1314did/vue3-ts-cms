// 创建实例, 并导出实例
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    requestFailureFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      return res
    },
    responseFailureFn: (err) => {
      return err
    }
  }
})
// export const hyRequest2 = new HYRequest({
//   baseURL: 'http://codercba.com:1888/airbnb/api',
//   timeout: 9000
// })
export default hyRequest
