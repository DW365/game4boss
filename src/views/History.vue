<template>
  <v-container fill-height>
    <v-row align="self-center" class="pt-8">
      <v-expansion-panels focusable inset>
        <v-expansion-panel
          v-for="(item,i) in 8"
          :key="i"
        >
          <v-expansion-panel-header>
            <div>
              <v-btn fab outlined small color="indigo accent-3"  to="/history/16" target="_blank">
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </div>

            <div class="text-right"><span style="color: rgba(0,0,0,0.5)">09.10.20</span> <b
              style="color: #606060">20:55</b></div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-banner
              v-for="(item,i) in 8"
              :key="i"
              single-line
            >
              <v-icon>
                mdi-card-text-outline
              </v-icon>
              Вася Васчекин

              <template v-slot:actions>
                <v-btn fab outlined small color="indigo accent-3" to="/history/16/1" target="_blank">
                  <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
                <v-btn fab outlined small color="blue accent-2">
                  <v-icon>mdi-cloud-download</v-icon>
                </v-btn>
                <v-btn fab outlined small color="red">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
            </v-banner>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <v-row class="text-center" justify="center" align="self-end">
      <v-pagination
        v-model="page"
        class="my-3"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </v-row>
  </v-container>
</template>

<style>
</style>
<script>
export default {}
</script>
