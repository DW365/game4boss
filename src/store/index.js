import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registration: {},
    user: {},
    game: {},
    translations: {},
    currentLanguage: 'RU'
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setRegistrationEmail (state, email) {
      state.registration.email = email
    },
    setRegistrationPhone (state, phone) {
      state.registration.phone = phone
    },
    setRegistrationName (state, name) {
      state.registration.name = name
    }
  },
  actions: {},
  modules: {}
})
