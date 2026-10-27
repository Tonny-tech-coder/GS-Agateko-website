<template>
  <nav class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold text-blue-800 dark:text-sky-400">
            GS Agateko
          </router-link>
        </div>

        <!-- Desktop nav -->
        <div class="hidden md:flex space-x-8">
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="transition text-gray-700 dark:text-gray-300 hover:text-sky-400"
            active-class="text-sky-500 font-semibold"
          >
            {{ $t(link.label) }}
          </router-link>
        </div>

        <div class="flex items-center space-x-2 sm:space-x-4">
          <!-- Language Switcher -->
          <div class="relative">
            <button
              @click.stop="showLanguageDropdown = !showLanguageDropdown"
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition flex items-center space-x-1"
              aria-label="Change language"
              :aria-expanded="showLanguageDropdown"
            >
              <svg class="w-5 h-5 text-blue-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span class="text-sm font-medium hidden sm:inline">{{ getLanguageLabel(currentLocale) }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div v-if="showLanguageDropdown" class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
              <button
                v-for="(label, code) in languageLabels"
                :key="code"
                @click="changeLanguage(code)"
                class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center space-x-2"
                :class="currentLocale === code ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-sky-400' : 'text-gray-700 dark:text-gray-300'"
              >
                <span v-if="currentLocale === code" class="text-green-500">✓</span>
                <span>{{ label }}</span>
              </button>
            </div>
          </div>

          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="!isDark" class="w-5 h-5 text-yellow-500 transition-transform duration-300 hover:rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            <svg v-else class="w-5 h-5 text-sky-400 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>

         <!--this is the hamburger menu button for mobile view-->
          <!-- Hamburger -->
          <button
            @click.stop="showMobileMenu = !showMobileMenu"
            class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            aria-label="Toggle menu"
            :aria-expanded="showMobileMenu"
          >
            <svg v-if="!showMobileMenu" class="w-6 h-6 text-blue-800 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6 text-blue-800 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <div v-if="showMobileMenu" class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div class="px-4 py-4 space-y-3">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          @click="closeMobileMenu"
          class="block transition text-gray-700 dark:text-gray-300 hover:text-sky-400"
          active-class="text-sky-500 font-semibold"
        >
          {{ $t(link.label) }}
        </router-link>
       
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const links = [
  { path: '/',             label: 'nav.home' },
  { path: '/about',        label: 'nav.about' },
  { path: '/programs',     label: 'nav.programs' },
  { path: '/testimonials', label: 'nav.testimonials' },
  { path: '/contact',      label: 'nav.contact' }
]

const isDark = ref(false)
const showLanguageDropdown = ref(false)
const showMobileMenu = ref(false)
const currentLocale = ref(localStorage.getItem('locale') || 'en')

const languageLabels = { en: 'English', fr: 'Français', rw: 'Ikinyarwanda' }

function getLanguageLabel(code) {
  return languageLabels[code] || code
}

function changeLanguage(code) {
  currentLocale.value = code
  locale.value = code
  localStorage.setItem('locale', code)
  document.documentElement.setAttribute('lang', code)
  showLanguageDropdown.value = false
}

function closeMobileMenu() {
  showMobileMenu.value = false
}

function toggleDarkMode() {
  isDark.value = !isDark.value
}

function applyTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

function handleClickOutside(event) {
  if (!event.target.closest('.relative')) showLanguageDropdown.value = false
  if (!event.target.closest('nav')) showMobileMenu.value = false
}

onMounted(() => {
  const savedLocale = localStorage.getItem('locale') || 'en'
  currentLocale.value = savedLocale
  locale.value = savedLocale
  document.documentElement.setAttribute('lang', savedLocale)

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') isDark.value = true
  else if (savedTheme === 'light') isDark.value = false
  else isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches

  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

watch(isDark, (val) => applyTheme(val))
</script>