<script setup lang="ts">
import {ref} from "vue"

// v-bind
const url = ref("https://www.youtube.com/@dken")
const hrefVal = ref("href")

const urlTarget = ref({
  href: "https://www.youtube.com/@dken",
  target: "_blank"
})

// v-bind / style
const style1 = ref({
  color: "red",
  backgroundColor: "black"
})

const style2 = ref({
  "font-size": "20pt"
})
const class1 = ref({
  "text-primary": true,
  "border": true
})

// v-on
const count = ref(0)
const onClick = (): void => {
  count.value++
}

// v-model
const inputText = ref("")
const inputTextArea = ref("")
const selectedOption = ref("")
const inputCheck = ref("")
const class2 = ref({
  "border": inputCheck,
  "border-primary": inputCheck
})

</script>

<template>
  
  <h2> v-bind </h2>
  <p><a v-bind:href="url"> Yourubeチャンネル </a></p>
  <p><a :href="url"> Yourubeチャンネル </a></p>
  <p><a v-bind:[hrefVal]="url"> Yourubeチャンネル </a></p>
  <p><a v-bind="urlTarget"> Yourubeチャンネル </a></p>
  <br>

  <h2> v-bind / style </h2>
  <p v-bind:style="style1"> style1 </p>
  <p v-bind:style="style2"> style2 </p>
  <p v-bind:style="[style1, style2]"> [style1, style2] </p>
  <p v-bind:class="class1"> class1 </p>
  <br>

  <h2> v-on </h2>
  <p>{{ count }}</p>
  <button v-on:click="onClick" class="btn btn-primary"> Click </button>
  <br><br>

  <h2> v-model </h2>
  {{ inputText }} <br>
  <input type="text" v-model="inputText"> <br><br>

  {{ inputTextArea }} <br>
  <textarea v-model="inputTextArea"></textarea> <br><br>

  {{ selectedOption }} <br>
  <label>
    <input type="radio" v-model="selectedOption" value="A"> A
  </label>
  <label>
    <input type="radio" v-model="selectedOption" value="B"> B
  </label>
  <label>
    <input type="radio" v-model="selectedOption" value="C"> C
  </label>
  <br>
    
  {{ inputCheck }} <br>
  <input type="checkbox" v-model="inputCheck"> Border <br>
  <p v-bind:class="class2"> Hello </p>
  <br><br>

</template>

