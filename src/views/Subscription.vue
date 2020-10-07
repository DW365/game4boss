<template>
  <div>
    <v-row>
      <v-col md="12">
        <v-banner
          color="light-green lighten-1"
          single-line
          outlined
          rounded
          class="text-center"
          style="color: rgba(255,255,255,0.85)"
        >Ваша подписка активна до <b>11.12.2020</b>
        </v-banner>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-row class="ma-5">
      <v-col md="4">
        <v-card hover raised class="card-1">
          <v-card-title primary-title class="justify-center pa-10 title">
            <h1>На 1 месяц</h1>
          </v-card-title>

          <v-card-subtitle class="text-center mt-16 pt-16 mb-10 subtitle justify-center">
            <h1 class="price">100<v-icon color="white" size="30pt">mdi-currency-rub</v-icon></h1>
            <h2 class="discount-label pt-6">Скидка 0%</h2>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              width="100%"
            >
              Приобрести
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card hover raised class="card-2">
          <v-card-title primary-title class="justify-center pa-10 title">
            <h1>На 3 месяца</h1>
          </v-card-title>

          <v-card-subtitle class="text-center mt-16 pt-16 mb-10 subtitle justify-center">
            <h1 class="price">270<v-icon color="white" size="30pt">mdi-currency-rub</v-icon></h1>
            <h2 class="discount-label pt-6">Скидка 10%</h2>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              width="100%"
            >
              Приобрести
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card hover raised class="card-3">
          <v-card-title primary-title class="justify-center pa-10 title">
            <h1>На 6 месяцев</h1>
          </v-card-title>

          <v-card-subtitle class="text-center mt-16 pt-16 mb-10 subtitle justify-center">
            <h1 class="price">450<v-icon color="white" size="30pt">mdi-currency-rub</v-icon></h1>
            <h2 class="discount-label pt-6">Скидка 25%</h2>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              width="100%"
            >
              Приобрести
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
  </div>
</template>

<style>
.discount-label {
  font-weight: 400;
}

.card-1 {
  background-color: #CE93D8!important;
}
.card-1 .title{
  background-color: #BA68C8;
}
.card-2 {
  background-color: #FFCCBC !important;
}
.card-2 .title{
  background-color: #FF8A65;
}
.card-3 {
  background-color: #F8BBD0!important;
}
.card-3 .title{
  background-color: #F06292;
}
.title{
  color: rgba(255, 255, 255, 0.85)!important;
}
.subtitle{
  color: rgba(255, 255, 255, 0.85)!important;
  height: 200px;
}

.price{
  font-size: 60pt;
}
</style>
