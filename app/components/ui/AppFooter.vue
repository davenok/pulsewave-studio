<template>
  <footer class="relative bg-gray-950 pt-20 pb-8 overflow-hidden">
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
          <NuxtLink to="/" class="inline-block mb-6 group">
            <NuxtImg
              src="/pulse-logo.png"
              alt="Pulsewave Studio"
              height="48"
              class="h-10 md:h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </NuxtLink>
          <p class="text-gray-400 mb-6 leading-relaxed">
            Crafting digital experiences that captivate, engage, and convert. Let's build something extraordinary together.
          </p>
          <div class="flex gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 hover:text-white transition-all duration-300"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6">
            Quick Links
          </h4>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6">
            Services
          </h4>
          <ul class="space-y-4">
            <li v-for="service in services" :key="service">
              <span class="text-gray-400">
                {{ service }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-6">
            Get in Touch
          </h4>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <Icon name="i-lucide-message-circle" class="w-5 h-5 text-cyan-500" />
              <NuxtLink to="#contact" class="text-gray-400 hover:text-cyan-400 transition-colors">
                Contact Us
              </NuxtLink>
            </li>
            <li class="flex items-center gap-3">
              <Icon name="i-lucide-phone" class="w-5 h-5 text-cyan-500" />
              <a href="tel:+1234567890" class="text-gray-400 hover:text-cyan-400 transition-colors">
                +1 (234) 567-890
              </a>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="i-lucide-map-pin" class="w-5 h-5 text-cyan-500 mt-0.5" />
              <span class="text-gray-400">
                123 Innovation Drive<br />
                Broken Arrow, OK 74012
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            © {{ currentYear }} Pulsewave Studio. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <NuxtLink to="/privacy" class="text-gray-500 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-500 hover:text-cyan-400 transition-colors">
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
  { name: 'Twitter', icon: 'i-lucide-twitter', href: 'https://x.com/davidburklin' },
  { name: 'LinkedIn', icon: 'i-lucide-linkedin', href: 'https://www.linkedin.com/in/david-burklin-b312b45/' },
  { name: 'GitHub', icon: 'i-lucide-github', href: 'https://davenok.github.io/' }
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
