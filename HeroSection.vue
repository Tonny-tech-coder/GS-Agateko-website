<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center pt-32 pb-20 scroll-mt-16 transition-colors duration-300 bg-cover bg-center bg-no-repeat"
    style="background-image: url('/src/assets/new home pic.png');"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/100 via-sky-400/60 to-sky-500/80 dark:from-gray-900/90 dark:via-gray-600/80 dark:to-blue-900/80"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          <span>{{ $t('hero.title') }}</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">
            {{ $t('hero.titleHighlight') }}
          </span>
          <span>{{ $t('hero.titleEnd') }}</span>
        </h1>
        <p class="mt-6 text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl">
          {{ $t('hero.description') }}
          <span class="text-sky-200 font-semibold">{{ $t('hero.tagline') }}</span>
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#contact" class="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-sky-100 hover:scale-105 transition-all duration-300 shadow-lg">
            {{ $t('hero.getStarted') }}
          </a>
          <a href="#about" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
            {{ $t('hero.learnMore') }}
          </a>
        </div>

        <div class="mt-12 grid grid-cols-3 gap-6 max-w-lg text-white">
          <div>
            <div class="text-3xl font-bold">500+</div>
            <div class="text-sm text-blue-100">{{ $t('stats.students') }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold">98%</div>
            <div class="text-sm text-blue-100">{{ $t('stats.graduation') }}</div>
          </div>
          <div>
            <div class="text-3xl font-bold">30+</div>
            <div class="text-sm text-blue-100">{{ $t('stats.years') }}</div>
          </div>
        </div>
      </div>
    </div>

    <a href="#about" class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition animate-bounce" aria-label="Scroll to about section">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </a>
  </section>
</template>