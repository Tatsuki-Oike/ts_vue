<script setup lang="ts">
import {ref, provide} from "vue"
import Comp1 from "./components/Comp1.vue"
import Comp2 from "./components/Comp2.vue"
import Comp3 from "./components/Comp3.vue"

const parentDataInit = "Hello"
const parentData = ref(parentDataInit)
provide("Data", parentData)

</script>

<template>
  <h1> App.vue </h1>
  <p>{{ parentData }}</p>
  <Comp1/>
  <Comp2/>
  <Comp3/>

</template>

