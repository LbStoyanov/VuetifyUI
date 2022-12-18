<template>
  <div class="home">
    <field-add-task />

    <list-tasks 
    v-if="$store.state.tasks.length" 
    />

    <div v-else class="no-tasks">
      <v-icon size="100" color="green"> mdi-check </v-icon>
      <div class="text-h5 primary--text">No tasks added!</div>
    </div>
  </div>
</template>

<script>
//Conventional way to add refer components => import FieldAddTask from '@/components/Todo/FieldAddTask.vue'
export default {
  name: "Home",

  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,

  },
};
</script>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.7
</style>
