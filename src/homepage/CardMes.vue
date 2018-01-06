<template>
  <v-card class="m-component m-card-mes ma-3" :color="cor">
    <router-link :to="{ name: 'despesas', params: { mes: mes.index } }">
      <v-card-text>
        {{ mes.label }}
      </v-card-text>
    </router-link>
  </v-card>
</template>

<script>
import meses from '@/shared/meses'

export const TIPO_OK = 'ok'
export const TIPO_PENDENTE = 'pendente'
export const TIPO_FUTURO = 'futuro'

export default {
  name: 'MCardMes',
  props: {
    tipo: {
      type: String,
      required: true,
      default: TIPO_FUTURO,
      validator: (valor) => {
        return valor === TIPO_OK
        || valor === TIPO_PENDENTE
        || valor === TIPO_FUTURO
      }
    },
    indiceMes: {
      type: Number,
      required: true,
      validator: (valor) => {
        return meses.map(m => m.index).includes(valor)
      }
    }
  },
  data: () => ({
    corMesOk: 'green accent-4',
    corMesPendente: 'amber lighten-1',
    corMesFuturo: 'grey lighten-3',
  }),
  computed: {
    isOk () {
      return this.tipo === TIPO_OK
    },
    isPendente () {
      return this.tipo === TIPO_PENDENTE
    },
    isFuturo () {
      return this.tipo === TIPO_FUTURO
    },
    mes () {
      return meses.filter(m => m.index === this.indiceMes)[0]
    },
    cor () {
      if (this.isOk) {
        return this.corMesOk
      }

      if (this.isPendente) {
        return this.corMesPendente
      }

      return this.corMesFuturo
    }
  }
}
</script>

<style lang="scss">
  .m-card-mes:hover {
    cursor: pointer;
  }
</style>
