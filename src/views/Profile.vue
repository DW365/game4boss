<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12">
        <v-text-field
          :label="$store.state.codex.EMAIL"
          ref="email"
          outlined
          disabled
          v-model="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          :label="$store.state.codex.NAME"
          outlined
          ref="name"
          v-model="name"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          :label="$store.state.codex.PHONE"
          outlined
          ref="phone"
          v-model="phone"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          :label="$store.state.codex.PASSWORD"
          placeholder="********"
          outlined
          ref="password"
          v-model="password"
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          @click:append="show1 = !show1"
        ></v-text-field>
      </v-col>
      <v-col cols="8" offset="2" class="justify-center text-center">
        <v-btn color="success" block x-large @click="save">{{ $store.state.codex.SAVE }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>
<script>
import client from '@/client'

export default {
  data: () => ({
    email: null,
    phone: null,
    name: null,
    password: null,
    show1: false
  }),
  mounted () {
    this.email = this.$store.state.user.email
    this.phone = this.$store.state.user.phoneNumber
    this.name = this.$store.state.user.fullName
  },
  methods: {
    save () {
      client
        .then(client => client.updateUserInfo({}, {
          fullName: this.name,
          phoneNumber: this.phone,
          password: this.password
        }))
        .then(res => {
          this.$store.commit('setUser', res.data)
        })
    }
  }
}
</script>
