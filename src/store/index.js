import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkmode: false
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkmode = !state.darkmode
    }
  },
  getters: {
    darkState: state => state.darkmode
  },
  // actions: {},
  // modules: {}
})