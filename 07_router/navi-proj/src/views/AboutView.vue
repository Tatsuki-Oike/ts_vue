<script setup lang="ts">
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

const router = useRouter()

const paramF = (input: string): void => {
  router.push({name: "about", params: {param: input}})
}

type Props = {
  param: string;
}
const props = defineProps<Props>()


onBeforeRouteLeave(
  (to, from) => {
    console.log("onBeforeRouteLeave")
    console.log(from)
    console.log(to)
  }
)

onBeforeRouteUpdate(
  (to, from) => {
    console.log("onBeforeRouteUpdate")
    console.log(from)
    console.log(to)
  }
)
</script>

<template>
  <h2> About </h2>
  {{ props }} <br>
  <button class="btn btn-info mt-3" v-on:click="paramF('Hello')"> Change </button>
</template>

