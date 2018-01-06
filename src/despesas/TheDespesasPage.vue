<template>
  <v-container id="m-despesas-page" class="m-component m-page">
    <v-layout row wrap>
      <v-flex xs12>
        <!-- <header>
          <h1 class="text-xs-center">
            {{ $route.params.mes.label }}
          </h1>
        </header> -->
        <v-toolbar color="light-blue" light extended>
          <v-toolbar-title slot="extension" class="white--text">
            {{ labelMes }}
          </v-toolbar-title>
          <v-btn fab medium dark color="indigo" bottom right absolute @click="adicionarDespesa">
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-data-table id="despesasTable"
          :headers="tabelaDespesas.headers"
          :items="tabelaDespesas.items"
          hide-actions
          class="elevation-1">
          <template slot="headers" slot-scope="props" class="text-xs-center ">
            <tr>
              <th v-for="(header, index) in props.headers" :key="index">
                {{header.text}}
              </th>
            </tr>
          </template>
          <template slot="items" slot-scope="props">
            <td :class="{pago: props.item.pago, green: props.item.pago, amber: !props.item.pago}" class="text-xs-center lighten-4">{{ props.item.id }}</td>
            <td :class="{pago: props.item.pago, green: props.item.pago, amber: !props.item.pago}" class="text-xs-center lighten-4">{{ props.item.vencimento }}</td>
            <td :class="{pago: props.item.pago, green: props.item.pago, amber: !props.item.pago}" class="text-xs-center lighten-4">{{ props.item.nome }}</td>
            <td :class="{pago: props.item.pago, green: props.item.pago, amber: !props.item.pago}" class="text-xs-center lighten-4">{{ props.item.responsavel }}</td>
            <td :class="{pago: props.item.pago, green: props.item.pago, amber: !props.item.pago}" class="text-xs-center lighten-4">{{ props.item.valor }}</td>
            <td :class="{pago: props.item.pago, green: props.item.pago, amber: !props.item.pago}" class="text-xs-center lighten-4">
              <v-switch v-model="props.item.pago"></v-switch>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>

    <v-dialog v-model="novaDespesaDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Adicionar Despesa</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Vencimento" prepend-icon="event" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Nome da Despesa" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Responsavel" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Valor (em R$)" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="novaDespesaDialog = false">Cancelar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="novaDespesaDialog = false">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import meses from '@/shared/meses'

export default {
  name: 'MDespesasPage',
  data: () => ({
    despesas: [
      { id: 1, vencimento: '01/01/2018', nome: 'Agua', responsavel: 'Hugo', valor: 50.75, pago: true },
      { id: 2, vencimento: '02/01/2018', nome: 'Luz', responsavel: 'Hugo', valor: 75.75, pago: false },
      { id: 3, vencimento: '03/01/2018', nome: 'Telefone', responsavel: 'Janaina', valor: 100.75, pago: false },
    ],
    pagination: {
      sortBy: 'pago'
    },
    novaDespesaDialog: false,
    novaDespesaVencimento: null
  }),
  computed: {
    labelMes () {
      return meses.filter(m => m.index == this.$route.params.mes)[0].label
    },
    despesasOrdenadas () {
      return this.despesas.sort((x, y) => {
        if (x.pago === y.pago) {
          return (x.vencimento < y.vencimento) ? -1 : 1
        }
        return (!x.pago && y.pago) ? -1 : 1
      })
    },
    tabelaDespesas () {
      return {
        headers: [
          { text: 'Id', value: 'id' },
          { text: 'Vencimento', value: 'vencimento' },
          { text: 'Nome', value: 'nome' },
          { text: 'Responsável', value: 'responsavel' },
          { text: 'Valor', value: 'valor' },
          { text: 'Status', value: 'status' }
        ],
        items: this.despesasOrdenadas
      }
    }
  },
  methods: {
    adicionarDespesa () {
      this.novaDespesaDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
  .pago {
    text-decoration: line-through !important;
  }
</style>
