<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <h2 class="mt-4"> Router Proj </h2>

  <RouterLink class="btn btn-primary m-3 px-3" 
    v-bind:to="{name: 'home'}">Home</RouterLink>
  <RouterLink class="btn btn-primary m-3 px-3" 
    v-bind:to="{name: 'user', params: {id: 3}}">User</RouterLink>
  <RouterLink class="btn btn-primary m-3 px-3" 
    v-bind:to="{name: 'page1'}">Page1</RouterLink>
  <RouterLink class="btn btn-primary m-3 px-3" 
    v-bind:to="{name: 'page2', params: {param1: 0, param2: 1}}">Page2</RouterLink>
  <br>

  <RouterView />

</template>

