<script setup lang="ts">
type Props = {
  id: number
}
const props = defineProps<Props>()

</script>

<template>
  <h2> User </h2>
  <p>{{ props }}</p>
</template>

