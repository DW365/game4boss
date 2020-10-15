<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
      >
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              label="Email"
              placeholder="user@example.com"
              required
            ></v-text-field>
            <v-text-field
              label="Phone"
              placeholder="+78005553535"
              required
            ></v-text-field>
            <v-text-field
              label="Name"
              placeholder="Вася Васечкин"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              placeholder="******"
              required
              type="password"
            ></v-text-field>
            <v-text-field
              label="Confirm password"
              placeholder="******"
              required
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn text to="/login">
              Я уже зарегистрирован
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              to="/email_confirm"
            >
              Регистрация
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>

<script>
export default {
  data: () => ({
    step: 1
  }),

  computed: {
    currentTitle () {
      switch (this.step) {
        case 1:
          return 'Sign-up'
        case 2:
          return 'Create a password'
        default:
          return 'Account created'
      }
    }
  }
}
</script>
