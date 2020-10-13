<template>
  <v-app>
    <Navigation/>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer dark height="35px">
      <v-row class="pa-0">
        <v-col
          class="text-center pa-0"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Game4Boss </strong>
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
  }
}
</script>
