<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <h2 class="mt-3"> Pinia </h2>
  
  <RouterLink class="btn btn-primary me-3" to="/">Home</RouterLink>
  <RouterLink class="btn btn-primary" to="/arg">Arg</RouterLink>

  <RouterView />
</template>
