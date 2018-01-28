<template>
  <div id="app" class="m-app">
    <v-app>
      <v-content>
        <v-container fluid>
          <main>
            <router-view></router-view>
          </main>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
  })
}
</script>
