<template>
  <v-container fluid>
    <v-row v-if="gameCase !== null && requested" class="align-self-center">
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
            Управленческий кейс "{{ gameCase.name }}"
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
    </v-row>
  </v-container>
</template>
<script>
import Card from '@/components/Card'
import client from '@/client'

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
    client
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

</style>
