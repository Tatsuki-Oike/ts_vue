<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    
  <h2 class="mt-4"> App.vue </h2>
  <RouterLink class="btn btn-primary m-3 px-3" to="/">Home</RouterLink>
  <RouterLink class="btn btn-primary m-3 px-3" 
    v-bind:to="{name: 'about', params: {param: 'default'}}">Page7</RouterLink>

  <RouterView />

</template>

