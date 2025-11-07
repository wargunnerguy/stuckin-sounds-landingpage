<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-semibold" href="#">{{ t('brand.name') }}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="nav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
          <li class="nav-item"><a class="nav-link" href="#services">{{ t('nav.services') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#gear">{{ t('nav.gear') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#rates">{{ t('nav.rates') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">{{ t('nav.contact') }}</a></li>
          <li class="nav-item">
            <a class="btn btn-primary ms-lg-3" href="#contact">{{ t('nav.book') }}</a>
          </li>
          <li class="nav-item ms-lg-3"><LanguageSwitcher/></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
const { t } = useI18n()
</script>
