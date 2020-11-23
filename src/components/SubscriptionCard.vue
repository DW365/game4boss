<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="bordered"
      rounded="xl"
      hover
      outlined
      :color="color"
      :elevation="hover ? 10 : 5"
    >
      <v-container fill-height style="background-color: rgba(255,255,255,0.98)!important;">
        <v-row class="align-self-start justify-center pb-2"
               :style="'border-bottom: solid; border-width:2.5px;border-color:' + color">
          <v-card-title primary-title class="justify-center" :style="'color:' + color">
            <h2>{{ title }}</h2>
          </v-card-title>
        </v-row>
        <v-row class="align-self-stretch justify-center">
          <v-card-subtitle class="text-center justify-center align-center mt-6" style="height: 40vh">
            <v-container fill-height>
              <v-row justify="center">
                <h2 class="price" style="display: block">{{ price }}<v-icon color="rgba(0, 0, 0, 0.8)" size="30pt">mdi-currency-rub</v-icon>
                </h2>
                <h2 class="discount-label pt-6" style="display: block; width: 100%">{{ $store.state.codex.OFFER }} {{
                    offer
                  }}%</h2>
              </v-row>
            </v-container>
          </v-card-subtitle>
        </v-row>
        <v-row class="align-self-end justify-center"
               :style="'border-top: solid; border-width:2.5px;border-color:' + color">
          <v-card-actions class="pt-5" style="width: 90%">
            <v-btn
              :href=getPaymentUrl
              block
              outlined
              :color="color"
              x-large
            >
              {{ $store.state.codex.BUY_BUTTON }}
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-container>
    </v-card>
  </v-hover>
</template>

<script>

import { BACKEND_URL } from '@/constants'

export default {
  name: 'SubscriptionCard',
  props: ['price', 'offer', 'color', 'title'],
  computed: {
    getPaymentUrl () {
      return BACKEND_URL + '/create_payment?amount=' + this.price
    }
  }
}
</script>

<style scoped>
.darken {
  background-color: rgba(0, 0, 0, 0.2);
  height: 70px;
}

.price {
  color: rgba(0, 0, 0, 0.8);
  font-size: 40pt;
}

.bordered {
  border-width: 5px !important;
}

</style>
