<template>
  <section id="testimonials" class="relative py-24 lg:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gray-950">
      <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-violet-500/10 to-pink-500/10 blur-3xl" />
      <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl" />
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-500 mb-4">
          Testimonials
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          What Our <span class="gradient-text-cyan">Clients Say</span>
        </h2>
        <p class="text-lg text-gray-400">
          Don't just take our word for it. Here's what our amazing clients have to say about working with us.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          class="relative p-8 rounded-2xl bg-gray-800/50 border border-gray-700/50 card-hover"
          :class="{ 'lg:col-span-2': index === 0 }"
        >
          <!-- Quote Icon -->
          <div class="absolute top-6 right-6 opacity-10">
            <Icon name="i-lucide-quote" class="w-16 h-16 text-white" />
          </div>

          <!-- Rating -->
          <div class="flex gap-1 mb-4">
            <Icon
              v-for="i in 5"
              :key="i"
              name="i-lucide-star"
              class="w-5 h-5 text-amber-400 fill-amber-400"
            />
          </div>

          <!-- Quote -->
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
              :class="testimonial.avatarColor"
            >
              {{ testimonial.initials }}
            </div>
            <div>
              <h4 class="font-semibold text-white">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-500">{{ testimonial.role }}, {{ testimonial.company }}</p>
            </div>
          </div>

          <!-- Company Logo Placeholder -->
          <div class="absolute bottom-8 right-8 opacity-30">
            <Icon :name="testimonial.companyIcon" class="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>

      <!-- Trusted By Section -->
      <div class="mt-20 text-center">
        <p class="text-sm text-gray-500 mb-8 uppercase tracking-wider">Trusted by innovative companies</p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
          <Icon v-for="logo in companyLogos" :key="logo" :name="logo" class="w-10 h-10 text-gray-400" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: "Pulsewave Studio transformed our entire digital presence. Their attention to detail and creative approach exceeded all our expectations. The new platform increased our conversion rate by 200%.",
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechFlow Inc.',
    initials: 'SM',
    avatarColor: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    companyIcon: 'i-lucide-building-2'
  },
  {
    quote: "The team's expertise in both design and development is unmatched. They delivered a stunning e-commerce platform on time and on budget.",
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Artisan Goods',
    initials: 'MC',
    avatarColor: 'bg-gradient-to-br from-violet-500 to-purple-600',
    companyIcon: 'i-lucide-store'
  },
  {
    quote: "Working with Pulsewave was a game-changer. They understood our vision and brought it to life beautifully.",
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GreenTech',
    initials: 'ER',
    avatarColor: 'bg-gradient-to-br from-emerald-500 to-green-600',
    companyIcon: 'i-lucide-leaf'
  },
  {
    quote: "Professional, creative, and incredibly responsive. The dashboard they built for us handles millions of data points seamlessly.",
    name: 'David Park',
    role: 'CTO',
    company: 'DataPulse',
    initials: 'DP',
    avatarColor: 'bg-gradient-to-br from-pink-500 to-rose-600',
    companyIcon: 'i-lucide-bar-chart-3'
  },
  {
    quote: "From concept to launch, the entire process was smooth and collaborative. Our users love the new experience!",
    name: 'Lisa Thompson',
    role: 'Product Manager',
    company: 'Mindful App',
    initials: 'LT',
    avatarColor: 'bg-gradient-to-br from-amber-500 to-orange-600',
    companyIcon: 'i-lucide-smartphone'
  }
]

const companyLogos = [
  'i-lucide-layers',
  'i-lucide-hexagon',
  'i-lucide-triangle',
  'i-lucide-diamond',
  'i-lucide-pentagon',
  'i-lucide-circle'
]
</script>
