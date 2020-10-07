<template>
  <v-app>
    <Navigation/>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
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
