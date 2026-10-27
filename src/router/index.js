import { createRouter, createWebHistory } from 'vue-router'

import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import StatsSection from '../components/StatsSection.vue'
import ProgramsSection from '../components/ProgramsSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import ContactSection from '../components/ContactSection.vue'

const routes = [
  { path: '/',             name: 'home',         component: HeroSection },
  { path: '/about',        name: 'about',        component: AboutSection },
  { path: '/stats',        name: 'stats',        component: StatsSection },
  { path: '/programs',     name: 'programs',     component: ProgramsSection },
  { path: '/testimonials', name: 'testimonials', component: TestimonialsSection },
  { path: '/contact',      name: 'contact',      component: ContactSection }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router