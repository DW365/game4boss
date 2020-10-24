<template>
  <v-app-bar
    dark
    app
    color="#363636"
  >
    <div class="d-flex align-center">
      <img
        alt="Vuetify Logo"
        class="shrink mr-2 d-none d-sm-none d-md-flex
"
        src="@/assets/logo.png"
        width="270px"
      />
    </div>
    <v-tabs
      show-arrows
      style="position: absolute"
      centered
      v-show=$store.state.user.id
      class="pr-16 mr-16"
    >
      <v-tab to="/home">Главная</v-tab>
      <v-tab to="/history">История игр</v-tab>
      <v-tab to="/game">Текущая игра</v-tab>
      <v-tab to="/subscription">Подписка</v-tab>
    </v-tabs>
    <v-select
      :items="items"
      solo
      hide-details
      v-model="language"
      class="pa-0 ma-0"
      style="max-width: 85px; right: 65px; position: absolute"
    ></v-select>
    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          v-show=$store.state.user.id
          style="position: absolute; right: 20px"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/profile">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Профиль
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            Выход
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import router from '@/router'
import client from '@/client'
import store from '@/store'

export default {
  name: 'Navigation',
  props: ['show'],
  data: () => ({
    items: ['RU', 'UA', 'BY', 'KZ', 'EN'],
    logo: 'logo.png'
  }),
  methods: {
    logout () {
      client
        .then(client => client.logout(null, null, { withCredentials: true }))
        .then(res => {
          this.$store.commit('setUser', {})
          router.push('/login')
        })
    }
  },
  computed: {
    language: {
      get () {
        return this.$store.state.currentLanguage
      },
      set (value) {
        this.$cookies.set('lang', value, 2147483647)
        client
          .then(client => client.getCodex(value))
          .then(res => {
            store.commit('setCodex', res.data)
          })
        this.$store.commit('setCurrentLanguage', value)
      }
    }
  }
}
</script>

<style scoped>
</style>
