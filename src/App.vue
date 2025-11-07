<template>
  <div class="d-flex flex-column min-vh-100">
    <SiteNav />
    <main class="flex-fill">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteNav from './components/SiteNav.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
