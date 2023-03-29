<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const activeTodos = ref([]);

const input_content = ref("");

const todosAsc = computed(() =>
  todos.value.sort((a, b) => {
    return b.createdAt - a.createdAt;
  })
);

const addTodo = () => {
  if (input_content.value.trim() === "") {
    return;
  }
  todos.value.push({
    content: input_content.value,
    done: false,
    createdAt: new Date().getTime(),
  });
  input_content.value = "";
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

const removeTodoAll = () => {
  todos.value = [];
};

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  {
    deep: true,
  }
);

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});
</script>

<template>
  <TabView>
    <TabPanel header="All">
      <div class="input-section">
        <InputText
          v-model="input_content"
          placeholder="add details"
          style="
            width: 100%;
            border: 1px solid #bdbdbd;
            border-radius: 12px;
            height: 56px;
          "
        />
        <Button
          label="Add"
          style="border-radius: 12px; padding: 0 3rem"
          @click="addTodo()"
        />
      </div>
      <section class="todo-list">
        <div class="list">
          <div
            v-for="todo in todosAsc"
            :class="`todo-item ${todo.done && 'done'}`"
          >
            <div style="margin-right: 1rem">
              <Checkbox v-model="todo.done" :binary="true" />
              <!-- <span :class="`bubble ${todo.category}`"></span> -->
            </div>

            <div class="todo-content">
              <input type="text" v-model="todo.content" />
            </div>

            <!-- <div class="actions">
              <button class="delete" @click="removeTodo(todo)">Delete</button>
            </div> -->
          </div>
        </div>
      </section>
    </TabPanel>
    <TabPanel header="Active">
      <div class="input-section">
        <InputText
          v-model="input_content"
          placeholder="add details"
          style="
            width: 100%;
            border: 1px solid #bdbdbd;
            border-radius: 12px;
            height: 56px;
          "
        />
        <Button
          label="Add"
          style="border-radius: 12px; padding: 0 3rem"
          @click="addTodo()"
        />
      </div>
      <section class="todo-list">
        <div class="list">
          <div
            v-for="todo in todosAsc"
            :class="`todo-item ${todo.done && 'to-show'}`"
          >
            <div style="margin-right: 1rem">
              <Checkbox v-model="todo.done" :binary="true" />
              <!-- <span :class="`bubble ${todo.category}`"></span> -->
            </div>

            <div class="todo-content">
              <input type="text" v-model="todo.content" />
            </div>

            <!-- <div class="actions">
              <button class="delete" @click="removeTodo(todo)">Delete</button>
            </div> -->
          </div>
        </div>
      </section>
    </TabPanel>
    <TabPanel header="Complited">
      <section class="todo-list">
        <div class="list">
          <div
            v-for="todo in todosAsc"
            :class="`todo-item ${todo.done && 'done'}`"
          >
            <div style="margin-right: 1rem">
              <Checkbox v-model="todo.done" :binary="true" />
              <!-- <span :class="`bubble ${todo.category}`"></span> -->
            </div>

            <div class="todo-content">
              <input type="text" v-model="todo.content" />
            </div>

            <div class="actions">
              <button class="delete" @click="removeTodo(todo)">Delete</button>
            </div>
          </div>
        </div>
      </section>
      <div class="actions">
        <button class="delete" @click="removeTodoAll">Delete all</button>
      </div>
    </TabPanel>
  </TabView>
</template>

<style scoped>
.input-section {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
