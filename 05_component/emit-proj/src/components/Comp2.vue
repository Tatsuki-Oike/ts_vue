<script setup lang="ts">
import {ref} from "vue"
type Props = {
  n: number
}

type Emits = {
  (event: "plusN", input: number): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();


const inputNumber = ref(3)

const childPlusN = (): void => {
  console.log("ChildPlusN")
  emit("plusN", inputNumber.value)
}
</script>

<template>
  <button v-on:click=childPlusN> + {{ inputNumber }}</button>
</template>

