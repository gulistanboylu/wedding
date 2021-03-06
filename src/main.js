import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './language.js'
import App from './App.vue'

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app');