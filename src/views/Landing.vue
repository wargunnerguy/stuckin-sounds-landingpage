<template>
  <!-- Hero -->
  <section class="bg-body-tertiary py-5">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-lg-7">
          <h1 class="display-4 fw-bold">{{ t('landing.hero.title') }}</h1>
          <p class="lead text-secondary">
            {{ t('landing.hero.subtitle') }}
          </p>
          <div class="d-flex gap-3">
            <a href="#contact" class="btn btn-primary btn-lg">{{ t('landing.hero.ctaBook') }}</a>
            <a href="#services" class="btn btn-outline-secondary btn-lg">{{ t('landing.hero.ctaServices') }}</a>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="ratio ratio-16x9 bg-dark rounded-3 d-flex align-items-center justify-content-center text-white-50">
            <span>{{ t('landing.hero.preview') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section id="services" class="py-5">
    <div class="container">
      <h2 class="h1 mb-4">{{ t('landing.services.title') }}</h2>
      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="h5">{{ t('landing.services.recTitle') }}</h3>
              <p class="text-secondary mb-0">{{ t('landing.services.recDesc') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="h5">{{ t('landing.services.mixTitle') }}</h3>
              <p class="text-secondary mb-0">{{ t('landing.services.mixDesc') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="h5">{{ t('landing.services.mastTitle') }}</h3>
              <p class="text-secondary mb-0">{{ t('landing.services.mastDesc') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="h5">{{ t('landing.services.podTitle') }}</h3>
              <p class="text-secondary mb-0">{{ t('landing.services.podDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gear -->
  <section id="gear" class="py-5 bg-body-tertiary">
    <div class="container">
      <h2 class="h1 mb-4">{{ t('landing.gear.title') }}</h2>
      <div class="row">
        <div class="col-md-6">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ t('landing.gear.l1') }}</li>
            <li class="list-group-item">{{ t('landing.gear.l2') }}</li>
            <li class="list-group-item">{{ t('landing.gear.l3') }}</li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ t('landing.gear.r1') }}</li>
            <li class="list-group-item">{{ t('landing.gear.r2') }}</li>
            <li class="list-group-item">{{ t('landing.gear.r3') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Rates -->
  <section id="rates" class="py-5">
    <div class="container">
      <h2 class="h1 mb-4">{{ t('landing.rates.title') }}</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 border-primary">
            <div class="card-body">
              <h3 class="h5">{{ t('landing.rates.recTitle') }}</h3>
              <p class="display-6 mb-0">€X<span class="fs-6 text-secondary">{{ t('landing.rates.perHour') }}</span></p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-primary">
            <div class="card-body">
              <h3 class="h5">{{ t('landing.rates.mixTitle') }}</h3>
              <p class="display-6 mb-0">€X<span class="fs-6 text-secondary">{{ t('landing.rates.perSong') }}</span></p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-primary">
            <div class="card-body">
              <h3 class="h5">{{ t('landing.rates.mastTitle') }}</h3>
              <p class="display-6 mb-0">€X<span class="fs-6 text-secondary">{{ t('landing.rates.perSong') }}</span></p>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-3 text-secondary">{{ t('landing.rates.note') }}</p>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-5 bg-body-tertiary">
    <div class="container">
      <h2 class="h1 mb-4">{{ t('landing.contact.title') }}</h2>
      <form class="row g-3" @submit.prevent="submit">
        <div class="col-md-6">
          <label class="form-label">{{ t('landing.contact.name') }}</label>
          <input class="form-control" v-model="form.name" required>
        </div>
        <div class="col-md-6">
          <label class="form-label">{{ t('landing.contact.email') }}</label>
          <input type="email" class="form-control" v-model="form.email" required>
        </div>
        <div class="col-12">
          <label class="form-label">{{ t('landing.contact.message') }}</label>
          <textarea rows="4" class="form-control" v-model="form.message" required></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-primary btn-lg" type="submit">{{ t('landing.contact.send') }}</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = reactive({ name: '', email: '', message: '' })
function submit() {
  const mailto = `mailto:stuckinsounds@gmail.com?subject=Session%20request%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\n' + form.email)}`
  window.location.href = mailto
}
</script>
