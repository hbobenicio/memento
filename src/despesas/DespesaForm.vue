<template>
  <v-card>

    <!-- Título -->
    <v-card-title>
      <span class="headline">{{titulo}}</span>
    </v-card-title>

    <!-- Campos -->
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>

          <v-flex xs12>
            <v-dialog persistent v-model="showModalVencimento" lazy full-width width="290px">
              <v-text-field slot="activator" prepend-icon="event" readonly
                label="Vencimento"
                v-model="formModel.vencimento"
                ></v-text-field>

              <v-date-picker v-model="formModel.vencimento" scrollable actions
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

          <v-flex xs12>
            <v-text-field label="Nome da Despesa" required
              v-model="formModel.nome"
              @change="validarFormulario">
            </v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field label="Responsavel" required
              v-model="formModel.responsavel"
              @change="validarFormulario">
            </v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field label="Valor" prefix="R$" required
              hint="999.99"
              :rules="[rules.required, rules.numerico]"
              v-model="formModel.valor"
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
</template>

<script>
import { schema as DespesaSchema } from '@/despesas/model/despesa.schema'
import DespesaService from './service/despesa.service'

export default {
  name: 'MDespesaForm',

  props: ['despesa'],

  created() {
    if (this.editMode) {
      this.formModel = Object.assign({}, this.despesa)
    }
  },

  data() {
    return {
      showModalVencimento: false,
      despesaValida: false,
      formModel: {
        vencimento: null,
        nome: '',
        responsavel: '',
        valor: '0.0',
        pago: false
      },

      /**
       * Rules for v-text-field validation.
       */
      rules: {
        required: (valor) => !!valor || 'Campo obrigatório.',
        numerico: (valor) => {
          return true
        }
      }
    }
  },

  computed: {
    mode() {
      return this.despesa ? 'edit' : 'new'
    },

    editMode() {
      return this.mode === 'edit'
    },

    newMode() {
      return this.mode === 'new'
    },

    titulo() {
      return this.newMode ? 'Nova Despesa' : 'Editar Despesa'
    }
  },

  methods: {
    onCancelar() {
      this.$router.go(-1)
    },

    onSalvar() {
      // Corrigir Data antes de salvar!
      if (this.newMode) {
        // DespesaService.create(this.formModel)
        //   .then(_ => this.$router.go(-1))
        //   .catch(e => console.error('Error ao criar Despesa.', e))
      } else if (this.editMode) {
        console.log(this.formModel)
        // DespesaService.update(this.formModel.id, this.formModel)
        //   .then(_ => this.$router.go(-1))
        //   .catch(e => console.error('Error ao atualizar Despesa.', e))
      } else {
        throw new Error('Modo Inválido')
      }
    },

    validarFormulario() {
      // TODO Implementar validação (pescar do outro componente...)
    }
  }
}
</script>
