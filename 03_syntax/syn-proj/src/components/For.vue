<script setup lang="ts">
import {ref} from "vue"

const sampleArrayInit: string[] = ["item1", "item2", "item3"]
const sampleArray = ref(sampleArrayInit)

type ObjType = {
    [key: string]: string;
}
const sampleObjInit: ObjType = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
const sampleObj = ref(sampleObjInit)

type UserType = {
  userId: number;
  userName: string;
};
const users: UserType[] = [
  { userId: 0, userName: "Tatsuki" },
  { userId: 1, userName: "Akira" },
];

const sampleMapInit = new Map<number, string>()
sampleMapInit.set(0, "Tatsuki")
sampleMapInit.set(1, "Akira")
const sampleMap = ref(sampleMapInit)

</script>

<template>
  
  <h1> for </h1>
  
  <h2> Array </h2>
  <ul>
    <li v-for="item in sampleArray"
        v-bind:key="item"
        class="list-group">
      {{ item }}
    </li>
  </ul>

  <ul>
    <li v-for="(item, index) in sampleArray"
        v-bind:key="item"
        class="list-group">
      {{ index }}: {{ item }}
    </li>
  </ul>
  <br>

  <h2> Obj </h2>
  <ul>
    <li v-for="(value, key) in sampleObj"
        v-bind:key="value"
        class="list-group">
      {{ key }}: {{ value }}
    </li>
  </ul>
  <ul>
    <li v-for="(value, key, index) in sampleObj"
        v-bind:key="'index'+'key'"
        class="list-group">
      {{ index }}: {{ key }}, {{ value }}
    </li>
  </ul>
  <br>

  <h2> ArrayObj </h2>
  <ul>
    <li v-for="(item, index) in users"
        v-bind:key="item.userId"
        class="list-group">
      {{index}}: {{item}}, {{ item.userId }}, {{ item.userName }}
    </li>
  </ul>
  <br>

  <h2> Map </h2>
  <ul>
    <li v-for="[key, value] in sampleMap"
        v-bind:key="key"
        class="list-group">
      {{key}}: {{value}}
    </li>
  </ul>
  <br>

  <h2> カウンタ変数 </h2>
  <ul>
    <li v-for="n in 3"
        v-bind:key="n"
        class="list-group">
      {{ n }}
    </li>
  </ul>
  <br>

</template>

