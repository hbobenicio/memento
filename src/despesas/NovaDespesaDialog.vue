<template>
  <v-dialog class="m-component m-dialog m-nova-despesa-dialog"
    v-model="showDialog" max-width="500px">

    <v-card>

      <!-- Título -->
      <v-card-title>
        <span class="headline">Adicionar Despesa</span>
      </v-card-title>

      <!-- Formulário -->
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Vencimento" prepend-icon="event" hint="dd/mm/aaaa" required
                v-model="novaDespesa.vencimento">
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Nome da Despesa" required
                v-model="novaDespesa.nome">
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Responsavel" required
                v-model="novaDespesa.responsavel"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Valor" prefix="R$" required
                hint="999.99"
                :rules="[rules.required, rules.numerico]"
                v-model="novaDespesa.valor" />
            </v-flex>
          </v-layout>
        </v-container>
        <small class="red--text">*campos obrigatórios</small>
      </v-card-text>

      <!-- Ações -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click.native="onCancelar">Cancelar</v-btn>
        <v-btn color="blue darken-1" flat @click.native="onSalvar">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'MNovaDespesaDialog',
  data: () => ({
    showDialog: false,
    novaDespesa: {
      vencimento: null,
      nome: '',
      responsavel: '',
      valor: '0.0',
      pago: false
    },
    rules: {
      required: (valor) => !!valor || 'Campo obrigatório.',
      numerico: (valor) => {
        return true
      }
    },
  }),
  computed: {
    codigoMes () {
      return this.$route.params.mes
    },
    codigoMesInt () {
      return parseInt(this.codigoMes)
    },
    novaDespesaValorFloat () {
      return parseFloat(this.novaDespesa.valor)
    }
  },
  methods: {
    show () {
      this.showDialog = true
    },
    hide () {
      this.showDialog = false
    },
    onCancelar () {
      this.hide()
      this.$emit('cancelar')
    },
    onSalvar () {
      const despesa = {
        ...this.novaDespesa,
        mes: this.codigoMesInt,
        valor: this.novaDespesaValorFloat
      }

      this.hide()
      this.$emit('salvar', despesa)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
