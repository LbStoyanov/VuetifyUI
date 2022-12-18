<template>
  <div class="home">
    <field-add-task />

    <list-tasks 
    v-if="$store.state.tasks.length" 
    />

    <no-tasks v-else class="no-tasks" />
    
  </div>
</template>

<script>
//Conventional way to add refer components => import FieldAddTask from '@/components/Todo/FieldAddTask.vue'
export default {
  name: "Home",

  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
    "no-tasks": require('@/components/Todo/NoTasks.vue').default

  },
};
</script>

<style>

</style>
