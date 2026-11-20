<template>
  <!-- Hero Section -->
  <section
    id="home"
    class="relative min-h-screen flex items-center pt-32 pb-20 scroll-mt-16 transition-colors duration-300 bg-cover bg-center bg-no-repeat"
    style="background-image: url('/new home pic.png');"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/100 via-sky-400/60 to-sky-500/80 dark:from-gray-900/90 dark:via-gray-600/80 dark:to-blue-900/80"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[4.5rem]">
          <!-- The typing text parts -->
          <span>{{ typedTitle }}</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">
            {{ typedHighlight }}
          </span>
          <span>{{ typedEnd }}</span>
          
          <!-- A blinking cursor for realism -->
          <span class="inline-block w-1 h-8 md:h-10 lg:h-12 bg-sky-300 ml-2 animate-pulse align-middle"></span>
        </h1>
        
        <p class="mt-6 text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl">
          {{ $t('hero.description') }}
          <span class="text-sky-200 font-semibold">{{ $t('hero.tagline') }}</span>
        </p>

        <!-- THE BUTTONS -->
        <div class="mt-8 flex flex-wrap gap-4">
          <button 
            @click="showRegistrationForm = true" 
            class="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-sky-100 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
          >
            {{ $t('hero.getStarted') }}
          </button>
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
            loading="lazy"
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
            <a href="/src/components/news/Exams-results.vue"
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
          <img 
           src="/src/assets/new home pic.png"
           alt="Students at sports day"  
           loading="lazy" 
               class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="p-5 flex flex-col flex-1">
            <time datetime="2026-11-08" class="text-xs font-medium text-blue-600 uppercase tracking-wide">
              08 Nov 2026
            </time>
            <h3 class="mt-2 text-lg font-semibold text-gray-900">Annual Sports Day</h3>
            <p class="mt-2 text-sm text-gray-600 flex-1">
              A full day of athletics, teamwork, and house competitions across all grades...
            </p>
            <a href="/src/components/news/sports-day.vue"
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
          <img 
          src="/src/assets/new home pic.png" 
          alt="New school library"
           loading="lazy" 
               class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div class="p-5 flex flex-col flex-1">
            <time datetime="2026-10-30" class="text-xs font-medium text-blue-600 uppercase tracking-wide">
              30 Oct 2026
            </time>
            <h3 class="mt-2 text-lg font-semibold text-gray-900">New Library Opens</h3>
            <p class="mt-2 text-sm text-gray-600 flex-1">
              Our new library is now open with over 5,000 books and quiet study spaces...
            </p>
            <a href="/src/components/news/new-library.vue"
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

  <!-- ========================================== -->
  <!-- REGISTRATION MODAL (Placed at the very bottom) -->
  <!-- ========================================== -->
  <div v-if="showRegistrationForm" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl my-8 relative">
      
      <!-- Close Button -->
      <button @click="showRegistrationForm = false" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div class="p-6 sm:p-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Student Registration Form</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Please fill out all required fields to register a new student.</p>
        
        <!-- Success Message -->
        <div v-if="formSubmitted" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
          Registration submitted successfully! The administration will review the application and contact you soon.
        </div>

        <form @submit.prevent="submitRegistration" class="space-y-6">
          
          <!-- SECTION 1: Student Details -->
          <div>
            <h3 class="text-lg font-semibold text-blue-800 dark:text-sky-400 mb-3 border-b pb-1 dark:border-gray-700">1. Student Details</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name *</label>
                <input v-model="formData.firstName" type="text" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name *</label>
                <input v-model="formData.lastName" type="text" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date of Birth *</label>
                <input v-model="formData.dob" type="date" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Gender *</label>
                <select v-model="formData.gender" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Applying for Class/Grade *</label>
                <input v-model="formData.applyingClass" type="text" placeholder="e.g., S1, P4" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
              </div>
            </div>
          </div>

          <!-- SECTION 2: Parent/Guardian Details -->
          <div>
            <h3 class="text-lg font-semibold text-blue-800 dark:text-sky-400 mb-3 border-b pb-1 dark:border-gray-700">2. Parent / Guardian Details</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Guardian Full Name *</label>
                <input v-model="formData.guardianName" type="text" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Relationship to Student *</label>
                <input v-model="formData.guardianRelation" type="text" placeholder="e.g., Mother, Father, Uncle" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                <input v-model="formData.guardianPhone" type="tel" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input v-model="formData.guardianEmail" type="email" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
              </div>
            </div>
          </div>

          <!-- SECTION 3: Academic & Health History -->
          <div>
            <h3 class="text-lg font-semibold text-blue-800 dark:text-sky-400 mb-3 border-b pb-1 dark:border-gray-700">3. Academic & Health History</h3>
            <div class="grid grid-cols-1 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Previous School Attended</label>
                <input v-model="formData.previousSchool" type="text" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Previous Report Type *</label>
                  <select v-model="formData.reportType" required class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value="" disabled>Select report type</option>
                    <option value="National Exam Report">National Exam Report</option>
                    <option value="End of Year Report">End of Year Report</option>
                    <option value="None">None / First Time Student</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Upload Report (PDF/Image)</label>
                  <input type="file" accept=".pdf,image/*" class="w-full px-4 py-1.5 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-white">
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Health Reasons / Allergies / Special Needs</label>
                <textarea v-model="formData.healthReasons" rows="2" class="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Please list any medical conditions, allergies, or learning support needs."></textarea>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button type="submit" class="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n() 

// 1. Variables to hold the typed text
const typedTitle = ref('')
const typedHighlight = ref('')
const typedEnd = ref('')

let typingTimeout = null

// 2. The typing function
const startTyping = async () => {
  const text1 = t('hero.title')
  const text2 = t('hero.titleHighlight')
  const text3 = t('hero.titleEnd')

  typedTitle.value = ''
  typedHighlight.value = ''
  typedEnd.value = ''

  const typeString = (text, targetRef, speed = 80) => {
    return new Promise((resolve) => {
      let i = 0
      const typeChar = () => {
        if (i < text.length) {
          targetRef.value += text.charAt(i)
          i++
          typingTimeout = setTimeout(typeChar, speed)
        } else {
          typingTimeout = setTimeout(resolve, 300)
        }
      }
      typeChar()
    })
  }

  await typeString(text1, typedTitle)
  await typeString(text2, typedHighlight)
  await typeString(text3, typedEnd)

  typingTimeout = setTimeout(startTyping, 3000)
}

onMounted(() => {
  startTyping()
})

onUnmounted(() => {
  clearTimeout(typingTimeout)
})

watch(locale, () => {
  clearTimeout(typingTimeout)
  startTyping()
})

// --- Registration Form Logic ---
const showRegistrationForm = ref(false)
const formSubmitted = ref(false)

const formData = ref({
  firstName: '',
  lastName: '',
  dob: '',
  gender: '',
  applyingClass: '',
  guardianName: '',
  guardianRelation: '',
  guardianPhone: '',
  guardianEmail: '',
  previousSchool: '',
  reportType: '',
  healthReasons: ''
})

const submitRegistration = () => {
  console.log('Sending to Admin Inbox:', formData.value)

  formSubmitted.value = true

  formData.value = {
    firstName: '', lastName: '', dob: '', gender: '', applyingClass: '',
    guardianName: '', guardianRelation: '', guardianPhone: '', guardianEmail: '',
    previousSchool: '', reportType: '', healthReasons: ''
  }

  setTimeout(() => {
    showRegistrationForm.value = false
    formSubmitted.value = false 
  }, 3000)
}
</script>