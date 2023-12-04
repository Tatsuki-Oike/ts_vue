<script setup lang="ts">
import {ref} from "vue"

type Props = {
  title: string;
  content?: string;
}
const props = withDefaults(
  defineProps<Props>(),
  {content: "no content"}
)

const contentNew = ref(props.content)
</script>

<template>
  <h2>Comp4</h2>
  <p>{{ title }}</p>
  <p>{{ content }}</p>
  <p>{{ contentNew }}</p>
  <input type="text" v-model="contentNew">
</template>
