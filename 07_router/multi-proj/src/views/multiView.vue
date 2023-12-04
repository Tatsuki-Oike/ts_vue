<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <h2 class="mt-4"> Multi </h2>
  
  <RouterLink class="btn btn-primary m-3 px-3" v-bind:to="{name: 'multi1'}">Multi1</RouterLink>
  <RouterLink class="btn btn-primary m-3 px-3" v-bind:to="{name: 'multi2'}">Multi2</RouterLink>
  <br>

  <RouterView />
  <RouterView name="sub" />
</template>

