<script setup lang="ts">
import { useRoute } from 'vue-router'

type Props = {
  param1: number;
  param2: number;
  param3: number;
}
const props = defineProps<Props>()

const router = useRoute()
</script>

<template>
  <h2> Page2 </h2>
  <p>{{ props }}</p>
  <p>{{ router }}</p>
</template>

