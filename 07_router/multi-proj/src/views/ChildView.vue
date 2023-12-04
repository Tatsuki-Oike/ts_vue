<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <h2 class="mt-4"> Child </h2>
  
  <RouterLink class="btn btn-primary m-3 px-3" v-bind:to="{name: 'child1'}">Child1</RouterLink>
  <RouterLink class="btn btn-primary m-3 px-3" v-bind:to="{name: 'child2'}">Child2</RouterLink>
  <br>

  <RouterView />
</template>

