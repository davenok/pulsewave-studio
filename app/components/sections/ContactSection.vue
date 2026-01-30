<template>
  <section id="contact" class="relative py-24 lg:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gray-900">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 blur-3xl" />
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/10 text-amber-500 mb-4">
          Get in Touch
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Let's Build Something
          <span class="gradient-text">Amazing Together</span>
        </h2>
        <p class="text-lg text-gray-400">
          Have a project in mind? We'd love to hear about it. Drop us a line and let's create something extraordinary.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <!-- Contact Form -->
        <div class="lg:col-span-3">
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <UFormField label="Name" name="name">
                <UInput
                  v-model="form.name"
                  placeholder="John Doe"
                  size="lg"
                  class="bg-gray-800"
                />
              </UFormField>
              <UFormField label="Email" name="email">
                <UInput
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  size="lg"
                  class="bg-gray-800"
                />
              </UFormField>
            </div>

            <UFormField label="Company" name="company">
              <UInput
                v-model="form.company"
                placeholder="Your company name"
                size="lg"
                class="bg-gray-800"
              />
            </UFormField>

            <UFormField label="Project Type" name="projectType">
              <USelect
                v-model="form.projectType"
                :items="projectTypes"
                placeholder="Select a project type"
                size="lg"
                class="bg-gray-800"
              />
            </UFormField>

            <UFormField label="Budget Range" name="budget">
              <USelect
                v-model="form.budget"
                :items="budgetRanges"
                placeholder="Select your budget range"
                size="lg"
                class="bg-gray-800"
              />
            </UFormField>

            <UFormField label="Project Details" name="message">
              <UTextarea
                v-model="form.message"
                placeholder="Tell us about your project..."
                :rows="5"
                size="lg"
                class="bg-gray-800"
              />
            </UFormField>

            <UButton
              type="submit"
              size="xl"
              block
              class="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 border-0 shadow-xl shadow-cyan-500/25"
            >
              <Icon name="i-lucide-send" class="w-5 h-5 mr-2" />
              Send Message
            </UButton>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Info Cards -->
          <div class="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shrink-0">
                <Icon name="i-lucide-mail" class="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Email Us</h4>
                <p class="text-gray-400 text-sm mb-2">We'll respond within 24 hours</p>
                <a href="mailto:hello@pulsewave.studio" class="text-cyan-500 hover:text-cyan-400 font-medium">
                  hello@pulsewave.studio
                </a>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center shrink-0">
                <Icon name="i-lucide-phone" class="w-6 h-6 text-violet-500" />
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Call Us</h4>
                <p class="text-gray-400 text-sm mb-2">Mon-Fri from 9am to 6pm</p>
                <a href="tel:+1234567890" class="text-violet-500 hover:text-violet-400 font-medium">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center shrink-0">
                <Icon name="i-lucide-map-pin" class="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h4 class="font-semibold text-white mb-1">Visit Us</h4>
                <p class="text-gray-400 text-sm mb-2">Come say hello at our office</p>
                <span class="text-gray-300">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107
                </span>
              </div>
            </div>
          </div>

          <!-- CTA Card -->
          <div class="p-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white">
            <h4 class="font-semibold text-lg mb-2">Ready to start?</h4>
            <p class="text-white/80 text-sm mb-4">
              Book a free 30-minute discovery call to discuss your project.
            </p>
            <UButton
              variant="solid"
              class="bg-gray-950 text-white hover:bg-gray-800"
            >
              <Icon name="i-lucide-calendar" class="w-4 h-4 mr-2" />
              Schedule a Call
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: ''
})

const projectTypes = [
  { label: 'Website Design', value: 'website-design' },
  { label: 'Web Application', value: 'web-app' },
  { label: 'E-Commerce', value: 'ecommerce' },
  { label: 'Brand Identity', value: 'branding' },
  { label: 'UI/UX Design', value: 'ui-ux' },
  { label: 'Other', value: 'other' }
]

const budgetRanges = [
  { label: '$5,000 - $10,000', value: '5k-10k' },
  { label: '$10,000 - $25,000', value: '10k-25k' },
  { label: '$25,000 - $50,000', value: '25k-50k' },
  { label: '$50,000 - $100,000', value: '50k-100k' },
  { label: '$100,000+', value: '100k+' }
]

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form)
}
</script>
