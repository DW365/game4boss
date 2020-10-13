<template>
  <v-app-bar
    dark
    app
  >
    <router-link to="/">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="logo.png"
          transition="scale-transition"
          width="250"
        />
      </div>
    </router-link>
    <v-select
      :items=items
      solo
      hide-details
      value="RU"
      class="pa-0 ma-0 lang-selector"
    ></v-select>
    <v-tabs
      centered
    >
      <v-tab to="/">Главная</v-tab>
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
        <v-list-item to="/login">
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
export default {
  name: 'Navigation',
  data: () => ({
    items: ['RU', 'EN', 'BY', 'KZ']
  })
}
</script>

<style scoped>
.lang-selector {
  width: 100px;
}
</style>
