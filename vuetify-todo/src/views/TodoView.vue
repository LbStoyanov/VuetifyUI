<template>
  <div>
    <v-list 
    class="pt-0"
    flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item 
        @click="toggleTask(task.id)"
        :class="{ 'blue lighten-4': task.done}"
        >
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
            :class="{'text-decoration-line-through' : task.done}"
            >{{task.title}}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
          <v-btn 
          @click.stop="deleteTask(task.id)"
          icon>
            <v-icon color="red">mdi-delete-forever</v-icon>
          </v-btn>
        </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Wake up",
          done: false,
        },
        {
          id: 2,
          title: "Go workout",
          done: false,
        },
        {
          id: 3,
          title: "Build you portfolio",
          done: false,
        },
      ]
    };
  },
  methods:{
    toggleTask(id){
      let task = this.tasks.filter(x => x.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(x => x.id !== id);
    }
  }
};
</script>
