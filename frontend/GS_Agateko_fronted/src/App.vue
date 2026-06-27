<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <span class="text-2xl font-bold text-blue-600">GS Agateko</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition">Programs</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span class="text-gray-900">Empowering</span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Young Minds
              </span>
              <span class="text-gray-900">for Tomorrow</span>
            </h1>
            <p class="mt-6 text-lg text-gray-600 leading-relaxed">
              At GS Agateko, we believe in nurturing curiosity, creativity, and character. 
              Join us in shaping the leaders of tomorrow through innovative education and 
              a supportive community.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              <button class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
            <div class="relative bg-white p-6 rounded-2xl shadow-2xl">
              <div class="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600">500+</div>
            <div class="text-gray-600 mt-2">Students</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600">98%</div>
            <div class="text-gray-600 mt-2">Graduation Rate</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600">30+</div>
            <div class="text-gray-600 mt-2">Years of Excellence</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600">15+</div>
            <div class="text-gray-600 mt-2">Award-Winning Programs</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Our Programs</h2>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive educational programs designed to unlock every student's potential.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group">
            <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
              <svg class="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Academic Excellence</h3>
            <p class="text-gray-600">Rigorous curriculum designed to challenge and inspire students to reach their full potential.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group">
            <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition">
              <svg class="w-7 h-7 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Arts & Culture</h3>
            <p class="text-gray-600">Creative programs in music, drama, and visual arts that foster self-expression and cultural appreciation.</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group">
            <div class="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition">
              <svg class="w-7 h-7 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Sports & Athletics</h3>
            <p class="text-gray-600">Comprehensive athletic programs that build teamwork, discipline, and physical fitness.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
        <p class="text-blue-100 mb-12 max-w-2xl mx-auto">
          Hear from our students, parents, and alumni about their GS Agateko experience.
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <p class="text-lg italic">"GS Agateko transformed my child's love for learning. The teachers are incredible and the community is so supportive."</p>
            <div class="mt-4">
              <p class="font-semibold">Sarah M.</p>
              <p class="text-blue-200">Parent</p>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <p class="text-lg italic">"The opportunities I had at GS Agateko prepared me for university and beyond. I'm forever grateful."</p>
            <div class="mt-4">
              <p class="font-semibold">James K.</p>
              <p class="text-blue-200">Alumnus 2023</p>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <p class="text-lg italic">"My daughter looks forward to school every day. The arts program has truly unlocked her creativity."</p>
            <div class="mt-4">
              <p class="font-semibold">Maria T.</p>
              <p class="text-blue-200">Parent</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold text-blue-400">GS Agateko</h3>
            <p class="text-gray-400 mt-2">Nurturing minds, building futures.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Quick Links</h4>
            <ul class="space-y-1 text-gray-400">
              <li><a href="#" class="hover:text-white transition">About Us</a></li>
              <li><a href="#" class="hover:text-white transition">Admissions</a></li>
              <li><a href="#" class="hover:text-white transition">Calendar</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Programs</h4>
            <ul class="space-y-1 text-gray-400">
              <li><a href="#" class="hover:text-white transition">Academics</a></li>
              <li><a href="#" class="hover:text-white transition">Arts</a></li>
              <li><a href="#" class="hover:text-white transition">Sports</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Contact</h4>
            <ul class="space-y-1 text-gray-400">
              <li>info@gsagateko.edu</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Education Lane</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 GS Agateko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No JavaScript needed for this landing page
</script>