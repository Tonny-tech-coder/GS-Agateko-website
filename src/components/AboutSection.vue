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
  <!-- History Section -->
<section class="py-16 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <!-- Left Side: Text & Timeline -->
      <div>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Our Rich History
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Founded in [Year], GS Agateko has been a cornerstone of education in our community. What started as a small vision to provide quality education has grown into a thriving institution shaping the leaders of tomorrow.
        </p>

        <!-- Simple Timeline -->
        <div class="space-y-6 border-l-2 border-blue-500 dark:border-sky-400 pl-6 ml-2">
          
          <!-- Timeline Item 1 -->
          <div class="relative">
            <!-- Dot -->
            <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 dark:bg-sky-400 border-4 border-white dark:border-gray-900"></div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">The Beginning</h4>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              Opened its doors to the first group of students, laying the foundation for academic excellence.
            </p>
          </div>

          <!-- Timeline Item 2 -->
          <div class="relative">
            <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 dark:bg-sky-400 border-4 border-white dark:border-gray-900"></div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Expansion</h4>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              Added new classrooms, science laboratories, and a library to support our growing student body.
            </p>
          </div>

          <!-- Timeline Item 3 -->
          <div class="relative">
            <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 dark:bg-sky-400 border-4 border-white dark:border-gray-900"></div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Today</h4>
            <p class="text-gray-600 dark:text-gray-400 mt-1">
              Recognized as a leading school, consistently achieving top results in national examinations.
            </p>
          </div>

        </div>
      </div>

      <!-- Right Side: Image -->
      <div class="relative">
        <!-- Decorative background shape -->
        <div class="absolute inset-0 bg-blue-100 dark:bg-sky-900/30 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
        
        <img 
          src="/src/assets/new home pic.png" 
          alt="GS Agateko Historic Building" 
          class="rounded-3xl shadow-xl w-full object-cover h-[400px] lg:h-[500px]"
          loading="lazy"
        />
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