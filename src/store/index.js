import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: {
      name: '小明',
      age: 18,
      sex: 'man'
    },
    book: 'HTML+CSS',
    score: [30, 20, 80, 10, 9, 66],
  },
  getters: {
    // 可以认为是 store 的计算属性, 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    calcScore(state) {
      // p(state, getters, rootState, rootGetters)
      //state: 当前模块的state
      //getters: 当前模块的getters
      //rootState: 全局的state
      //rootGetters: 全局的getters
      let ps = state.score.filter(v => {
        return v >= 30;
      })
      return ps.join('-');
    }
  },
  mutations: { // 修改state的方法
    // 同步操作 直接修改

    changeState(state, data) {
      //state: 当前模块的state
      //data: 组件提交mutation时携带的参数(载荷)
      // console.log('data ==> ', data);

      state.person = data;
    },
    changeBook(state, book) {
      state.book = book;
    },
  },
  actions: { // 定义的提交mutations的方法
    // Action 类似于 mutation， 不同在于：

    // Action 提交的是 mutation， 而不是直接变更状态。
    // Action 可以包含任意异步操作。 (与mutation的最大区别, dispatch提交之后可以then操作)

    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。


    // Actions 支持同样的载荷方式和对象方式进行分发
    changeBookAct({commit}, data) {
      commit('changeBook', data)
    }

  },
  modules: {}
})