<script setup lang="ts">
import {ref} from "vue"
import { useRouter } from 'vue-router'

const router = useRouter()

const userF = (id: number): void => {
  router.push({name: "user", params: {id: id}})
}

const inputId = ref(0)
</script>

<template>
  <h2> Page1 </h2>
  <input type="text" class="my-3" v-model="inputId"> <br>
  <button class="btn btn-info" v-on:click="userF(inputId)"> User {{ inputId }} </button>
</template>

