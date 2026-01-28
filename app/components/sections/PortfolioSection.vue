<template>
  <section id="work" class="relative py-24 lg:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 dark:bg-gray-950 bg-white" />

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <span class="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-violet-500/10 text-violet-500 mb-4">
            Our Portfolio
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
            Featured <span class="gradient-text">Projects</span>
          </h2>
        </div>
        <UButton
          variant="outline"
          class="dark:border-gray-700 border-gray-300 dark:text-white text-gray-900 self-start md:self-auto"
        >
          View All Projects
          <Icon name="i-lucide-arrow-right" class="w-4 h-4 ml-2" />
        </UButton>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="group relative rounded-2xl overflow-hidden card-hover"
          :class="{ 'md:col-span-2': index === 0, 'aspect-[4/3]': index !== 0, 'aspect-[16/9] md:aspect-[21/9]': index === 0 }"
        >
          <!-- Project Image/Placeholder -->
          <div
            class="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            :class="project.gradient"
          >
            <!-- Decorative Elements -->
            <div class="absolute inset-0 flex items-center justify-center opacity-20">
              <div class="w-40 h-40 border-2 border-white/30 rounded-full animate-spin-slow" />
              <div class="absolute w-60 h-60 border border-white/20 rounded-full" />
            </div>
          </div>

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          <!-- Content -->
          <div class="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 text-xs font-medium rounded-full bg-white/20 text-white backdrop-blur-sm"
              >
                {{ tag }}
              </span>
            </div>
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              {{ project.title }}
            </h3>
            <p class="text-white/80 text-sm sm:text-base mb-4 max-w-xl">
              {{ project.description }}
            </p>
            <div class="flex items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <UButton
                size="sm"
                class="bg-white text-gray-900 hover:bg-gray-100"
              >
                View Case Study
              </UButton>
              <UButton
                size="sm"
                variant="ghost"
                class="text-white hover:bg-white/20"
              >
                <Icon name="i-lucide-external-link" class="w-4 h-4 mr-1" />
                Live Site
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Results Bar -->
      <div class="mt-16 p-8 rounded-2xl dark:bg-gray-800/50 bg-gray-100 border dark:border-gray-700/50 border-gray-200">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="result in results" :key="result.label" class="text-center">
            <div class="text-2xl sm:text-3xl font-bold gradient-text-cyan mb-1">{{ result.value }}</div>
            <div class="text-sm dark:text-gray-400 text-gray-600">{{ result.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Nebula Finance Platform',
    description: 'A complete redesign and development of a fintech platform serving 100k+ users with modern UI and improved UX.',
    tags: ['Web App', 'Fintech', 'UI/UX Design'],
    gradient: 'bg-gradient-to-br from-cyan-600 via-blue-600 to-violet-700'
  },
  {
    title: 'Artisan E-Commerce',
    description: 'Luxury e-commerce experience for a premium artisan goods marketplace.',
    tags: ['E-Commerce', 'Shopify'],
    gradient: 'bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600'
  },
  {
    title: 'GreenTech Dashboard',
    description: 'Data visualization dashboard for renewable energy analytics.',
    tags: ['Dashboard', 'Data Viz'],
    gradient: 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600'
  },
  {
    title: 'Stellar SaaS Platform',
    description: 'Complete brand identity and web presence for an AI startup.',
    tags: ['Branding', 'Web Design'],
    gradient: 'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500'
  },
  {
    title: 'Mindful Wellness App',
    description: 'Mobile-first web app for meditation and wellness tracking.',
    tags: ['Web App', 'Healthcare'],
    gradient: 'bg-gradient-to-br from-pink-500 via-rose-500 to-red-500'
  }
]

const results = [
  { value: '300%', label: 'Average Traffic Increase' },
  { value: '150%', label: 'Conversion Improvement' },
  { value: '50ms', label: 'Average Load Time' },
  { value: '98%', label: 'Client Satisfaction' }
]
</script>
