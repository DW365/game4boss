<template>
  <v-container fill-height>
    <v-row align="self-start">
      <div v-html="contentString" style="width: 100%"></div>
    </v-row>
  </v-container>
</template>

<script>
import api from '@/client'

export default {
  name: 'Home',
  data () {
    return {
      contentString: ''
    }
  },
  created () {
    api.init()
      .then(client => client.getMainPage({ lang: 'RU' }))
      .then(res => {
        this.contentString = res.data
      })
  }
}
</script>
