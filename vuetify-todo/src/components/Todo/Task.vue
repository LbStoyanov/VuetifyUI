<template>
   <div >
        <v-list-item
          @click="$store.commit('toggleTask', task.id)"
          :class="{ 'blue lighten-4': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-btn @click.stop="$store.dispatch('deleteTask', task.id)" icon>
                <v-icon color="red">mdi-delete-forever</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>

        <dialog-delete />
      </div>
</template>

<script>
export default {
    props: ['task'],
    components: {
      'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue').default
    }
}
</script>
