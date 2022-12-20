import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    ],
    snackbar: {
      show: false,
      text: ''
    }
  },
  getters: {
  },
  mutations: {
    addNewTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };

      state.tasks.push(newTask);
      //this.newTaskTitle = "";
    },
    toggleTask(state, id) {
      let task = state.tasks.filter((x) => x.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state,id) {
      state.tasks = state.tasks.filter((x) => x.id !== id);
    },
    showSnackbar (state, text){
      let timeout = 0;

      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }

      setTimeout(() =>{
        state.snackbar.show = true;
      state.snackbar.text = text;
      }, timeout);
    }
  },
  actions: {
    addNewTask ({commit},newTaskTitle){
      commit('addNewTask',newTaskTitle);
      commit('showSnackbar', 'Task added!');
    },
    deleteTask({commit}, id){
      commit('deleteTask', id);
      commit('showSnackbar', 'Task deleted!');
    }
  },
  modules: {
  }
})
