<template>
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
        <p>&copy; {{ currentYear }} GS Agateko. {{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>