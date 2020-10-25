<template>
  <v-container fill-height>
    <v-row justify="center" class=" align-self-start" no-gutters>
      <v-col md="12">
        <v-banner
          color="success"
          single-line
          outlined
          rounded
          dark
          class="text-center ma-0 mt-5"
          v-if="$store.state.user.subscription"
        >
          <v-icon dark class="pa-2">mdi-check</v-icon>
          {{ $store.state.codex.SUBSCRIPTION_ACTIVE_BEFORE }} <b>{{ $store.state.user.subscription }}</b>
        </v-banner>
      </v-col>
    </v-row>
    <v-row justify="center" class="align-self-start">
      <v-col md="3">
        <SubscriptionCard :title="$store.state.codex.BUY_CARD_1" :price=prices[0][0] :offer=prices[0][1] color="#0e786d"/>
      </v-col>
      <v-col md="3">
        <SubscriptionCard :title="$store.state.codex.BUY_CARD_2" :price=prices[1][0] :offer=prices[1][1] color="#7d1416"/>
      </v-col>
      <v-col md="3">
        <SubscriptionCard :title="$store.state.codex.BUY_CARD_3" :price=prices[2][0] :offer=prices[2][1] color="#b86628"/>
      </v-col>
      <v-col md="3">
        <SubscriptionCard :title="$store.state.codex.BUY_CARD_4" :price=prices[3][0] :offer=prices[3][1] color="#17355e"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>
<script>
import SubscriptionCard from '@/components/SubscriptionCard'
import client from '@/client'

export default {
  components: { SubscriptionCard },
  data () {
    return {
      prices: [[0, 0], [0, 0], [0, 0], [0, 0]]
    }
  },
  created () {
    client
      .then(client => client.getPrices({ lang: 'RU' }))
      .then(res => {
        this.prices = res.data
      })
  }
}
</script>
