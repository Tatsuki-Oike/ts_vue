<script setup lang="ts">
import {useCounterStore} from "@/stores/counter"

const counterStore = useCounterStore()
const plusOne = (): void => {
  counterStore.increment()
}
</script>

<template>

  <p class="mt-3">count: {{ counterStore.count }}</p>
  <p>doubleCount: {{ counterStore.doubleCount }}</p>
  <button class="btn btn-outline-primary" v-on:click="plusOne"> increment </button>

</template>
