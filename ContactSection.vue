<template>
  <section id="contact" class="py-20 bg-white dark:bg-gray-900 scroll-mt-16 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ $t('contact.title') }}</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-800 to-sky-400 mx-auto mt-4"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{{ $t('contact.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-300">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{{ $t('contact.name') }}</label>
              <input id="name" v-model="form.name" type="text" :placeholder="$t('contact.name')" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-800 dark:focus:ring-sky-400 focus:border-transparent outline-none transition" required />
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{{ $t('contact.email') }}</label>
              <input id="email" v-model="form.email" type="email" :placeholder="$t('contact.email')" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-800 dark:focus:ring-sky-400 focus:border-transparent outline-none transition" required />
            </div>
            <div>
              <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{{ $t('contact.message') }}</label>
              <textarea id="message" v-model="form.message" rows="4" :placeholder="$t('contact.message')" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-800 dark:focus:ring-sky-400 focus:border-transparent outline-none transition" required></textarea>
            </div>
            <button type="submit" :disabled="isSubmitting" class="w-full bg-gradient-to-r from-blue-800 to-sky-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
              {{ isSubmitting ? 'Sending...' : $t('contact.send') }}
            </button>
          </form>
        </div>

        <div class="space-y-6">
          <div>
            <h3 class="text-2xl font-bold text-blue-800 dark:text-sky-400 mb-4">{{ $t('contact.info') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">{{ $t('contact.infoText') }}</p>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
              <svg class="w-6 h-6 text-blue-800 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t('contact.address') }}</h4>
              <p class="text-gray-600 dark:text-gray-400">Jali, Gasabo<br />KIGALI, Rwanda</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
              <svg class="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t('contact.emailLabel') }}</h4>
              <p class="text-gray-600 dark:text-gray-400">info@gsagateko.edu</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
              <svg class="w-6 h-6 text-blue-800 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ $t('contact.phone') }}</h4>
              <p class="text-gray-600 dark:text-gray-400">0727023878</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isSubmitting = ref(false)
const form = ref({ name: '', email: '', message: '' })

async function handleSubmit() {
  isSubmitting.value = true
  try {
    await new Promise(r => setTimeout(r, 600))
    alert('Thank you for your message! We will get back to you soon.')
    form.value = { name: '', email: '', message: '' }
  } finally {
    isSubmitting.value = false
  }
}
</script>