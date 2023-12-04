<script setup lang="ts">
import {inject} from "vue"

const grandchildData = inject("Data")
</script>

<template>
  <h3>Comp11</h3>
  <p>{{ grandchildData }}</p>
</template>

