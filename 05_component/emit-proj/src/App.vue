<script setup lang="ts">
import Comp1 from './components/Comp1.vue'
import Comp2 from './components/Comp2.vue'
import {ref} from "vue"

const n = ref(0)

const parentPlusOne = (): void => {
  console.log("plusOne")
  n.value++
}

const parentPlusN = (input: number): void => {
  console.log("plusN")
  n.value += input
}

</script>

<template>

  <p> {{ n }} </p>

  <h1> Comp1 </h1>
  <Comp1 
    v-bind:n="n"
    v-on:plusOne="parentPlusOne"/>

  <h1> Comp2 </h1>
  <Comp2 
    v-bind:n="n"
    v-on:plusN="parentPlusN"/>

</template>

