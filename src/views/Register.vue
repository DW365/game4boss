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
                v-model="email"
                :rules="[v => !!v || '']"
              ></v-text-field>
              <v-text-field
                label="Phone"
                placeholder="+78005553535"
                required
                v-model="phone"
                :rules="[v => !!v || '']"
              ></v-text-field>
              <v-text-field
                label="Name"
                placeholder="Вася Васечкин"
                required
                v-model="name"
                :rules="[v => !!v || '']"
              ></v-text-field>
              <v-text-field
                label="Password"
                placeholder="******"
                required
                :rules="[v => !!v,password === rePassword]"
                :type="show1 ? 'text' : 'password'"
                v-model="password"
                :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-text-field
                label="Confirm password"
                placeholder="******"
                required
                :type="show2 ? 'text' : 'password'"
                v-model="rePassword"
                :rules="[v => !!v, password === rePassword]"
                :append-icon="show2 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append="show2 = !show2"
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
import api from '@/client'
import router from '@/router'

export default {
  data: () => ({
    valid: false,
    show1: false,
    show2: false,
    password: '',
    rePassword: '',
    showErrorPopup: false,
    errorMsg: ''
  }),

  computed: {
    email: {
      get () {
        return this.$store.state.registration.email
      },
      set (value) {
        this.$store.commit('setRegistrationEmail', value)
      }
    },
    name: {
      get () {
        return this.$store.state.registration.name
      },
      set (value) {
        this.$store.commit('setRegistrationName', value)
      }
    },
    phone: {
      get () {
        return this.$store.state.registration.phone
      },
      set (value) {
        this.$store.commit('setRegistrationPhone', value)
      }
    }
  },
  methods: {
    confirm () {
      this.$refs.form.validate()
      if (this.valid) {
        api.init()
          .then(client => client.register({
            lang: this.$store.state.currentLanguage
          }, {
            email: this.$store.state.registration.email,
            password: this.password,
            fullName: this.$store.state.registration.name,
            phoneNumber: this.$store.state.registration.phone
          }, { withCredentials: true }))
          .then(res => {
            router.push('/email_confirm')
          })
          .catch(res => {
            this.errorMsg = 'Данный email уже зарегестрирован'
            this.showErrorPopup = true
          })
      }
    }
  }
}
</script>
