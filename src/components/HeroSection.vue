<template>
  <section
    id="home"
    class="relative min-h-screen flex items-center pt-32 pb-20 scroll-mt-16 transition-colors duration-300 bg-cover bg-center bg-no-repeat"
    style="background-image: url('/new home pic.png');"
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
  <!-- News section -->
  <section class="bg-gray-50 py-16 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-7xl">

    <!-- Heading -->
    <div class="text-center mb-12">
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
        Latest News from GS Agateko
      </h2>
      <p class="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
        Stay updated with what's happening at our school.
      </p>
    </div>

    <!-- News grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

      <!-- Card 1 -->
      <article class="group bg-white rounded-2xl shadow-sm hover:shadow-lg dark:shadow-gray-950/50  transition-shadow duration-300 overflow-hidden flex flex-col">
        <img
          src="/src/assets/new home pic.png"
          alt="Students celebrating exam results"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div class="p-5 flex flex-col flex-1">
          <time datetime="2026-11-15" class="text-xs font-medium text-blue-600 uppercase tracking-wide">
            15 Nov 2026
          </time>
          <h3 class="mt-2 text-lg font-semibold text-gray-900">
            National Exam Results Released
          </h3>
          <p class="mt-2 text-sm text-gray-600 flex-1">
            GS Agateko celebrates another strong performance in this year's national exams...
          </p>
          <a href="/news/exam-results"
             class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
            Read more
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </article>

      <!-- Card 2 -->
      <article class="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
        <img src="/src/assets/new home pic.png" alt="Students at sports day"
             class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div class="p-5 flex flex-col flex-1">
          <time datetime="2026-11-08" class="text-xs font-medium text-blue-600 uppercase tracking-wide">
            08 Nov 2026
          </time>
          <h3 class="mt-2 text-lg font-semibold text-gray-900">Annual Sports Day</h3>
          <p class="mt-2 text-sm text-gray-600 flex-1">
            A full day of athletics, teamwork, and house competitions across all grades...
          </p>
          <a href="/news/sports-day"
             class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
            Read more
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </article>

      <!-- Card 3 -->
      <article class="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
        <img src="/src/assets/new home pic.png" alt="New school library"
             class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div class="p-5 flex flex-col flex-1">
          <time datetime="2026-10-30" class="text-xs font-medium text-blue-600 uppercase tracking-wide">
            30 Oct 2026
          </time>
          <h3 class="mt-2 text-lg font-semibold text-gray-900">New Library Opens</h3>
          <p class="mt-2 text-sm text-gray-600 flex-1">
            Our new library is now open with over 5,000 books and quiet study spaces...
          </p>
          <a href="/news/new-library"
             class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
            Read more
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </article>

    </div>

    <!-- View all -->
    <div class="mt-12 text-center">
      <a href="/news"
         class="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
        View all news
      </a>
    </div>
  </div>
</section>
  
</template>