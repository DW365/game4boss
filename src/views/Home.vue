<template>
  <v-container fill-height>
    <v-row>
      <div v-html="contentString" style="width: 100%"></div>
    </v-row>
  </v-container>
</template>

<script>
import client from '@/client'

export default {
  name: 'Home',
  data () {
    return {
      contentString: ''
    }
  },
  created () {
    client.then(client => client.getMainPage({ lang: 'RU' })
      .then(res => {
        this.contentString = res.data
      }))
  }
}
</script>
