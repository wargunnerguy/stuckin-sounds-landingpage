<template>
  <main>
    <!-- HERO -->
    <section id="hero" class="hero d-flex align-items-center">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>

      <div class="container position-relative">
        <div class="row align-items-center g-4">
          <div class="col-lg-7">
            <div class="glass p-4 p-lg-5 rounded-4 shadow-lg">
              <h1 class="display-5 fw-bold mb-3">Your sound. Perfected.</h1>
              <p class="lead text-light opacity-75 mb-4">
                A modern recording space for artists, podcasters and producers.
              </p>
              <div class="d-flex gap-2">
                <a href="#contact" class="btn btn-primary btn-lg">Book a Session</a>
                <a href="#services" class="btn btn-outline-light btn-lg">Explore Services</a>
              </div>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
              <img src="@/assets/placeholder-studio.jpg" alt="Studio view" />
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- SERVICES -->
    <section id="services" class="py-5">
      <div class="container">
        <SectionHeading title="Services" subtitle="Everything from raw takes to radio-ready" />
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">Recording</h5>
                <p class="card-text text-secondary">
                  Vocal booth + live room, choice mics, zero-latency monitoring, musician-friendly workflow.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">Mixing & Mastering</h5>
                <p class="card-text text-secondary">
                  Hybrid chain with transparent processing and vibe where it counts. Delivery for all platforms.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title fw-bold">Podcast Room</h5>
                <p class="card-text text-secondary">
                  2–4 mics, clean headphone mixes, phone/remote guest support, RTS-friendly stems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROOMS / GEAR -->
    <section id="rooms" class="py-5 bg-light">
      <div class="container">
        <SectionHeading title="Studios & Gear" subtitle="Purpose-built rooms and reliable tools" />
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="p-4 bg-white rounded-3 shadow-sm h-100">
              <h5 class="fw-bold mb-2">Control Room</h5>
              <ul class="mb-0 text-secondary">
                <li>Nearfield + sub monitoring, treated environment</li>
                <li>Audio interface with low-latency tracking</li>
                <li>Selection of outboard preamps & comps</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="p-4 bg-white rounded-3 shadow-sm h-100">
              <h5 class="fw-bold mb-2">Live Room & Booth</h5>
              <ul class="mb-0 text-secondary">
                <li>Acoustic treatment for tight, controlled takes</li>
                <li>Dynamic, condenser & ribbon mic options</li>
                <li>Comfortable cue mixes for performers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING -->
    <section id="pricing" class="py-5">
      <div class="container">
        <SectionHeading title="Pricing" subtitle="Simple rates. Solid results." />
        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 border-primary shadow-sm">
              <div class="card-body">
                <h6 class="text-primary fw-bold">Hourly</h6>
                <h3 class="fw-bold mb-3">€30 / hr</h3>
                <ul class="text-secondary">
                  <li>Engineer included</li>
                  <li>Recording or editing</li>
                </ul>
                <a href="#contact" class="btn btn-outline-primary w-100">Choose</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-primary shadow-sm">
              <div class="card-body">
                <h6 class="text-primary fw-bold">Half-Day</h6>
                <h3 class="fw-bold mb-3">€160 / 6h</h3>
                <ul class="text-secondary">
                  <li>Recording + rough mix</li>
                  <li>Tea/coffee included</li>
                </ul>
                <a href="#contact" class="btn btn-outline-primary w-100">Choose</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-primary shadow-sm">
              <div class="card-body">
                <h6 class="text-primary fw-bold">Full Day</h6>
                <h3 class="fw-bold mb-3">€290 / 10h</h3>
                <ul class="text-secondary">
                  <li>Tracking + mix prep</li>
                  <li>Revisions bundle</li>
                </ul>
                <a href="#contact" class="btn btn-primary w-100">Book Now</a>
              </div>
            </div>
          </div>
        </div>
        <p class="text-secondary small mt-3">
          Custom quotes for albums, full podcast seasons, ADR, voiceover, or mastering on request.
        </p>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="py-5 bg-light">
      <div class="container">
        <SectionHeading title="Contact" subtitle="Tell us about your project" />
        <div class="row g-4">
          <div class="col-lg-6">
            <form @submit.prevent="submit">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input v-model="form.name" type="text" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-control" required />
              </div>
              <div class="mb-3">
                <label class="form-label">What are you recording?</label>
                <select v-model="form.service" class="form-select">
                  <option>Recording</option>
                  <option>Mixing</option>
                  <option>Mastering</option>
                  <option>Podcast</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Message</label>
                <textarea v-model="form.message" class="form-control" rows="4"></textarea>
              </div>
              <button class="btn btn-primary">Send</button>
              <p v-if="sent" class="text-success mt-3">Thanks! We’ll get back to you shortly.</p>
            </form>
          </div>
          <div class="col-lg-6">
            <div class="p-4 bg-white rounded-3 shadow-sm h-100">
              <h6 class="fw-bold">Visit</h6>
              <p class="text-secondary mb-1">Stuckin Sounds Studio</p>
              <p class="text-secondary">Your Street 12, Tallinn</p>
              <h6 class="fw-bold">Hours</h6>
              <p class="text-secondary">Mon–Sat · by appointment</p>
              <div class="ratio ratio-16x9 rounded-3 overflow-hidden">
                <!-- Replace with real embed -->
                <iframe
                  title="Map"
                  src="https://maps.google.com/maps?q=Tallinn&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  style="border:0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'

const form = reactive({
  name: '',
  email: '',
  service: 'Recording',
  message: ''
})
const sent = ref(false)
function submit() {
  // Replace with real backend or Formspree later
  sent.value = true
  setTimeout(() => (sent.value = false), 4000)
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 92vh;
  color: #fff;
  overflow: hidden;
}

/* Background image that we blur */
.hero-bg {
  position: absolute; inset: 0;
  background: center / cover no-repeat url('/studio-bg.jpg'); /* put your real photo here */
  filter: blur(14px) saturate(1.05) brightness(0.9);
  transform: scale(1.08);          /* avoids edge bleed after blur */
  will-change: transform, filter;  /* smoother on GPU */
}

/* Dark + gradient veil for contrast/readability */
.hero-overlay {
  position: absolute; inset: 0;
  background:
    linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.55) 100%),
    rgba(0,0,0,0.25);
}

/* Glass card for text */
.glass {
  background: rgba(20, 20, 24, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Smooth anchor jumps below fixed navbar */
:where(#services, #rooms, #pricing, #contact) { scroll-margin-top: 80px; }
</style>

