<template>
  <v-card
    hover
    raised
    dark
    :color=color
  >
    <v-card-title primary-title class="justify-center darken">
      <h2>{{ title }}</h2>
    </v-card-title>

    <v-card-subtitle class="text-center justify-center align-center mt-6" style="height: 40vh">
      <v-container fill-height>
        <v-row justify="center">
          <h2 class="price" style="display: block">100<v-icon color="white" size="30pt">mdi-currency-rub</v-icon>
          </h2>
          <h2 class="discount-label pt-6" style="display: block; width: 100%">Скидка 0%</h2>
        </v-row>
      </v-container>
    </v-card-subtitle>

    <v-card-actions class="darken py-4">
      <v-btn
        block
        dark
        :color="color"
        x-large
      >
        Приобрести
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SubscriptionCard',
  props: ['price', 'offer', 'color', 'title']
}
</script>

<style scoped>
.darken {
  background-color: rgba(0, 0, 0, 0.2);
  height: 70px;
}

.price {
  color: white;
  font-size: 40pt;
}
</style>
