<template>
  <section id="programs" class="py-20 bg-white dark:bg-gray-900 scroll-mt-16 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ $t('programs.title') }}</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-800 to-sky-400 mx-auto mt-4"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{{ $t('programs.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="program in programs"
          :key="program.title"
          class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group"
        >
          <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition" :class="program.iconBg">
            <svg class="w-7 h-7" :class="program.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="program.iconPath" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ program.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ program.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const programs = computed(() => [
  {
    title: t('programs.academic'),
    desc: t('programs.academicDesc'),
    iconBg: 'bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-800 dark:group-hover:bg-sky-500',
    iconColor: 'text-blue-800 dark:text-sky-400 group-hover:text-white',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: t('programs.arts'),
    desc: t('programs.artsDesc'),
    iconBg: 'bg-sky-100 dark:bg-sky-900 group-hover:bg-sky-400 dark:group-hover:bg-sky-500',
    iconColor: 'text-sky-400 group-hover:text-white',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: t('programs.sports'),
    desc: t('programs.sportsDesc'),
    iconBg: 'bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-800 dark:group-hover:bg-sky-500',
    iconColor: 'text-blue-800 dark:text-sky-400 group-hover:text-white',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
])
</script>