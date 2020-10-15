<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Email"
          value="user@mail.ru"
          outlined
          disabled
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Name"
          value="Вася Васечкин"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Phone"
          value="88005553535"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="Password"
          value="88005553535"
          type="password"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="8" offset="2" class="justify-center text-center">
        <v-btn color="success" block x-large>Сохранить</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>
<script>
export default {}
</script>
