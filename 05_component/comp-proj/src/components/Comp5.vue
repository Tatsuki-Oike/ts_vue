<script setup lang="ts">
type Props = {
  content: string;
}

defineProps<Props>()

</script>

<template>
  <h2>Comp5</h2>
  <p>{{ content }}</p>
</template>
