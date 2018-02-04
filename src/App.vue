<template>
  <div id="app" class="m-app">
    <v-app>
      <v-content>
        <v-container fluid>
          <main>
            <v-snackbar :timeout="3000" top v-model="showSnackbar">
              {{ snackMsg }}
            </v-snackbar>

            <router-view></router-view>
          </main>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import SnackbarEventBus from '@/shared/event-bus/snackbar.event-bus'

export default {
  name: 'app',

  created () {
    SnackbarEventBus.onSnack(this.onSnack)
  },

  data: () => ({
    showSnackbar: false,
    snackMsg: ''
  }),

  methods: {
    onSnack (msg) {
      this.snackMsg = msg
      this.showSnackbar = true
    }
  },
}
</script>
