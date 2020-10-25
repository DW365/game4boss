<template>
  <v-container fill-height>
    <v-row class="pt-8 align-self-center">
      <v-expansion-panels focusable inset v-model="tab">
        <v-expansion-panel
          readonly
          v-for="(item,i) in history"
          :key="i"
        >
          <v-expansion-panel-header class="py-3">
            <div>
              <v-btn fab outlined small color="indigo accent-3" @click="loadPage">
                <v-icon>mdi-reload</v-icon>
              </v-btn>
              <span style="color: #606060" class="pl-2">{{ item.shortLink }}</span>
            </div>

            <div class="text-right"><span style="color: rgba(0,0,0,0.5)">{{ item.createdFmt.date }}</span> <b
              style="color: #606060">{{ item.createdFmt.time }}</b></div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-banner single-line>
              <v-icon>
                mdi-link
              </v-icon>
              {{ currentHost }}/{{ item.shortLink }}
            </v-banner>
            <v-banner
              v-for="(mCase,i) in item.namedCases"
              :key="i"
              single-line
            >
              <v-icon>
                mdi-card-text-outline
              </v-icon>
              {{ mCase.name }}
              <template v-slot:actions>
                <v-btn fab outlined small color="indigo accent-3" :to="getPath(item,mCase)">
                  <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
                <v-btn fab outlined small color="blue accent-2" :href="getFileLink(item.id,mCase.id)">
                  <v-icon>mdi-cloud-download</v-icon>
                </v-btn>
              </template>
            </v-banner>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<style>
</style>
<script>
import client from '@/client'
import { BACKEND_URL } from '@/constants'

export default {
  data: () => ({
    history: null,
    page: 1,
    totalPages: 1,
    tab: 0
  }),
  methods: {
    loadPage () {
      client
        .then(client => client.getGameHistory({
          shortId: this.$route.params.shortId
        }))
        .then(res => {
          this.history = [res.data]
        })
    },
    getPath (item, mCase) {
      return '/history/case?id=' + mCase.id + '&gameId=' + item.shortLink
    },
    getGamePath (item) {
      return '/history/game?id=' + item.id
    },
    getFileLink (gameId, caseId) {
      return BACKEND_URL + '/game/case/file?caseId=' + caseId + '&gameId=' + gameId + '&lang=' + this.$store.state.currentLanguage
    }
  },
  computed: {
    currentHost () {
      return window.location.hostname + (location.port ? ':' + location.port : '')
    }
  },
  created () {
    this.loadPage()
  }
}
</script>
