<script setup lang="ts">
import Comp1 from './components/Comp1.vue'
import Comp2 from './components/Comp2.vue'
import Comp3 from './components/Comp3.vue'
</script>

<template>
  <h1> App.vue </h1>
  <Comp1>
    <p> Comp1に引き継がれる </p>
  </Comp1>

  <Comp2>
    <p> Comp2に引き継がれる </p>
  </Comp2>
  <Comp2/>

  <Comp3>
    <template v-slot:default>
      <p> Comp3のslotに引き継がれる </p>
    </template>
    <template v-slot:slot2>
      <p> Comp3のslot2に引き継がれる </p>
    </template>    
  </Comp3>

</template>

