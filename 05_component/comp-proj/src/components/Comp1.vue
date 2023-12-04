<script setup lang="ts">
import {ref} from "vue"

const n = ref(0)
const plusOne = (): void => {
  n.value++
}

</script>

<template>
  <h2>Comp1</h2>
  <button v-on:click="plusOne"> {{ n }} </button>
</template>
