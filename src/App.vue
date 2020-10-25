<template>
  <v-app>
    <Navigation :show="showNavigation"/>
    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>

    <v-footer dark height="37px" color="#363636">
      <v-row class="pa-0">
        <v-col
          class="text-center pa-0"
          cols="12"
        ><span style="font-size: 10pt">Copyright © {{ new Date().getFullYear() }} ИП Донских Андрей Геннадьевич | ОГРН 304183136500263, ИНН 183300707209 | <a style="color: white" target="_blank" href="https://donskih.ru/soglashenie-ob-obrabotke-personalnyh-dannyh/">{{ $store.state.codex.PRIVACY_POLICE }}</a></span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style>
</style>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation
  },
  computed: {
    showNavigation () {
      return this.$route.path !== '/login' &&
        this.$route.path !== '/register' &&
        this.$route.path !== '/email_confirm' &&
        this.$route.name !== 'History Game Case' &&
        this.$route.name !== 'Game For Player' &&
        this.$route.path !== '/'
    }
  }
}
</script>
