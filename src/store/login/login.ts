import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'

const useLoginStore = defineStore('loginStore', {
  state: () => ({
    id: '',
    name: '',
    token: ''
  }),
  actions: {
    async loginAccountAction(account: any) {
      const loginResult = await accountLoginRequest(account)
      this.id = loginResult.data.id
      this.name = loginResult.data.name
      this.token = loginResult.data.token
    }
  }
})

export default useLoginStore
