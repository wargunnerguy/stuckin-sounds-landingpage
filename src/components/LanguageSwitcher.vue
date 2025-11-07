<template>
  <div class="dropdown">
    <button class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
      {{ locale.toUpperCase() }}
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
      <li><button class="dropdown-item" @click="pick('en')">EN</button></li>
      <li><button class="dropdown-item" @click="pick('et')">ET</button></li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'

const { locale } = useI18n()
function pick(code) { setLocale(code) }
</script>
