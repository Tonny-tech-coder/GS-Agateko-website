<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <!-- Navigation -->
    <nav class="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-blue-800 dark:text-sky-400">GS Agateko</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition">{{ $t('nav.home') }}</a>
            <a href="#about" class="text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition">{{ $t('nav.about') }}</a>
            <a href="#programs" class="text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition">{{ $t('nav.programs') }}</a>
            <a href="#testimonials" class="text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition">{{ $t('nav.testimonials') }}</a>
            <a href="#contact" class="text-gray-700 dark:text-gray-300 hover:text-sky-400 dark:hover:text-sky-400 transition">{{ $t('nav.contact') }}</a>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Language Switcher -->
            <div class="relative">
              <button 
                @click="showLanguageDropdown = !showLanguageDropdown"
                class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition flex items-center space-x-1"
              >
                <svg class="w-5 h-5 text-blue-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span class="text-sm font-medium hidden sm:inline">
                  {{ getLanguageLabel(currentLocale) }}
                </span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div 
                v-if="showLanguageDropdown"
                class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700"
              >
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

            <!-- Dark Mode Toggle Button -->
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
            
            <button class="bg-blue-800 dark:bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 dark:hover:bg-sky-700 transition">
              {{ $t('nav.signup') }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- HOME Section -->
    <section id="home" class="pt-32 pb-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 scroll-mt-16 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span class="text-gray-900 dark:text-white">{{ $t('hero.title') }}</span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-400">
                {{ $t('hero.titleHighlight') }}
              </span>
              <span class="text-gray-900 dark:text-white">{{ $t('hero.titleEnd') }}</span>
            </h1>
            <p class="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ $t('hero.description') }}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-400 font-semibold">
                {{ $t('hero.tagline') }}
              </span>
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <button class="bg-gradient-to-r from-blue-800 to-sky-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                {{ $t('hero.getStarted') }}
              </button>
              <button class="border-2 border-blue-800 dark:border-sky-400 text-blue-800 dark:text-sky-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition">
                {{ $t('hero.learnMore') }}
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-800 to-sky-400 rounded-2xl blur-2xl opacity-20"></div>
            <div class="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl transition-colors duration-300">
              <div class="aspect-video rounded-xl overflow-hidden bg-black">
                <video
                  class="w-full h-full object-cover"
                  controls
                  autoplay
                  muted
                  loop
                  playsinline
                >
                  <source src="/Tattoo by King 👑 V (official lyrics video)256k views.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT Section -->
    <section id="about" class="py-20 bg-white dark:bg-gray-900 scroll-mt-16 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ $t('about.title') }}</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-800 to-sky-400 mx-auto mt-4"></div>
          <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('about.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/agteko10.jpg" 
              alt="GS Agateko Campus" 
              class="w-full h-auto object-cover"
              onerror="this.onerror=null; this.src='https://placehold.co/600x400/1e40af/ffffff?text=GS+Agateko+Campus';"
            />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-blue-800 dark:text-sky-400 mb-4">{{ $t('about.mission') }}</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {{ $t('about.missionText') }}
            </p>
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ $t('about.values') }}</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{ $t('about.excellence') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{ $t('about.integrity') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{ $t('about.innovation') }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 dark:text-gray-300">{{ $t('about.community') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-800 dark:text-sky-400">500+</div>
            <div class="text-gray-600 dark:text-gray-400 mt-2">{{ $t('stats.students') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-sky-400">98%</div>
            <div class="text-gray-600 dark:text-gray-400 mt-2">{{ $t('stats.graduation') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-800 dark:text-sky-400">30+</div>
            <div class="text-gray-600 dark:text-gray-400 mt-2">{{ $t('stats.years') }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-sky-400">15+</div>
            <div class="text-gray-600 dark:text-gray-400 mt-2">{{ $t('stats.awards') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROGRAMS Section -->
    <section id="programs" class="py-20 bg-white dark:bg-gray-900 scroll-mt-16 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ $t('programs.title') }}</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-800 to-sky-400 mx-auto mt-4"></div>
          <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('programs.subtitle') }}
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group">
            <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-800 dark:group-hover:bg-sky-500 transition">
              <svg class="w-7 h-7 text-blue-800 dark:text-sky-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('programs.academic') }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('programs.academicDesc') }}</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group">
            <div class="w-14 h-14 bg-sky-100 dark:bg-sky-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-400 dark:group-hover:bg-sky-500 transition">
              <svg class="w-7 h-7 text-sky-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('programs.arts') }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('programs.artsDesc') }}</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group">
            <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-800 dark:group-hover:bg-sky-500 transition">
              <svg class="w-7 h-7 text-blue-800 dark:text-sky-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ $t('programs.sports') }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ $t('programs.sportsDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS Section -->
    <section id="testimonials" class="py-20 bg-gradient-to-br from-blue-800 to-sky-400 text-white scroll-mt-16 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('testimonials.title') }}</h2>
        <div class="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
        <p class="text-blue-100 mb-12 max-w-2xl mx-auto">
          {{ $t('testimonials.subtitle') }}
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <p class="text-lg italic">{{ $t('testimonials.test1') }}</p>
            <div class="mt-4">
              <p class="font-semibold">{{ $t('testimonials.test1Name') }}</p>
              <p class="text-blue-200">{{ $t('testimonials.test1Role') }}</p>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <p class="text-lg italic">{{ $t('testimonials.test2') }}</p>
            <div class="mt-4">
              <p class="font-semibold">{{ $t('testimonials.test2Name') }}</p>
              <p class="text-blue-200">{{ $t('testimonials.test2Role') }}</p>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <p class="text-lg italic">{{ $t('testimonials.test3') }}</p>
            <div class="mt-4">
              <p class="font-semibold">{{ $t('testimonials.test3Name') }}</p>
              <p class="text-blue-200">{{ $t('testimonials.test3Role') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT Section -->
    <section id="contact" class="py-20 bg-white dark:bg-gray-900 scroll-mt-16 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ $t('contact.title') }}</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-800 to-sky-400 mx-auto mt-4"></div>
          <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {{ $t('contact.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <!-- Contact Form -->
          <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-colors duration-300">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{{ $t('contact.name') }}</label>
                <input 
                  type="text" 
                  :placeholder="$t('contact.name')"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-800 dark:focus:ring-sky-400 focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{{ $t('contact.email') }}</label>
                <input 
                  type="email" 
                  :placeholder="$t('contact.email')"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-800 dark:focus:ring-sky-400 focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{{ $t('contact.message') }}</label>
                <textarea 
                  rows="4"
                  :placeholder="$t('contact.message')"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-800 dark:focus:ring-sky-400 focus:border-transparent outline-none transition"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                class="w-full bg-gradient-to-r from-blue-800 to-sky-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {{ $t('contact.send') }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold text-blue-800 dark:text-sky-400 mb-4">{{ $t('contact.info') }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                {{ $t('contact.infoText') }}
              </p>
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

    <!-- Footer -->
    <footer class="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold text-sky-400">GS Agateko</h3>
            <p class="text-gray-400 mt-2">{{ $t('footer.tagline') }}</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">{{ $t('footer.quickLinks') }}</h4>
            <ul class="space-y-1 text-gray-400">
              <li><a href="#about" class="hover:text-sky-400 transition">{{ $t('footer.aboutUs') }}</a></li>
              <li><a href="#programs" class="hover:text-sky-400 transition">{{ $t('footer.programsLink') }}</a></li>
              <li><a href="#contact" class="hover:text-sky-400 transition">{{ $t('footer.contactLink') }}</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">{{ $t('footer.programsFooter') }}</h4>
            <ul class="space-y-1 text-gray-400">
              <li><a href="#programs" class="hover:text-sky-400 transition">{{ $t('footer.academics') }}</a></li>
              <li><a href="#programs" class="hover:text-sky-400 transition">{{ $t('footer.artsFooter') }}</a></li>
              <li><a href="#programs" class="hover:text-sky-400 transition">{{ $t('footer.sportsFooter') }}</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">{{ $t('contact.info') }}</h4>
            <ul class="space-y-1 text-gray-400">
              <li>info@gsagateko.edu</li>
              <li>0727023878</li>
              <li>Jali, Gasabo KIGALI</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 GS Agateko. {{ $t('footer.rights') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// Get i18n instance
const { locale } = useI18n()

// Dark mode state
const isDark = ref(false)

// Language dropdown state
const showLanguageDropdown = ref(false)
const currentLocale = ref(localStorage.getItem('locale') || 'en')

// Language labels
const languageLabels = {
  en: 'English',
  fr: 'Français',
  rw: 'Ikinyarwanda'
}

// Get language label
function getLanguageLabel(code) {
  return languageLabels[code] || code
}

// Change language
function changeLanguage(code) {
  currentLocale.value = code
  locale.value = code
  localStorage.setItem('locale', code)
  showLanguageDropdown.value = false
  console.log('🌍 Language changed to:', code)
}

// Toggle language dropdown
function toggleLanguageDropdown() {
  showLanguageDropdown.value = !showLanguageDropdown.value
}

// Close dropdown when clicking outside
function handleClickOutside(event) {
  const dropdown = event.target.closest('.relative')
  if (!dropdown) {
    showLanguageDropdown.value = false
  }
}

// Toggle dark mode
function toggleDarkMode() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

// Apply theme function
function applyTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Check user's preference on load
onMounted(() => {
  // Load language preference
  const savedLocale = localStorage.getItem('locale') || 'en'
  currentLocale.value = savedLocale
  locale.value = savedLocale
  
  // Load theme preference
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    // Default to light mode
    isDark.value = false
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
  
  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
})

// Watch for changes
watch(isDark, (newValue) => {
  applyTheme(newValue)
})

// Form submission handler
function handleSubmit() {
  alert('Thank you for your message! We will get back to you soon.')
}
</script>