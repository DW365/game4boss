<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
        lg="6"
      >
        <v-card>
          <v-form ref="form" v-model="valid">
            <v-card-text>
              <v-text-field
                label="Email"
                placeholder="user@example.com"
                required
                disabled
                :value="email"
                :rules="[v => !!v || '']"
              ></v-text-field>
              <v-text-field
                label="Code"
                placeholder="678412"
                :rules="[v => !!v || '']"
                required
                v-model="code"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn text to="/register">
                Назад
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="confirm"
              >
                Регистрация
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
        <v-snackbar
          v-model="showErrorPopup"
          color="red"
          timeout="2000"
        >
          {{ errorMsg }}
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>

<script>
import client from '@/client'
import router from '@/router'

export default {
  data: () => ({
    valid: false,
    code: '',
    showErrorPopup: false,
    errorMsg: ''
  }),

  computed: {
    email () {
      return this.$store.state.registration.email
    }
  },
  methods:
    {
      confirm () {
        this.$refs.form.validate()
        if (this.valid) {
          client
            .then(client => client.confirmEmail({
              email: this.email,
              code: this.code
            }))
            .then(res => {
              this.$store.commit('setUser', res.data)
              router.push('/')
            })
            .catch(res => {
              this.errorMsg = 'Неверный код'
              this.showErrorPopup = true
            })
        }
      }
    }
}
</script>
