<script setup lang="ts">
import {ref} from "vue"
import { RouterLink, RouterView } from 'vue-router'
import {useTodoStore} from "@/stores/todo"

const todoStore = useTodoStore()
const newTask = ref("")

const addTask = (): void => {
  if(newTask.value !== ""){
    todoStore.addTask(newTask.value) 
  }
  newTask.value = ""
}
</script>

<template>

  <h2 class="mt-5"> TodoList</h2>

  <form class="my-3" @submit.prevent="addTask">
    <div class="form-group row">
      <div class="col-8">
        <input type="text" class="form-control" v-model="newTask" placeholder="新しいタスク入力">
      </div>
      <button type="submit" class="col-2 btn btn-primary">タスクを追加</button>
    </div>
  </form>

  <RouterLink class="btn btn-primary my-3" to="/">Home</RouterLink>
  <RouterLink class="btn btn-primary ms-3" to="/active">Active</RouterLink>
  <RouterLink class="btn btn-primary ms-3" to="/done">Done</RouterLink>
  
  <RouterView />

</template>
