<script setup lang="ts">
import {ref} from "vue"

import HelloWorld from './components/HelloWorld.vue'
const showFlg = ref(false);

const showComponent = () => {
  showFlg.value = !showFlg.value;
};
</script>

<template>
  <h1>App.vue</h1> <br>

  <button @click="showComponent">Show Component</button>
  <br><br>
  <HelloWorld v-if="showFlg"></HelloWorld>
  
</template>

