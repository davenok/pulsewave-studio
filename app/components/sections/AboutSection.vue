<template>
  <section id="about" class="relative py-24 lg:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gray-900">
      <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div>
          <span class="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-pink-500/10 text-pink-500 mb-4">
            About Us
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            We're Passionate About
            <span class="gradient-text">Crafting Digital Excellence</span>
          </h2>
          <p class="text-lg text-gray-400 mb-6 leading-relaxed">
            Founded in 2014, Pulsewave Studio has grown from a small design shop into a 
            full-service digital agency. We combine creativity with cutting-edge technology 
            to build digital experiences that make a lasting impact.
          </p>
          <p class="text-lg text-gray-400 mb-8 leading-relaxed">
            Our team of designers, developers, and strategists work collaboratively to 
            transform your vision into reality. We don't just build websites—we create 
            digital ecosystems that drive growth.
          </p>

          <!-- Values -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div v-for="value in values" :key="value.title" class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center shrink-0">
                <Icon :name="value.icon" class="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h4 class="font-semibold text-white">{{ value.title }}</h4>
                <p class="text-sm text-gray-500">{{ value.description }}</p>
              </div>
            </div>
          </div>

          <UButton
            to="#contact"
            class="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 border-0"
          >
            Work With Us
            <Icon name="i-lucide-arrow-right" class="w-4 h-4 ml-2" />
          </UButton>
        </div>

        <!-- Visual/Team Grid -->
        <div class="relative">
          <!-- Decorative Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          
          <!-- Team Grid -->
          <div class="relative grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div
                v-for="member in team.slice(0, 2)"
                :key="member.name"
                class="relative group rounded-2xl overflow-hidden"
              >
                <div :class="member.gradient" class="aspect-[3/4] w-full" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div class="absolute bottom-4 left-4 right-4">
                    <h4 class="text-white font-semibold">{{ member.name }}</h4>
                    <p class="text-white/70 text-sm">{{ member.role }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="space-y-4 pt-8">
              <div
                v-for="member in team.slice(2, 4)"
                :key="member.name"
                class="relative group rounded-2xl overflow-hidden"
              >
                <div :class="member.gradient" class="aspect-[3/4] w-full" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div class="absolute bottom-4 left-4 right-4">
                    <h4 class="text-white font-semibold">{{ member.name }}</h4>
                    <p class="text-white/70 text-sm">{{ member.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Badge -->
          <div class="absolute -bottom-4 -left-4 px-6 py-4 rounded-2xl bg-gray-800 shadow-xl border border-gray-700">
            <div class="flex items-center gap-3">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 ring-2 ring-gray-800" />
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 ring-2 ring-gray-800" />
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 ring-2 ring-gray-800" />
              </div>
              <div>
                <div class="text-sm font-semibold text-white">15+ Experts</div>
                <div class="text-xs text-gray-400">Ready to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const values = [
  { icon: 'i-lucide-lightbulb', title: 'Innovation', description: 'Always pushing boundaries' },
  { icon: 'i-lucide-heart', title: 'Passion', description: 'Love what we create' },
  { icon: 'i-lucide-users', title: 'Collaboration', description: 'Better together' },
  { icon: 'i-lucide-target', title: 'Results', description: 'Focused on impact' }
]

const team = [
  { name: 'Alex Morgan', role: 'Creative Director', gradient: 'bg-gradient-to-br from-cyan-400 to-blue-600' },
  { name: 'Jordan Lee', role: 'Lead Developer', gradient: 'bg-gradient-to-br from-violet-400 to-purple-600' },
  { name: 'Sam Chen', role: 'UX Designer', gradient: 'bg-gradient-to-br from-pink-400 to-rose-600' },
  { name: 'Taylor Kim', role: 'Project Manager', gradient: 'bg-gradient-to-br from-amber-400 to-orange-600' }
]
</script>
