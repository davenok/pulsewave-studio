<template>
  <footer class="relative dark:bg-gray-950 bg-gray-50 pt-20 pb-8 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-3xl" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-violet-500/10 to-pink-500/10 blur-3xl" />
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2 mb-6">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
              <Icon name="i-lucide-zap" class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold tracking-tight">
              <span class="gradient-text-cyan">Pulsewave</span>
              <span class="dark:text-white text-gray-900">Studio</span>
            </span>
          </NuxtLink>
          <p class="dark:text-gray-400 text-gray-600 mb-6 leading-relaxed">
            Crafting digital experiences that captivate, engage, and convert. Let's build something extraordinary together.
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg dark:bg-gray-800 bg-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 hover:text-white transition-all duration-300"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-sm font-semibold dark:text-white text-gray-900 uppercase tracking-wider mb-6">
            Quick Links
          </h4>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="dark:text-gray-400 text-gray-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-sm font-semibold dark:text-white text-gray-900 uppercase tracking-wider mb-6">
            Services
          </h4>
          <ul class="space-y-4">
            <li v-for="service in services" :key="service">
              <span class="dark:text-gray-400 text-gray-600">
                {{ service }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-sm font-semibold dark:text-white text-gray-900 uppercase tracking-wider mb-6">
            Get in Touch
          </h4>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <Icon name="i-lucide-mail" class="w-5 h-5 text-cyan-500" />
              <a href="mailto:hello@pulsewave.studio" class="dark:text-gray-400 text-gray-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                hello@pulsewave.studio
              </a>
            </li>
            <li class="flex items-center gap-3">
              <Icon name="i-lucide-phone" class="w-5 h-5 text-cyan-500" />
              <a href="tel:+1234567890" class="dark:text-gray-400 text-gray-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="i-lucide-map-pin" class="w-5 h-5 text-cyan-500 mt-0.5" />
              <span class="dark:text-gray-400 text-gray-600">
                123 Innovation Drive<br />
                San Francisco, CA 94107
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t dark:border-gray-800 border-gray-200 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="dark:text-gray-500 text-gray-500 text-sm">
            © {{ currentYear }} Pulsewave Studio. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <NuxtLink to="/privacy" class="dark:text-gray-500 text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="dark:text-gray-500 text-gray-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              Terms of Service
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
  { name: 'Twitter', icon: 'i-lucide-twitter', href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: 'i-lucide-linkedin', href: 'https://linkedin.com' },
  { name: 'Instagram', icon: 'i-lucide-instagram', href: 'https://instagram.com' },
  { name: 'GitHub', icon: 'i-lucide-github', href: 'https://github.com' }
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
]

const services = [
  'Web Design',
  'Web Development',
  'UI/UX Design',
  'Brand Identity',
  'E-commerce Solutions'
]
</script>
