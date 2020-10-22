<template>
  <v-app-bar
    dark
    app
    color="#363636"
  >
    <div class="d-flex align-center">
      <img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        width="250px"
        min-height="50px"
      />
    </div>
    <v-select
      :items=items
      solo
      hide-details
      value="RU"
      class="pa-0 ma-0 lang-selector"
      style="max-width: 100px"
    ></v-select>
    <v-tabs
      centered
      v-show=$store.state.user.id
    >
      <v-tab to="/home">Главная</v-tab>
      <v-tab to="/history">История игр</v-tab>
      <v-tab to="/game">Текущая игра</v-tab>
      <v-tab to="/subscription">Подписка</v-tab>
    </v-tabs>
    <v-img width="260"></v-img>

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
import api from '@/client'

export default {
  name: 'Navigation',
  props: ['show'],
  data: () => ({
    items: ['RU', 'EN', 'BY', 'KZ'],
    logo: 'logo.png'
  }),
  methods: {
    logout () {
      api.init()
        .then(client => client.logout(null, null, { withCredentials: true }))
        .then(res => {
          this.$store.commit('setUser', {})
          router.push('/login')
        })
    }
  }
}
</script>

<style scoped>
.lang-selector {
  width: 100px;
}
</style>
