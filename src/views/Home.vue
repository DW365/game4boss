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
  computed: {
    language () {
      return this.$store.state.currentLanguage
    }
  },
  methods: {
    load () {
      client.then(client => client.getMainPage({ lang: this.$store.state.currentLanguage })
        .then(res => {
          this.contentString = res.data
        }))
    }
  },
  watch: {
    language (oldVal, newVal) {
      this.load()
    }
  },
  created () {
    this.load()
  }
}
</script>
