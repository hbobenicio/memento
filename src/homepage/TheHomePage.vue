<template>
  <section id="m-home-page" class="m-component m-page">
    <v-layout row wrap>
      <v-flex xs12>
        <header>
          <h1 class="text-xs-center">Memento</h1>
        </header>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 class="text-xs-center" v-for="mes in meses" :key="mes.index">
        <MCardMes :tipo="mes.index === 1 ? 'ok' : 'futuro'" :indiceMes="mes.index" />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import CardMes from '@/homepage/CardMes.vue'
import meses from '@/shared/meses'

export default {
  name: 'MHomePage',
  components: {
    [CardMes.name]: CardMes
  },
  data: () => ({
    titulo: 'Home Page',
    corMesOk: 'green accent-4',
    corMesPendente: 'amber lighten-1',
    corMesFuturo: 'grey lighten-3',
    meses
  })
}
</script>

<style lang="scss" scoped>
  .m-card-mes {
    height: 50px !important;
  }
</style>
