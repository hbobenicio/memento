<template>
  <v-container id="m-home-page" class="m-component m-page">
    {{ titulo }}
    <!-- <router-link to="/despesas">Despesas Page</router-link> -->
  </v-container>
</template>

<script>
export default {
  name: 'MHomePage',
  data: () => ({
    titulo: 'Home Page'
  })
}
</script>

<style lang="scss" scoped>
</style>
