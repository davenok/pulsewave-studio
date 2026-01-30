<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gray-950">
      <!-- Gradient Orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl animate-pulse-glow" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-violet-500/30 to-pink-500/30 blur-3xl animate-pulse-glow delay-1000" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 blur-3xl animate-spin-slow" />

      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px); background-size: 50px 50px;" />
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 mb-8 animate-fade-in">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span class="text-sm text-gray-300">Available for new projects</span>
        </div>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
          <span class="text-white">We Create </span>
          <span class="gradient-text-cyan">Digital</span>
          <br />
          <span class="gradient-text">Experiences</span>
          <span class="text-white"> That</span>
          <br />
          <span class="text-white">Inspire</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 animate-slide-up delay-200">
          Award-winning web design agency specializing in stunning websites, 
          powerful web applications, and memorable brand identities.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
          <UButton
            to="#work"
            size="xl"
            class="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 border-0 shadow-xl shadow-cyan-500/25 px-8"
          >
            View Our Work
            <Icon name="i-lucide-arrow-right" class="w-5 h-5 ml-2" />
          </UButton>
          <UButton
            to="#contact"
            size="xl"
            variant="outline"
            class="border-gray-700 text-white hover:bg-gray-800 px-8"
          >
            <Icon name="i-lucide-play-circle" class="w-5 h-5 mr-2" />
            Schedule a Call
          </UButton>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in delay-500">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl sm:text-4xl font-bold gradient-text-cyan mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-500">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon name="i-lucide-chevron-down" class="w-6 h-6 text-gray-500" />
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '12+', label: 'Years Experience' },
  { value: '25+', label: 'Awards Won' }
]
</script>
