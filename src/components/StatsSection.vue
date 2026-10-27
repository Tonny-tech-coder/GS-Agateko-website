<template>
  <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-4xl font-bold" :class="stat.alt ? 'text-sky-400' : 'text-blue-800 dark:text-sky-400'">{{ stat.value }}</div>
          <div class="text-gray-600 dark:text-gray-400 mt-2">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const stats = computed(() => [
  { value: '500+', label: t('stats.students'), alt: false },
  { value: '98%',  label: t('stats.graduation'), alt: true },
  { value: '30+',  label: t('stats.years'), alt: false },
  { value: '15+',  label: t('stats.awards'), alt: true }
])
</script>