<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled ? 'glass dark:bg-gray-900/80 bg-white/80 shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <div class="relative">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Icon name="i-lucide-zap" class="w-5 h-5 text-white" />
            </div>
            <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          </div>
          <span class="text-xl font-bold tracking-tight">
            <span class="gradient-text-cyan">Pulsewave</span>
            <span class="dark:text-white text-gray-900">Studio</span>
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="relative text-sm font-medium dark:text-gray-300 text-gray-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 group"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 group-hover:w-full transition-all duration-300" />
          </NuxtLink>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-4">
          <UColorModeButton
            variant="ghost"
            class="hover:bg-gray-100 dark:hover:bg-gray-800"
          />
          <UButton
            to="#contact"
            color="primary"
            class="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 border-0 shadow-lg shadow-cyan-500/25"
          >
            Get Started
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden items-center gap-2">
          <UColorModeButton
            variant="ghost"
            size="sm"
          />
          <UButton
            variant="ghost"
            size="sm"
            :icon="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            class="dark:text-white text-gray-900"
            @click="mobileMenuOpen = !mobileMenuOpen"
          />
        </div>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden glass dark:bg-gray-900/95 bg-white/95 border-t dark:border-gray-800 border-gray-200"
      >
        <div class="container mx-auto px-4 py-6 space-y-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="block py-3 px-4 rounded-lg text-base font-medium dark:text-gray-300 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <UButton
            to="#contact"
            color="primary"
            block
            class="mt-4 bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 border-0"
            @click="mobileMenuOpen = false"
          >
            Get Started
          </UButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
]

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
