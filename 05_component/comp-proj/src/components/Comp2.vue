<script setup lang="ts">
type Props = {
  title: string;
  content: string;
}
defineProps<Props>();
</script>

<template>
  <h2>Comp2</h2>
  <p>{{ title }}</p>
  <p>{{ content }}</p>
</template>
