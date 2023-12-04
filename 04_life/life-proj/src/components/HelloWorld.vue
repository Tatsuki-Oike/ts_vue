<script setup lang="ts">
import {ref, onBeforeMount, onMounted,
  onBeforeUpdate, onUpdated, 
  onRenderTracked, onRenderTriggered,
  onBeforeUnmount, onUnmounted} from "vue"


console.log("created: HelloWorld.vue")

// mount
onBeforeMount(() => {
  const element1 = document.getElementById('count');
  console.log("onBeforeMount: count =", element1?.textContent)
})

onMounted(() => {
  const element2 = document.getElementById('count');
  console.log("onMounted: count =", element2?.textContent)
  console.log("--------------------")
})

// update
onBeforeUpdate(() => {
  const element3 = document.getElementById('count');
  console.log("onBeforeUpdate: count =", element3?.textContent)
})

onUpdated(() => {
  const element4 = document.getElementById('count');
  console.log("onUpdated: count =", element4?.textContent)
  console.log("--------------------")
})

// unmount
onBeforeUnmount(() => {
  const element5 = document.getElementById('count');
  console.log("onBeforeUnmount: count =", element5?.textContent)
})

onUnmounted(() => {
  const element6 = document.getElementById('count');
  console.log("onUnmounted: count =", element6?.textContent)
  console.log("--------------------")
})

// render
onRenderTracked((event) => {
  console.log("onRenderTracked:", event.target._value)
})

onRenderTriggered((event) => {
  console.log("onRenderTriggered:", event.newValue)
})

// updateFunction
const count = ref(0)
const plusOne = (): void => {
  count.value++
}

const flg = ref(false)
const changeFlg = (): void => {
  flg.value = !flg.value
}

const both = (): void => {
  plusOne()
  changeFlg()
}

</script>

<template>

  <h1 id="sampleId">life</h1>

  <button id="count" v-on:click="plusOne">{{ count }}</button>
  <br>
  <p>{{ count }}</p>

  <button v-on:click="changeFlg">{{ flg }}</button>
  <br>
  <p>{{ flg }}</p>

  <button v-on:click="both">Both</button>

</template>

