import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArgStore = defineStore('argStore', () => {
  const count = ref(0)

  // computer
  const doubleCount = computed(() => count.value * 2)

  const Ncount = (n: number) => {
      return computed(() => n * count.value)
    }

  // function
  function increment() {
    count.value++
  }

  function incrementN(n: number) {
    count.value += n
  }

  // reset
  function reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, Ncount, incrementN, reset }
})
