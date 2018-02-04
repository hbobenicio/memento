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

            <!-- Vencimento -->
            <v-flex xs12>
              <v-dialog persistent v-model="showModalVencimento" lazy full-width width="290px">
                <v-text-field slot="activator" prepend-icon="event" readonly
                  label="Vencimento"
                  v-model="novaDespesa.vencimento"
                  @change="validarFormulario"
                  ></v-text-field>

                <v-date-picker v-model="novaDespesa.vencimento" scrollable actions
                  locale="pt-br">
                  <template slot-scope="{ save, cancel }">
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn flat color="red" @click="cancel">Cancelar</v-btn>
                      <v-btn flat color="primary" @click="save">Salvar</v-btn>
                    </v-card-actions>
                  </template>
                </v-date-picker>
              </v-dialog>
            </v-flex>

            <!-- Nome -->
            <v-flex xs12>
              <v-text-field label="Nome da Despesa" required
                v-model="novaDespesa.nome"
                @change="validarFormulario">
              </v-text-field>
            </v-flex>

            <!-- Responsável -->
            <v-flex xs12>
              <v-text-field label="Responsavel" required
                v-model="novaDespesa.responsavel"
                @change="validarFormulario">
              </v-text-field>
            </v-flex>

            <!-- Valor -->
            <v-flex xs12>
              <v-text-field label="Valor" prefix="R$" required
                hint="999.99"
                :rules="[rules.required, rules.numerico]"
                v-model="novaDespesa.valor"
                @change="validarFormulario" />
            </v-flex>
          </v-layout>
        </v-container>

        <small class="red--text">*campos obrigatórios</small>
      </v-card-text>

      <!-- Ações -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat color="red" @click.native="onCancelar">Cancelar</v-btn>
        <v-btn flat color="blue darken-1"
          :disabled="!despesaValida"
          @click.native="onSalvar">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { schema as DespesaSchema } from '@/despesas/model/despesa.schema'

export default {
  name: 'MNovaDespesaDialog',
  data: () => ({
    showDialog: false,
    showModalVencimento: false,
    despesaValida: false,
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
    },
    despesaConvertida () {
      return {
        ...this.novaDespesa,
        mes: this.codigoMesInt,
        valor: this.novaDespesaValorFloat
      }
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
    validarFormulario () {
      const despesa = DespesaSchema.cast(this.despesaConvertida)

      DespesaSchema.isValid(despesa)
        .then(validado => this.despesaValida = validado)
        .catch(err => {
          console.log(err)
          this.despesaValida = false
        })
    },
    onSalvar () {
      const despesa = DespesaSchema.cast(this.despesaConvertida)

      this.hide()
      this.$emit('salvar', despesa)
    }
  }
}
</script>
