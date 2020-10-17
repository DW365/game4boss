<template>
  <v-container fluid>
    <v-row>
      <v-col md="3">
        <div class="text-center col-title"><h2>Алгоритмы руководителя</h2></div>
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
        <div class="text-center col-title">
          <h2>
            <v-btn
              class="mx-1"
              fab
              outlined
              small
            >
              <v-icon>mdi-eye</v-icon>
            </v-btn>
            <v-btn
              class="mx-1"
              fab
              outlined
              small
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            Управленческий кейс 12 / 12
            <v-btn
              class="mx-1"
              fab
              outlined
              small
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn
              class="mx-1"
              fab
              outlined
              small
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </div>
        <v-row>
          <v-col md="6">
            <Card title="Задача" text="Автоматизировать / Синхронизировать / Интегрировать"
                  color="deep-orange lighten-2"/>
          </v-col>
          <v-col md="6">
            <Card title="Объект" text="Квалификация / Обученность сотрудников" color="pink lighten-2"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <Card title="Условие" text="Недостаточность ресурсов для выполнения задачи" color="indigo lighten-2"/>
          </v-col>
          <v-col md="6">
            <Card title="Уровень передачи полномочий" text="Советуюсь и принимаю решение" color="teal lighten-2"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12">
            <Card title="Сотрудник" text="Опытный сотрудник, почти 7 лет работает в компании. Кандидат на замещение руководящей должности.
                Сильный, грамотный специалист, уверенный в своем профессионализме. Саботирует все, что расходится с его
                мнением" color="orange lighten-2"/>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="2">
        <div class="text-center col-title">
          <h2>
            <v-text-field
              append-outer-icon="mdi-floppy"
              clearable
              type="text"
              class="mt-0 pt-0"
            ></v-text-field>
          </h2>
        </div>
        <div class="pt-13 pb-13">
          <h2 class="text-center pb-2" style="font-weight: 400">Ведущий</h2>
          <h2 class="text-center"><b>Иванов Иван</b></h2></div>
        <div class="pt-12 pb-16">
          <h2 class=" text-center justify-center" style="font-weight: 400">До конца игры
            <v-btn
              fab
              outlined
              x-small
            >
              <v-icon>mdi-pause</v-icon>
            </v-btn>
          </h2>
          <v-row no-gutters>
            <v-col></v-col>
            <v-col>
              <v-text-field
                type="time"
                value="12:30:00"
                style="width: 3em; font-size: 1.5em; font-weight: 600"
              >
              </v-text-field>
            </v-col>
            <v-col></v-col>
          </v-row>
        </div>
        <div class="pt-3">
          <h2 class="text-center pb-2" style="font-weight: 400">Ссылка
            <v-btn
              fab
              outlined
              x-small
            >
              <v-icon>mdi-reload</v-icon>
            </v-btn>
            <br></h2>
          <h3 class="text-center"><b>game4boss.ru/X6J5W2</b></h3>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Card from '@/components/Card'

export default {
  components: { Card }
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
