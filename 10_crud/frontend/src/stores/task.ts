import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

export const useTaskStore = defineStore('task', () => {

  const allTaskApiIUrl = "http://127.0.0.1:5000/api/allTask"
  const TaskApiUrl = "http://127.0.0.1:5000/api/task"
  type todoObject = {
    id: string;
    task: string;
    status: string;
  }
  
  const todoListInit: todoObject[] = []
  const todoList = ref(todoListInit)
  
  // データを取得するための非同期メソッドを追加
  async function fetchData() {
    try {
      const response = await axios.get(allTaskApiIUrl)
      const jsonResponse = JSON.parse(response.data)
      todoList.value = jsonResponse.tasks;
    } catch (error) {
      console.error('データの取得に失敗しました', error)
    }
  }

  fetchData()
  
  // status filter
  const filteredTodoList = (status: string) => {
      return computed(() => todoList.value.filter(todo => todo.status === status))
    }  

  // change
  async function changeTodoStatus(id: string, newStatus: string) {
    try {
      const data = {
        status: newStatus,
      };
  
      // PUTリクエストを送信
      const response = await axios.put(`${TaskApiUrl}/${id}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      fetchData()
  
      // サーバーからの応答を処理
      console.log('PUTリクエストが成功しました:', response.data);
    } catch (error) {
      console.error('PUTリクエストが失敗しました:', error);
    }
  }

  // delete
  async function deleteTodoItem(id: string) {
    try {
  
      // DELETEリクエストを送信
      const response = await axios.delete(`${TaskApiUrl}/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      fetchData()
  
      // サーバーからの応答を処理
      console.log('DELETEリクエストが成功しました:', response.data);
    } catch (error) {
      console.error('DELETEリクエストが失敗しました:', error);
    }
  }

  // add
  async function addTodoItem(newTask: string) {
    try {

      const data = {
        id: uuidv4(),
        task: newTask,
        status: 'todo',
      };
  
      // DELETEリクエストを送信
      const response = await axios.post(allTaskApiIUrl, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      fetchData()
  
      // サーバーからの応答を処理
      console.log('POSTリクエストが成功しました:', response.data);
    } catch (error) {
      console.error('POSTリクエストが失敗しました:', error);
    }
  }

  return { todoList, filteredTodoList, changeTodoStatus, deleteTodoItem, addTodoItem }
})
