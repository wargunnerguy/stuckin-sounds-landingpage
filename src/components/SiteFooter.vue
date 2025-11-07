<template>
  <footer class="bg-dark text-light py-4 mt-5">
    <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
      <small>{{ t('footer.copy', { year: new Date().getFullYear() }) }}</small>
      <div class="d-flex gap-3">
        <a class="link-light text-decoration-none" href="#" aria-label="Instagram">Instagram</a>
        <a class="link-light text-decoration-none" href="#" aria-label="YouTube">YouTube</a>
        <a class="link-light text-decoration-none" href="#" aria-label="Facebook">Facebook</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
