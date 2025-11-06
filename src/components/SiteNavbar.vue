<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#hero">Stuckin Sounds</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#rooms">Studios</a></li>
          <li class="nav-item"><a class="nav-link" href="#pricing">Pricing</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          <li class="nav-item ms-lg-2">
            <a class="btn btn-primary btn-sm" href="#contact">Book a Session</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// no-op
</script>

<style scoped>
.navbar-brand { letter-spacing: 0.3px; }
</style>
