<template>
  <v-text-field
    v-model="newTaskTitle"
    @click:append="addNewTask"
    @keyup.enter="addNewTask"
    class="pa-3"
    outlined
    label="Add Task"
    append-icon="mdi-plus"
    hide-details
    clearable
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },
  methods: {
    addNewTask() {
      this.$store.commit("addNewTask", this.newTaskTitle);
      this.newTaskTitle = "";
    },
  },
};
</script>

<style></style>
