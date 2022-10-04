const app = Vue.createApp({
  data() {
    return {
      lines: ''
    }
  },
  computed: {
    message: function() {
      return this.lines.replace(/\n/g, '<br>');
    }
  }
})

const vm = app.mount("#app")