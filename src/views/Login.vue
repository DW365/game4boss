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
                :label="$store.state.codex.EMAIL"
                placeholder="user@example.com"
                required
                v-model="email"
                :rules="[v => !!v || '']"
              ></v-text-field>
              <v-text-field
                :label="$store.state.codex.PASSWORD"
                placeholder="******"
                required
                type="password"
                v-model="password"
                :rules="[v => !!v || '']"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn text to="/register">
                {{ $store.state.codex.REGISTRATION }}
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="login"
              >
                {{ $store.state.codex.LOGIN }}
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

const qs = require('querystring')

export default {
  data () {
    return {
      valid: true,
      email: '',
      password: '',
      phone: '',
      name: '',
      showErrorPopup: false,
      errorMsg: ''
    }
  },
  methods: {
    login () {
      this.$refs.form.validate()
      if (this.valid) {
        client
          .then(client => client.login(null, qs.stringify({
            email: this.email,
            password: this.password
          })))
          .then(res => {
            this.$store.commit('setUser', res.data)
            router.push('/')
          })
          .catch(res => {
            console.log(res)
            this.errorMsg = this.$store.state.codex.WRONG_LOG_OR_PASS
            this.showErrorPopup = true
          })
      }
    }
  }
}
</script>
