import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registration: {},
    user: {},
    game: {},
    translations: {},
    currentLanguage: 'RU',
    timerValue: '15:00',
    timerActive: false
  },
  mutations: {
    setTimerValue (state, value) {
      const timerComponents = value.split(':')
      const zeroPad = (num, places) => String(num).padStart(places, '0')
      timerComponents[0] = zeroPad(Number(timerComponents[0]), 2)
      timerComponents[1] = zeroPad(Number(timerComponents[1]), 2)
      state.timerValue = timerComponents.join(':')
    },
    setTimerActiveValue (state, value) {
      state.timerActive = value
    },
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
