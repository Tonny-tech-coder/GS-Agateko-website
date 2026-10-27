<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900 scroll-mt-16 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ $t('about.title') }}</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-800 to-sky-400 mx-auto mt-4"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{{ $t('about.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/src/assets/new.png"
            alt="GS Agateko Campus"
            class="w-full h-auto object-cover"
            loading="lazy"
            onerror="this.onerror=null; this.src='https://placehold.co/600x400/1e40af/ffffff?text=GS+Agateko+Campus';"
          />
        </div>
        <div>
          <h3 class="text-2xl font-bold text-blue-800 dark:text-sky-400 mb-4">{{ $t('about.mission') }}</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{{ $t('about.missionText') }}</p>
          <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ $t('about.values') }}</h4>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="value in values" :key="value" class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-700 dark:text-gray-300">{{ value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const values = computed(() => [
  t('about.excellence'),
  t('about.integrity'),
  t('about.innovation'),
  t('about.community')
])
</script>