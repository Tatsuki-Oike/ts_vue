<script setup lang="ts">
import {ref} from "vue"
import {useArgStore} from "@/stores/arg"

const N = ref(3)

const argStore = useArgStore()

const plusOne = (): void => {
  argStore.increment()
}

const plusN = (): void => {
  argStore.incrementN(N.value)
}

const reset = (): void => {
  argStore.reset()
}
</script>

<template>

  <p class="mt-5">count: {{ argStore.count }}</p> 
  <p>doubleCount: {{ argStore.doubleCount }}</p>
  <p>Ncount: {{ argStore.Ncount(N) }}</p> <br>

  <div class="row">
    <button class="btn btn-outline-primary col-1 me-1" v-on:click="plusOne">increment</button>
    <button class="btn btn-outline-primary col-1 me-1" v-on:click="plusN">incrementN</button>
    <button class="btn btn-outline-primary col-1" v-on:click="reset">reset</button>
  </div>

</template>
