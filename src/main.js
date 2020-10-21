import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMask from 'v-mask'

Vue.use(VueMask)
Vue.config.productionTip = false
Vue.config.silent = true
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted () {
    const beep = require('@/assets/beep.mp3')
    const c = this
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    setInterval(function () {
      if (c.$store.state.timerActive) {
        console.log('tick')
        const timerComponents = c.$store.state.timerValue.split(':')
        if (Number(timerComponents[1]) > 0) {
          timerComponents[1] = zeroPad(Number(timerComponents[1]) - 1, 2)
        } else {
          if (Number(timerComponents[0]) > 0) {
            timerComponents[1] = zeroPad(59, 2)
            timerComponents[0] = zeroPad(Number(timerComponents[0]) - 1, 2)
          } else {
            c.$store.commit('setTimerActiveValue', false)
            var audio = new Audio(beep)
            audio.play()
          }
        }
        c.$store.commit('setTimerValue', timerComponents.join(':'))
      }
    }, 1000)
  }
}).$mount('#app')
