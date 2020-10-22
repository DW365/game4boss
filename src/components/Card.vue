<template>
  <v-hover v-slot="{ hover }">
    <v-card
      rounded="xl"
      outlined
      :color="color"
      :elevation="hover ? 10 : 5"
    >
      <v-container fill-height style="background-color: rgba(255,255,255,0.98)!important;">
        <v-row class="align-self-start justify-center">
          <v-card-title class="py-0" style="margin-top: -5px">
            <v-icon
              left
              :color="color"
              x-large
            >
              {{ icon }}
            </v-icon>
            <span class="font-weight-light card-title" :style="'color:' + color">{{ title }}</span>
          </v-card-title>
        </v-row>
        <v-row class="align-self-stretch">
          <v-card-text class="card-text py-1 text-center" v-if="showText">
            {{ text }}
          </v-card-text>
        </v-row>
      </v-container>

    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'text', 'color', 'showText', 'icon']
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cuprum:wght@700&display=swap');

.card-text {
  font-family: 'Cuprum', sans-serif;
  font-size: 20pt;
  /*color: rgba(255, 255, 255, 0.9) !important;*/
  line-height: 1.6rem;
}

.v-card {
  border-width: 5px;
  height: 100% !important;
  min-height: 160px;
}

.card-title {
  font-size: 16pt !important;
  font-weight: 600 !important;
}

</style>
