<script setup lang="ts">
import {inject} from "vue"
import CompChild from "./comps/CompChild.vue"

const childData = inject("Data")

</script>

<template>
  <h2> Comp3.vue </h2>
  <p>{{ childData }}</p>
  <CompChild/>
</template>

