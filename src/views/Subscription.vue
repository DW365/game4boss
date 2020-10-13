<template>
  <v-container fill-height>
    <v-row justify="center" align="self-start" class="ma-0 pt-5" no-gutters>
      <v-col md="12">
        <v-banner
          color="success"
          single-line
          outlined
          rounded
          dark
          class="text-center"
        >
          <v-icon dark class="pa-2">mdi-check</v-icon>
          Ваша подписка активна до <b>11.12.2020</b>
        </v-banner>
      </v-col>
    </v-row>
    <v-row justify="center" align="self-start">
      <v-col md="3">
        <SubscriptionCard title="На 1 месяц" price="100" offer="0" color="blue lighten-2"/>
      </v-col>
      <v-col md="3">
        <SubscriptionCard title="На 1 месяц" price="100" offer="0" color="purple lighten-2"/>
      </v-col>
      <v-col md="3">
        <SubscriptionCard title="На 1 месяц" price="100" offer="0" color="orange lighten-2"/>
      </v-col>
      <v-col md="3">
        <SubscriptionCard title="На 1 месяц" price="100" offer="0" color="pink lighten-2"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>
<script>
import SubscriptionCard from '@/components/SubscriptionCard'

export default {
  components: { SubscriptionCard }
}
</script>
