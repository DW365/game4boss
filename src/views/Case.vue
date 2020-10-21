<template>
  <v-container fill-height>
    <v-row v-if="gameCase !== null && requested" class="align-self-center">
      <v-col md="10" offset="1">
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
    </v-row>
  </v-container>
</template>
<script>
import Card from '@/components/Card'
import api from '@/client'

export default {
  components: { Card },
  data: () => ({
    gameCase: null,
    show1: true,
    requested: false
  }),
  computed: {
    currentHost () {
      return window.location.hostname + (location.port ? ':' + location.port : '')
    },
    objectCardText () {
      return this.gameCase.objectCard.RU
    },
    employeeCardText () {
      return this.gameCase.employeeCard.RU
    },
    taskCardText () {
      return this.gameCase.taskCard.RU
    },
    conditionCardText () {
      return this.gameCase.conditionCard.RU
    },
    delegationLevelCardText () {
      return this.gameCase.delegationLevelCard.RU
    }
  },
  beforeCreate () {
    api.init()
      .then(client => client.getCase({
        caseId: this.$route.query.id,
        gameId: this.$route.query.gameId
      }))
      .then(res => {
        this.gameCase = res.data
        this.requested = true
      })
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
