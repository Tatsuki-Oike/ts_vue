<script setup lang="ts">
import Comp1 from './components/Comp1.vue'
import Comp2 from './components/Comp2.vue'
import Comp3 from './components/Comp3.vue'
import Comp4 from './components/Comp4.vue'
import Comp5 from './components/Comp5.vue'
import {ref} from "vue"

// comp5
const sample = ref("item")

const arrayInit: string[] = ["item1", "item2", "item3"]
const array = ref(arrayInit)

</script>

<template>

  <h1> Comp1 </h1>
  <Comp1/>
  <Comp1/>
  <br><br>

  <h1> Comp2 </h1>
  <Comp2 title="title1" content="content1"/>
  <Comp2 title="title2" content="content2"/>
  <br>

  <h1> Comp3 </h1>
  <Comp3 title="title1"/>
  <Comp3 title="title2" content="content2"/>
  <br>

  <h1> Comp4 </h1>
  <Comp4 title="title1"/>
  <br><br>

  <h1> Comp5 </h1>
  <Comp5 v-bind:content="sample"/>
  <br><br>

  <h1> Comp5 繰り返し </h1>
  <Comp5 
    v-for="(item, index) in array" 
    v-bind:content="item" 
    v-bind:key="index" />
  
</template>

