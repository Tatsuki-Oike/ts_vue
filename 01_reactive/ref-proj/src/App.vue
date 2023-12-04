<script setup lang="ts">
import {ref, reactive, computed, watchEffect, watch} from "vue";


// リアクティブ変数の定義
const sampleRef1 = ref("Hello")

const sampleRef2Init = "Hello2"
const sampleRef2 = ref(sampleRef2Init)

// 複数のリアクティブ変数の定義
const sampleRef3 = reactive({
  sample1: "Hello3",
  sample2: 2,
  sample3: true
})


// リアクティブ
const countInit = 0
const count = ref(countInit)

function plusOne(): void {
  if(count.value>=10){
    count.value=0
  }
  count.value++
}

setInterval(() => {
  plusOne();
}, 1000)


// computed
const twice = computed(
  (): number => {
    return 2 * count.value
  }
)

// computedWithArgs
const nTimesComputed = (n: number) => {
    return computed(() => n * count.value)
  }


// ウォッチャー

// watchEffect
const count2 = ref(0)
function nTimes(n: number, input: number): number{
    return n * input
  }
watchEffect(
  (): void => {
    count2.value = nTimes(4, count.value)
  }
)

// watch
const count3 = ref(0)
watch(count,
  (): void => {
    count3.value = nTimes(5, count.value)
  }
)

const count4 = ref(0)
watch(count,
  (newVal: number, oldVal: number): void => {
    count4.value = `oldVal: ${oldVal}, newVal: ${newVal}`
  }
)

</script>

<template>

  <h2>リアクティブ変数の定義</h2> <br>
  <h3>sampleRef1: {{sampleRef1}}</h3> <br>
  <h3>sampleRef2: {{sampleRef2}}</h3> 
  <br><br><br>

  <h2>複数のリアクティブ変数の定義</h2> <br>
  <h3>sampleRef3: {{sampleRef3}}</h3> <br>
  <h3>sampleRef3.sample1: {{sampleRef3.sample1}}</h3>
  <br><br><br>

  <h2>リアクティブ</h2> <br>
  <h3>count: {{count}}</h3>
  <br><br><br>

  <h2>computed</h2> <br>
  <h3>twice: {{twice}}</h3> <br>
  <h3>Ntimes: {{nTimesComputed(3)}}</h3>
  <br><br><br>

  <h2>ウォッチャー</h2> <br>
  <h3>count2: {{count2}}</h3> <br>
  <h3>count3: {{count3}}</h3> <br>
  <h3>count4: {{count4}}</h3>
  <br><br><br>

</template>
