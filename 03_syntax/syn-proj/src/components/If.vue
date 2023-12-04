<script setup lang="ts">

import {ref} from "vue"
const selectedOption = ref("A")

</script>

<template>
  
  <h1> if </h1>
  <p>選択:{{ selectedOption }}</p>
  <div>
    <label><input type="radio" v-model="selectedOption" value="A"> A </label>
    <label><input type="radio" v-model="selectedOption" value="B"> B </label>
    <label><input type="radio" v-model="selectedOption" value="C"> C </label>
  </div>
  <br>

  <h2> 単純なif </h2>
  <p v-if="selectedOption==='A'"> Aを選択しています </p>
  <br>

  <h2> if elif else </h2>
  <p v-if="selectedOption==='A'"> Aを選択しています </p>
  <p v-else-if="selectedOption==='B'"> Bを選択しています </p>
  <p v-else> Cを選択しています </p>
  <br>

  <h2> まとめて表示 </h2>
  <div v-if="selectedOption==='A'">
    <p> Aを選択しています </p>
    <p> こちらもまとめて表示させます </p>
  </div>
  <br>

  <h2> templateで表示 </h2>
  <template v-if="selectedOption==='A'">
    <p> Aを選択しています </p>
    <p> こちらもまとめて表示させます </p>
  </template>
  <br>

  <h2> v-showで表示 </h2>
  <div v-show="selectedOption==='A'">
    <p> Aを選択しています </p>
    <p> こちらもまとめて表示させます </p>
  </div>

</template>

