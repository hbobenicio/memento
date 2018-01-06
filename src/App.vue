<template>
  <div id="app" class="m-app">
    <v-app>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    msg: 'Welcome to Your Vue.js App'
  })
}
</script>

<style lang="scss">
</style>
