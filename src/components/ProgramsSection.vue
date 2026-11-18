<template>
  <section id="programs" class="py-20 bg-white dark:bg-gray-900 scroll-mt-16 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{{ $t('programs.title') }}</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-800 to-sky-400 mx-auto mt-4"></div>
        <p class="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{{ $t('programs.subtitle') }}</p>
      </div>

      <!-- <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="program in programs"
          :key="program.title"
          class="bg-white  p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group"
        ><img src="/src/assets/new home pic.png" alt="New school library"
        
        
          
        
             class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <!--text is controlled here-->
          <!-- <h3 class="text-xl font-bold text-gray-900 mb-2">{{ program.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ program.desc }}</p>
        </div>
      </div> -->
 


      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <!-- Academic Excellence -->
<article class="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
  
  <!-- Relative wrapper for the icon -->
  <div class="relative">
    <img src="/src/assets/new home pic.png" alt="Academic Excellence"
         class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    
    <!-- Top-Right Icon (Graduation Cap) -->
    <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-blue-600">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    </div>
  </div>

  <div class="p-5 flex flex-col flex-1">
    <h3 class="mt-2 text-lg font-semibold text-gray-900">Academic Excellence</h3>
    
    <p class="mt-2 text-sm text-gray-600 flex-1">
      Rigorous curriculum designed to challenge and inspire students to reach their full potential under O level and primary level.
    </p>

    <div v-show="isExpanded" class="mt-3 text-sm text-gray-600 border-t border-gray-100 pt-3">
      <p>
        Our teachers use modern teaching methods and continuous assessment to ensure every student succeeds. We offer a wide range of subjects, extracurricular activities, and dedicated mentoring to prepare students for national exams and beyond.
      </p>
    </div>

    <button 
      @click="isExpanded = !isExpanded"
      class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
    >
      {{ isExpanded ? 'Show less' : 'Read more' }}
      <svg class="ml-1 w-4 h-4 transition-transform duration-300" :class="{ 'rotate-90': isExpandedAcademic }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</article>
     <!-- Art & basic Ict -->
<article class="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
  
  <!-- 1. Wrap the image in a relative container -->
  <div class="relative">
    <img src="/src/assets/new home pic.png" alt="Arts and Basic ICT"
         class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    
    <!-- 2. The Top-Right Icon -->
    <!-- 'absolute top-3 right-3' pins it to the corner. 'bg-white/90' makes it a slightly see-through white box so it's visible on any image. -->
    <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-blue-600">
      <!-- Example: A paint palette icon for Arts, or a computer icon for ICT -->
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    </div>
  </div>

  <div class="p-5 flex flex-col flex-1">
    <h3 class="mt-2 text-lg font-semibold text-gray-900">Arts & Basic ICT</h3>
    
    <p class="mt-2 text-sm text-gray-600 flex-1">
      Creative programs in music, drama, visual arts and technology that foster self-expression and cultural appreciation.
    </p>

    <div v-show="isExpandedArts" class="mt-3 text-sm text-gray-600 border-t border-gray-100 pt-3">
      <p>
        Our arts and ICT programs give students the tools to express themselves creatively while learning essential digital skills. From traditional dance and painting to basic coding and computer literacy, we prepare students for a modern, digital world.
      </p>
    </div>

    <button 
      @click="isExpandedArts = !isExpandedArts"
      class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
    >
      {{ isExpandedArts ? 'Show less' : 'Read more' }}
      <svg class="ml-1 w-4 h-4 transition-transform duration-300" :class="{ 'rotate-90': isExpandedArts }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</article>
      <!-- Sports & Athletics -->
<article class="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
  
  <!-- Relative wrapper for the icon -->
  <div class="relative">
    <img src="/src/assets/new home pic.png" alt="Sports and Athletics"
         class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    
    <!-- Top-Right Icon (Trophy) -->
    <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-blue-600">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    </div>
  </div>

  <div class="p-5 flex flex-col flex-1">
    <h3 class="mt-2 text-lg font-semibold text-gray-900">Sports & Athletics</h3>
    
    <p class="mt-2 text-sm text-gray-600 flex-1">
      Comprehensive athletic programs that build teamwork, discipline, and physical fitness.
    </p>

    <div v-show="isExpandedSports" class="mt-3 text-sm text-gray-600 border-t border-gray-100 pt-3">
      <p>
        Our students participate in football, basketball, volleyball, and track events. We believe that physical education is just as important as academics, helping students develop leadership skills and healthy habits that last a lifetime.
      </p>
    </div>

    <button 
      @click="isExpandedSports = !isExpandedSports"
      class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
    >
      {{ isExpandedSports ? 'Show less' : 'Read more' }}
      <svg class="ml-1 w-4 h-4 transition-transform duration-300" :class="{ 'rotate-90': isExpandedSports }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</article>
      </div>
      <!---->
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';
// <!-this is for our read button-->


// State to track if the content is visible
const isExpanded = ref(false);
// State for Sports & Athletics
const isExpandedSports = ref(false);

// State for Arts & Basic ICT
const isExpandedArts = ref(false);


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