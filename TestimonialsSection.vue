<template>
  <section id="testimonials" class="py-20 bg-gradient-to-br from-blue-800 to-sky-400 text-white scroll-mt-16 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('testimonials.title') }}</h2>
      <div class="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
      <p class="text-blue-100 mb-12 max-w-2xl mx-auto">{{ $t('testimonials.subtitle') }}</p>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
          <p class="text-lg italic">{{ testimonial.quote }}</p>
          <div class="mt-4">
            <p class="font-semibold">{{ testimonial.name }}</p>
            <p class="text-blue-200">{{ testimonial.role }}</p>
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

const testimonials = computed(() => [
  { quote: t('testimonials.test1'), name: t('testimonials.test1Name'), role: t('testimonials.test1Role') },
  { quote: t('testimonials.test2'), name: t('testimonials.test2Name'), role: t('testimonials.test2Role') },
  { quote: t('testimonials.test3'), name: t('testimonials.test3Name'), role: t('testimonials.test3Role') }
])
</script>