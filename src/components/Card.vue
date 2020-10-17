<template>
  <v-card
    raised
    hover
    :color=color
    dark
  >
    <v-container fill-height>
      <v-row justify="start">
        <v-card-title class="py-1">
          <v-icon
            dark
            left
          >
            mdi-card-text-outline
          </v-icon>
          <span class="font-weight-light card-title">{{ title }}</span>
        </v-card-title>
      </v-row>
      <v-row class="align-self-stretch">
        <v-card-text class="card-text py-1" v-if="showText">
          {{ text }}
        </v-card-text>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'text', 'color', 'showText']
}
</script>

<style scoped>

</style>
