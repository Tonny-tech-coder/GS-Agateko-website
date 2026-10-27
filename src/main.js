import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

// Import language files
import en from './locales/en.js'
import fr from './locales/fr.js'
import rw from './locales/rw.js'

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
    rw
  }
})

const app = createApp(App)

app.use(i18n)
app.use(router) 
app.mount('#app')