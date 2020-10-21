<template>
  <v-container :fill-height="game===null" :fluid="game !== null">
    <v-row v-if="game !== null && requested">
      <v-col md="3">
        <div class="text-center col-title"><h2>Алгоритмы руководителя</h2></div>
        <v-expansion-panels
          v-model="panel_value"
          :disabled="!show1"
        >
          <v-expansion-panel
            class="ma-3"
          >
            <v-expansion-panel-header>
              Постановка задачи
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span>1. Сбор и анализ информации</span><br>
              <span>2. Ограничения и риски</span><br>
              <span>3. Критерии эффективности</span><br>
              <span>4. Требования к сотруднику</span><br>
              <span>5. Ожидаемый результат</span><br>
              <span>6. Формализованное решение</span>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            class="ma-3"
          >
            <v-expansion-panel-header>
              Обеспечение выполнения
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span>1. Обеспечение ресурсами</span><br>
              <span>2. Привлечение коллег\партнеров</span><br>
              <span>3. Распределение заданий</span><br>
              <span>4. Последовательность действий</span><br>
              <span>5. Координация участников</span><br>
              <span>6. Сроки и виды контроля</span>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            class="ma-3"
          >
            <v-expansion-panel-header>
              Формирование мотивации
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span>1. Мотиваторы</span><br>
              <span>2. Сильные\слабые стороны</span><br>
              <span>3. Уровень ответственности</span><br>
              <span>4. Поощрение</span><br>
              <span>5. Принуждение</span><br>
              <span>6. Поддержка</span><br>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
            class="ma-3"
          >
            <v-expansion-panel-header>
              Обратная связь
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <span>1. Полученный результат</span><br>
              <span>2. Сделано правильно</span><br>
              <span>3. Требует улучшения</span><br>
              <span>4. Оценка эффективности</span><br>
              <span>5. Рекомендации</span><br>
              <span>6. Управленческое решение</span><br>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col md="7">
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
            Управленческий кейс {{ currentCase }} / {{ game.managementCases.length }}
            <v-btn
              class="mx-1"
              fab
              outlined
              small
              @click="nextCase"
              :disabled="(this.$route.name === 'History Game' && currentCase === game.managementCases.length) || !$store.state.user.subscription"
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
              :disabled="this.$route.name === 'History Game'"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </div>
        <v-row>
          <v-col md="6">
            <Card title="Задача" :text="taskCardText"
                  color="deep-orange lighten-2" v-bind:showText="show1"/>
          </v-col>
          <v-col md="6">
            <Card title="Объект" :text="objectCardText" color="pink lighten-2"
                  v-bind:showText="show1"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <Card title="Условие" :text="conditionCardText" color="indigo lighten-2"
                  v-bind:showText="show1"/>
          </v-col>
          <v-col md="6">
            <Card title="Уровень передачи полномочий" :text="delegationLevelCardText" color="teal lighten-2"
                  v-bind:showText="show1"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12">
            <Card title="Сотрудник" :text="employeeCardText" color="orange lighten-2" v-bind:showText="show1"/>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="2">
        <div class="text-center col-title">
          <h2>
            <v-text-field
              append-outer-icon="mdi-floppy"
              type="text"
              class="mt-0 pt-0"
              v-model="caseNameModel"
              @click:append-outer="saveCaseName"
              ref="caseNameInput"
            ></v-text-field>
          </h2>
        </div>
        <div class="pt-13 pb-13">
          <h2 class="text-center pb-2" style="font-weight: 400">Ведущий</h2>
          <h2 class="text-center"><b>{{ this.game.ownerName }}</b></h2></div>
        <div class="pt-12 pb-16" v-if="show1"
             :style="{visibility: this.$route.name !== 'History Game' ? 'visible' : 'hidden'}">
          <h2 class=" text-center justify-center" style="font-weight: 400">До конца игры
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
                v-mask="'##:##'"
                v-model="timerValue"
                style="width: 3em; font-size: 1.5em; font-weight: 600"
                :readonly="timerActive"
              >
              </v-text-field>
            </v-col>
            <v-col></v-col>
          </v-row>
        </div>
        <div class="pt-3" v-if="show1">
          <h2 class="text-center pb-2" style="font-weight: 400">Ссылка
            <v-btn
              fab
              outlined
              x-small
              @click="updateLink"
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
        <v-btn x-large block color="success" @click="startNewGame" :disabled="!$store.state.user.subscription">Начать
          новую игру
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Card from '@/components/Card'
import api from '@/client'

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
      return this.game.managementCases[this.currentCase - 1].objectCard.RU
    },
    employeeCardText () {
      return this.game.managementCases[this.currentCase - 1].employeeCard.RU
    },
    taskCardText () {
      return this.game.managementCases[this.currentCase - 1].taskCard.RU
    },
    conditionCardText () {
      return this.game.managementCases[this.currentCase - 1].conditionCard.RU
    },
    delegationLevelCardText () {
      return this.game.managementCases[this.currentCase - 1].delegationLevelCard.RU
    }
  },
  methods: {
    nextCase () {
      if (this.currentCase < this.game.managementCases.length) {
        this.currentCase++
      } else {
        api.init()
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
      api.init()
        .then(client => client.closeGame())
        .then(res => {
          this.game = null
        })
    },
    startNewGame () {
      this.timerValue = '15:00:00'
      this.timerActive = false
      api.init()
        .then(client => client.createNewGame())
        .then(res => {
          this.game = res.data
          this.currentCase = this.game.managementCases.length
        })
    },
    saveCaseName () {
      api.init()
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
      api.init()
        .then(client => client.setNewShortLink({
          gameId: this.game.id
        }))
        .then(res => {
          this.game.shortLink = res.data
        })
    }
  },
  beforeCreate () {
    if (this.$route.name !== 'History Game') {
      api.init()
        .then(client => client.getCurrentGameInfo())
        .then(res => {
          this.game = res.data
          this.requested = true
          this.currentCase = this.game.managementCases.length
        })
    } else {
      api.init()
        .then(client => client.getGame({ gameId: this.$route.query.id }))
        .then(res => {
          this.game = res.data
          this.requested = true
          this.currentCase = this.game.managementCases.length
        })
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cuprum:wght@700&display=swap');

.v-expansion-panel-header {
  font-weight: 500;
  font-size: 15pt !important;
}

span {
  font-size: 14pt;
}

.card-text {
  font-family: 'Cuprum', sans-serif;
  font-size: 20pt;
  color: rgba(255, 255, 255, 0.9) !important;
  line-height: 1.5rem;
}

.v-card {
  height: 100% !important;
  min-height: 160px;
}

.card-title {
  font-size: 12pt !important;
}

.col-title {
  height: 42px;
}
</style>
