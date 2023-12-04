import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';

export const useTodoStore = defineStore('todo', () => {

  // todoList
  type todoObject = {
    id: string;
    task: string;
    status: string;
  }
  
  const todoListInit: todoObject[] = [
    { id: uuidv4(), task: 'task01', status: "todo" },
    { id: uuidv4(), task: 'task02', status: "todo" },
    { id: uuidv4(), task: 'task03', status: "todo" },
    { id: uuidv4(), task: 'task04', status: "todo" },
    { id: uuidv4(), task: 'task05', status: "active" },
    { id: uuidv4(), task: 'task06', status: "active" },
    { id: uuidv4(), task: 'task07', status: "active" },
    { id: uuidv4(), task: 'task08', status: "done" },
    { id: uuidv4(), task: 'task09', status: "done" },
    { id: uuidv4(), task: 'task10', status: "done" },
  ];
  const todoList = ref(todoListInit)

  // status filter
  const filteredTodoList = (status: string) => {
      return computed(() => todoList.value.filter(todo => todo.status === status))
    }

  // add task
  const addTask = (newTask: string) => {
    const newTodo = {
      id: uuidv4(),
      task: newTask,
      status: 'todo',
    };
    todoList.value.push(newTodo);
  };

  // delete task
  function deleteTodoItem(id: string) {
    const index = todoList.value.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todoList.value.splice(index, 1);
    }
  }
  
  // change status
  function changeTodoStatus(id: string, newStatus: string) {
    const todo = todoList.value.find((todo) => todo.id === id);
    if (todo) {
      todo.status = newStatus;
    }
  }

  return { todoList, addTask, filteredTodoList, deleteTodoItem, changeTodoStatus }
})
