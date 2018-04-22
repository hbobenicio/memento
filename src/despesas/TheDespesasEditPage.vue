<template>
  <section id="m-despesas-edit-page" class="m-component m-page">

    <!-- Breadcrumbs de navegação -->
    <v-breadcrumbs>
      <v-icon slot="divider">chevron_right</v-icon>
      <v-breadcrumbs-item href="/">
        Home Page
      </v-breadcrumbs-item>
    </v-breadcrumbs>

    <v-layout row wrap>

      <!-- Formulário de Despesa -->
      <v-flex xs12>
        <p>Edit Despesa: {{ this.$route.params.despesaId }}</p>
      </v-flex>
    </v-layout>

  </section>
</template>

<script>
import DespesaService from '@/despesas/service/despesa.service'

export default {
  name: 'MDespesasEditPage',

  created () {
    // DespesaService.findById()
  }
}
</script>
