<template>
  <v-container :fill-height="game===null" :fluid="game !== null" class="pb-0">
    <v-row v-if="game !== null && requested" class="pb-0">
      <v-col md="3">
        <div class="text-center col-title"><h2>{{ $store.state.codex.LEADER_ALGO }}</h2></div>
        <v-expansion-panels
          v-model="panel_value"
          :disabled="!show1"
        >
          <v-expansion-panel
            class="ma-3"
          >
            <v-expansion-panel-header>
              {{ $store.state.codex.LEADER_ALGO_BLOCK_1_TITLE }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span style="white-space:pre-line;">{{ $store.state.codex.LEADER_ALGO_BLOCK_1 }}</span>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            class="ma-3"
          >
            <v-expansion-panel-header>
              {{ $store.state.codex.LEADER_ALGO_BLOCK_2_TITLE }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span style="white-space:pre-line;">{{ $store.state.codex.LEADER_ALGO_BLOCK_2 }}</span>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            class="ma-3"
          >
            <v-expansion-panel-header>
              {{ $store.state.codex.LEADER_ALGO_BLOCK_3_TITLE }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span style="white-space:pre-line;">{{ $store.state.codex.LEADER_ALGO_BLOCK_3 }}</span>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            class="ma-3"
          >
            <v-expansion-panel-header>
              {{ $store.state.codex.LEADER_ALGO_BLOCK_4_TITLE }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span style="white-space:pre-line;">{{ $store.state.codex.LEADER_ALGO_BLOCK_4 }}</span>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col md="7" class="pb-0">
        <div class="text-center col-title">
          <h2>
            <v-btn
              class="mx-1"
              fab
              outlined
              small
              @click="showHideButton"
            >
              <v-icon>{{ show1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline' }}</v-icon>
            </v-btn>
            <v-btn
              class="mx-1"
              fab
              outlined
              small
              :disabled="currentCase<=1"
              @click="prevCase"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            {{ $store.state.codex.MANAGEMENT_CASE }} {{ currentCase }} / {{ game.managementCases.length }}
            <v-btn
              class="mx-1"
              fab
              outlined
              small
              @click="nextCase"
              :disabled="(currentCase === game.managementCases.length) && (!$store.state.user.subscription || !$store.state.user ||  $store.state.user.id !== game.ownerId)"
            >
              <v-icon>
                {{ currentCase !== game.managementCases.length ? 'mdi-chevron-right' : 'mdi-chevron-double-right' }}
              </v-icon>
            </v-btn>
            <v-btn
              class="mx-1"
              fab
              outlined
              small
              @click="closeGame"
              :disabled="this.$route.name !== 'Game'"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </div>
        <v-row>
          <v-col md="6">
            <Card :title="$store.state.codex.TASK" :text="taskCardText" icon="$task"
                  color="#161342" v-bind:showText="show1"/>
          </v-col>
          <v-col md="6">
            <Card :title="$store.state.codex.OBJECT" :text="objectCardText" color="#0e786d" icon="$object_icon"
                  v-bind:showText="show1"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <Card :title="$store.state.codex.CONDITION" :text="conditionCardText" color="#7d1416" icon="$condition"
                  v-bind:showText="show1"/>
          </v-col>
          <v-col md="6">
            <Card :title="$store.state.codex.DELEGATION_LEVEL" :text="delegationLevelCardText" color="#b86628"
                  icon="$delegation_level"
                  v-bind:showText="show1"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12">
            <Card :title="$store.state.codex.EMPLOYEE" :text="employeeCardText" color="#17355e" v-bind:showText="show1"
                  icon="$employee"/>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="2" class="pb-0">
        <div class="text-center col-title">
          <h2>
            <v-text-field
              append-outer-icon="mdi-floppy"
              type="text"
              class="mt-0 pt-0"
              v-model="caseNameModel"
              @click:append-outer="saveCaseName"
              ref="caseNameInput"
              :disabled="!$store.state.user ||  $store.state.user.id !== game.ownerId"
            ></v-text-field>
          </h2>
        </div>
        <div class="pt-13 pb-13">
          <h2 class="text-center pb-2" style="font-weight: 400">{{ $store.state.codex.GAME_MASTER }}</h2>
          <h2 class="text-center"><b>{{ this.game.ownerName }}</b></h2></div>
        <div class="pt-12 pb-16" v-if="show1">
          <h2 class=" text-center justify-center" style="font-weight: 400">{{$store.state.codex.BEFORE_GAME_END}}
            <v-btn
              fab
              outlined
              x-small
              @click="timerActive=!timerActive"
            >
              <v-icon>{{ timerActive ? 'mdi-pause' : 'mdi-play' }}</v-icon>
            </v-btn>
          </h2>
          <v-row no-gutters>
            <v-col></v-col>
            <v-col>
              <v-text-field
                type="time"
                step="1"
                v-model="timerValue"
                style="width: 4.4em; font-size: 1.5em; font-weight: 600"
                :readonly="timerActive"
              >
              </v-text-field>
            </v-col>
            <v-col></v-col>
          </v-row>
        </div>
        <div class="pt-3" v-if="show1">
          <h2 class="text-center pb-2" style="font-weight: 400">{{ $store.state.codex.LINK }}
            <v-btn
              fab
              outlined
              x-small
              @click="updateLink"
              :disabled="!$store.state.user ||   $store.state.user.id !== game.ownerId"
            >
              <v-icon>mdi-reload</v-icon>
            </v-btn>
            <br></h2>
          <h3 class="text-center"><b>{{ currentHost }}/{{ this.game.shortLink }}</b></h3>
        </div>
      </v-col>
    </v-row>
    <v-row v-if="game===null && requested" class="justify-center align-center">
      <v-col cols="8">
        <v-btn x-large block color="success" @click="startNewGame" :disabled="!$store.state.user.subscription">{{
            $store.state.codex.START_NEW_GAME
          }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Card from '@/components/Card'
import client from '@/client'

export default {
  components: { Card },
  data: () => ({
    show1: true,
    panel_value: -1,
    real_panel_value: null,
    game: null,
    caseName: '',
    requested: false,
    currentCase: 1
  }),
  computed: {
    caseNameModel: {
      get () {
        return this.game.managementCases[this.currentCase - 1].name
      },
      set (value) {
        this.caseName = value
      }
    },
    timerValue: {
      get () {
        return this.$store.state.timerValue
      },
      set (value) {
        this.$store.commit('setTimerValue', value)
      }
    },
    timerActive: {
      get () {
        return this.$store.state.timerActive
      },
      set (value) {
        this.$store.commit('setTimerActiveValue', value)
      }
    },
    currentHost () {
      return window.location.hostname + (location.port ? ':' + location.port : '')
    },
    objectCardText () {
      return this.game.managementCases[this.currentCase - 1].objectCard[this.$store.state.currentLanguage]
    },
    employeeCardText () {
      return this.game.managementCases[this.currentCase - 1].employeeCard[this.$store.state.currentLanguage]
    },
    taskCardText () {
      return this.game.managementCases[this.currentCase - 1].taskCard[this.$store.state.currentLanguage]
    },
    conditionCardText () {
      return this.game.managementCases[this.currentCase - 1].conditionCard[this.$store.state.currentLanguage]
    },
    delegationLevelCardText () {
      return this.game.managementCases[this.currentCase - 1].delegationLevelCard[this.$store.state.currentLanguage]
    }
  },
  methods: {
    nextCase () {
      if (this.currentCase < this.game.managementCases.length) {
        this.currentCase++
      } else {
        client
          .then(client => client.createNewCase({ gameId: this.game.id }))
          .then(res => {
            this.game.managementCases.push(res.data)
            this.currentCase++
          })
      }
      this.$refs.caseNameInput.value = ''
    },
    prevCase () {
      if (this.currentCase > 1) {
        this.currentCase--
      }
      this.$refs.caseNameInput.value = ''
    },
    showHideButton () {
      this.show1 = !this.show1
      if (this.show1 === false) {
        this.real_panel_value = this.panel_value
        this.panel_value = -1
      } else {
        this.panel_value = this.real_panel_value
      }
    },
    closeGame () {
      client
        .then(client => client.closeGame())
        .then(res => {
          this.game = null
        })
    },
    startNewGame () {
      this.timerValue = '15:00:00'
      this.timerActive = false
      client
        .then(client => client.createNewGame())
        .then(res => {
          this.game = res.data
          this.currentCase = this.game.managementCases.length
        })
    },
    saveCaseName () {
      client
        .then(client => client.setCaseName({
          gameId: this.game.id,
          caseId: this.game.managementCases[this.currentCase - 1].id,
          name: this.caseName
        }))
        .then(res => {
          this.game.managementCases[this.currentCase - 1] = res.data
        })
    },
    updateLink () {
      client
        .then(client => client.setNewShortLink({
          gameId: this.game.id
        }))
        .then(res => {
          this.game.shortLink = res.data
        })
    }
  },
  beforeCreate () {
    if (this.$route.name !== 'History Game' && this.$route.name !== 'History Game Case') {
      client
        .then(client => client.getCurrentGameInfo())
        .then(res => {
          this.game = res.data
          this.requested = true
          this.currentCase = this.game.managementCases.length
        })
    } else {
      client
        .then(client => client.getGame({ gameId: this.$route.query.gameId }))
        .then(res => {
          this.game = res.data
          this.requested = true
          if (this.$route.query.id) {
            for (let i = 0; i < this.game.managementCases.length; i++) {
              if (this.$route.query.id === this.game.managementCases[i].id.toString()) {
                this.currentCase = i + 1
              }
            }
          } else {
            this.currentCase = this.game.managementCases.length
          }
        })
    }
  }
}
</script>
<style>
.v-expansion-panel-header {
  font-weight: 500;
  font-size: 15pt !important;
}

span {
  font-size: 14pt;
}

.col-title {
  height: 42px;
}
</style>
