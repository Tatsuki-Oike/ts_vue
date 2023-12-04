<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <h2 class="mt-4"> Router Proj </h2>
  
  <RouterLink class="btn btn-primary m-3 px-3" 
    v-bind:to="{name: 'home'}">Home</RouterLink>
  <RouterLink class="btn btn-primary m-3 px-3" 
    v-bind:to="{name: 'child'}">Child</RouterLink>
  <RouterLink class="btn btn-primary m-3 px-3" 
    v-bind:to="{name: 'multi'}">Multi</RouterLink>
  <br>

  <RouterView />
</template>

