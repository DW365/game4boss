<template>
  <div>
    <v-row>
      <v-col md="3">
        <div class="text-center"><h2>Алгоритмы руководителя</h2></div>
        <v-expansion-panels
          :value="0"
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
        <div class="text-center"><h2>Управленческий кейс</h2></div>
        <v-row>
          <v-col md="6">
            <v-card
              hover
              class="mx-auto"
              color="deep-orange lighten-2"
              dark
            >
              <v-card-title class="pt-2 pb-1">
                <v-icon
                  dark
                  left
                >
                  mdi-card-text-outline
                </v-icon>
                <span class="font-weight-light card-title">Задача</span>
              </v-card-title>

              <v-card-text class="card-text">
                Автоматизировать / Синхронизировать / Интегрировать
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="6">
            <v-card
              hover
              class="mx-auto"
              color="pink lighten-2"
              dark
              height="100%"
            >
              <v-card-title class="pt-2 pb-1">
                <v-icon
                  dark
                  left
                >
                  mdi-card-text-outline
                </v-icon>
                <span class="font-weight-light card-title">Объект</span>
              </v-card-title>

              <v-card-text class="card-text">
                Квалификация / Обученность сотрудников
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-card
              hover
              class="mx-auto"
              color="indigo lighten-2"
              dark
              height="100%"
            >
              <v-card-title class="pt-2 pb-1">
                <v-icon
                  dark
                  left
                >
                  mdi-card-text-outline
                </v-icon>
                <span class="font-weight-light card-title">Условие</span>
              </v-card-title>

              <v-card-text class="card-text">
                Недостаточность ресурсов для выполнения задачи
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="6">
            <v-card
              hover
              class="mx-auto"
              color="teal lighten-2"
              dark
              min-height="75px"
            >
              <v-card-title class="pt-2 pb-1">
                <v-icon
                  dark
                  left
                >
                  mdi-card-text-outline
                </v-icon>
                <span class="font-weight-light card-title">Уровень передачи полномочий</span>
              </v-card-title>

              <v-card-text class="card-text">
                Советуюсь и принимаю решение
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12">
            <v-card
              hover
              class="mx-auto"
              color="orange lighten-2"
              dark
              height="100%"
            >
              <v-card-title class="pt-2 pb-1">
                <v-icon
                  dark
                  left
                >
                  mdi-card-text-outline
                </v-icon>
                <span class="font-weight-light card-title">Сотрудник</span>
              </v-card-title>

              <v-card-text class="card-text">
                Опытный сотрудник, почти 7 лет работает в компании. Кандидат на замещение руководящей должности. Сильный, грамотный специалист, уверенный в своем профессионализме. Саботирует все, что расходится с его мнением
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="2">
        <div class="text-center py-4"><h1>‎</h1></div>
        <h2 class="text-center py-8" style="font-weight: 400">Ведущий<br><b>Иванов Иван</b></h2>
        <h2 class="text-center py-8" style="font-weight: 400">До конца игры<br><b>0:31</b></h2>
        <h2 class="text-center pt-8" style="font-weight: 400">Действия</h2>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      panel: 0
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
.card-text{
  font-size: 18pt;
  font-weight: 400;
  color: rgba(255,255,255,0.9)!important;
  line-height: 1.75rem;
}
.v-card{
  height: 100%!important;
}
.card-title{
  font-size: 12pt!important;
}
</style>
