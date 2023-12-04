<script setup lang="ts">
type Props = {
  n: number
}

type Emits = {
  (event: "plusOne"): void;
}

defineProps<Props>();
const emit = defineEmits<Emits>();

const childPlusOne = (): void => {
  console.log("ChildPlusOne")
  emit("plusOne")
}
</script>

<template>
  <button v-on:click=childPlusOne>{{ n }}</button>
</template>

