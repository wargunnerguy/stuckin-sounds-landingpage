<template>
  <div class="text-center mb-4">
    <h2 class="fw-bold">{{ title }}</h2>
    <p v-if="subtitle" class="text-secondary mb-0">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}
defineProps<Props>()
</script>
