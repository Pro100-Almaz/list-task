import { ref, computed } from "vue";
import { defineStore } from "pinia";

export interface task {
  id: number;
  text: String;
}

export interface ToDo {
  currentTodo: string;
  listTodos: String[];
  inProcessTodos: String[];
  completedTodos: String[];
}

export const useTodoStore = defineStore("todo", {
  state: () =>
    ({
      currentTodo: "",
      listTodos: [],
      inProcessTodos: [],
      completedTodos: [],
    } as ToDo),
  actions: {
    addTodo(todo: string) {
      this.listTodos.push(todo);
      this.inProcessTodos.push(todo);
    },
    completeTodo(todo: string) {
      for (let i = 0; i < this.inProcessTodos.length; i++) {
        if (this.inProcessTodos[i] == todo) {
          this.inProcessTodos.splice(i, 1);
          break;
        }
      }
      this.completedTodos.push(todo);
      this.listTodos.push(todo);
    },
    deleteTodo(todo: string) {
      for (let i = 0; i < this.completedTodos.length; i++) {
        if (this.completedTodos[i] == todo) {
          this.completedTodos.splice(i, 1);
          break;
        }
      }
      for (let i = 0; i < this.listTodos.length; i++) {
        if (this.listTodos[i] == todo) {
          this.listTodos.splice(i, 1);
          break;
        }
      }
    },
  },
  getters: {},
});
