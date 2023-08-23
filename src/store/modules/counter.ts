import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  //state是函数, 并且返回一个对象
  state: () => ({
    counter: 99
  }),
  getters: {
    // getters中可以定义接受一个state作为参数的函数, 并且函数中是有this的
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    // actions中可以定义函数, 并且函数是有this
    changeCounterAction(newCounter: number) {
      this.counter = newCounter
    }
  }
})

export default useCounterStore
