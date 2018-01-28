<template>
  <div id="m-home-page" class="m-component m-page grey lighten-3" fluid>
    <MHomePageTitle />

    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 class="text-xs-center" v-for="mes in meses" :key="mes.index">
          <MCardMes :tipo="tipoPendencias[mes.index - 1]" :indiceMes="mes.index" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HomePageTitle from '@/homepage/TheHomePageTitle.vue'
import CardMes from '@/homepage/CardMes.vue'
import meses from '@/shared/meses'

import DespesaService from '@/despesas/service/despesa.service'

export default {
  name: 'MHomePage',
  components: {
    [HomePageTitle.name]: HomePageTitle,
    [CardMes.name]: CardMes
  },
  created () {
    this.listarDespesas()
  },
  data: () => ({
    titulo: 'Home Page',
    corMesOk: 'green accent-4',
    corMesPendente: 'amber lighten-1',
    corMesFuturo: 'grey lighten-3',
    meses,
    despesas: [],
    tipoPendencias: [
      'ok', 'pendente', 'futuro', 'futuro', 'futuro', 'futuro', 'futuro', 'futuro', 'futuro', 'futuro', 'futuro', 'futuro'
    ]
  }),
  methods: {
    listarDespesas () {
      DespesaService.all()
        .then(despesas => {
          this.despesas = despesas

        })
        .catch(error => {
          this.snackWithMsg('Erro ao recuperar a lista de despesas')
          console.error('Erro: ', error)
          this.despesas = []
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-home-page-title {
    display: block;
    width: 100%;
  }
</style>
