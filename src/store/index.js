import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '.1.', done: true },
      { id: 2, text: '.2.', done: false },
      { id: 3, text: '.3.', done: true },
    ],
    b: '1',
    c: '5',
    d: '699',
    e: '4',
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters) {
      return getters.doneTodos.length
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
