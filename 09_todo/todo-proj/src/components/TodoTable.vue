<script setup lang="ts">
import {useTodoStore} from "@/stores/todo"

// props
type Props = {
  tableStatus: string;
  buttonStatus: string;
}
defineProps<Props>();

// todoList
const todoStore = useTodoStore()

const deleteItem = (id: string): void => {
  todoStore.deleteTodoItem(id)
}

const changeStatus = (id: string, status: string): void => {
  todoStore.changeTodoStatus(id, status)
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todoStore.filteredTodoList(tableStatus).value" 
        :key="todo.id" class="align-middle">
        <td>{{ todo.id }}</td>
        <td>{{ todo.task }}</td>
        <td>{{ todo.status }}</td>
        <td>
          <button class="btn btn-outline-primary me-3" 
            @click="changeStatus(todo.id, buttonStatus)">{{ buttonStatus }}</button>
          <button class="btn btn-outline-danger" @click="deleteItem(todo.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

