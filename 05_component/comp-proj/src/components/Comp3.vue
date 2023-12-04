<script setup lang="ts">

type Props = {
  title: string;
  content?: string;
}

withDefaults(
  defineProps<Props>(),
  {content: "no content"}
)
</script>

<template>
  <h2>Comp3</h2>
  <p>{{ title }}</p>
  <p>{{ content }}</p>
</template>
