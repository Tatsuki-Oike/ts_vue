<script setup lang="ts">
import {inject} from "vue"

const childData = inject("Data")
</script>

<template>
  <h2>Comp2</h2>
  <p>{{ childData }}</p>
</template>

