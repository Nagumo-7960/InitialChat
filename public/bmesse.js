Vue.createApp({
  data: function() {
    return {
      lines: 'Hello Vue.js!'
    }
  },
  computed: {
    message: function() {
      return this.lines.replace(/\n/g, '<br>');
    }
  }
}).mount('#app')