<template>
  <section id="services" class="relative py-24 lg:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gray-900">
      <div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-3xl" />
      <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-violet-500/10 to-pink-500/10 blur-3xl" />
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-500 mb-4">
          Our Services
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Everything You Need to
          <span class="gradient-text-cyan">Stand Out Online</span>
        </h2>
        <p class="text-lg text-gray-400">
          We combine creative design with technical expertise to deliver digital experiences 
          that not only look exceptional but perform flawlessly. Whether you need a complete 
          brand overhaul, a high-converting website, or ongoing support, our team works 
          closely with you to understand your goals and craft solutions that resonate with 
          your audience and drive measurable results.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group relative p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 card-hover hover-glow-cyan"
          :class="{ 'lg:col-span-2': index === 0 }"
        >
          <!-- Icon -->
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            <Icon :name="service.icon" class="w-7 h-7" :class="service.iconColor" />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-semibold text-white mb-3">
            {{ service.title }}
          </h3>
          <p class="text-gray-400 mb-6 leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Features -->
          <ul class="space-y-2">
            <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2 text-sm text-gray-400">
              <Icon name="i-lucide-check" class="w-4 h-4 text-cyan-500" />
              {{ feature }}
            </li>
          </ul>

          <!-- Hover Arrow -->
          <div class="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <Icon name="i-lucide-arrow-up-right" class="w-6 h-6 text-cyan-500" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: 'i-lucide-palette',
    iconBg: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-500',
    title: 'Web Design & UI/UX',
    description: 'Beautiful, intuitive designs that captivate your audience and deliver exceptional user experiences across all devices.',
    features: ['Custom Design Systems', 'Interactive Prototypes', 'User Research', 'Responsive Layouts']
  },
  {
    icon: 'i-lucide-code-2',
    iconBg: 'bg-gradient-to-br from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-500',
    title: 'Web Development',
    description: 'Cutting-edge development using the latest technologies for blazing-fast, scalable web applications.',
    features: ['Modern Frameworks', 'Performance Optimized', 'SEO Ready']
  },
  {
    icon: 'i-lucide-shopping-cart',
    iconBg: 'bg-gradient-to-br from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-500',
    title: 'E-Commerce',
    description: 'Powerful online stores that convert visitors into customers with seamless shopping experiences.',
    features: ['Custom Storefronts', 'Payment Integration', 'Inventory Management']
  },
  {
    icon: 'i-lucide-fingerprint',
    iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-500',
    title: 'Brand Identity',
    description: 'Memorable brand identities that tell your story and connect with your target audience emotionally.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Systems']
  },
  {
    icon: 'i-lucide-rocket',
    iconBg: 'bg-gradient-to-br from-emerald-500/20 to-green-500/20',
    iconColor: 'text-emerald-500',
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence and reach your ideal customers.',
    features: ['SEO Strategy', 'Content Marketing', 'Analytics & Insights']
  }
]
</script>
