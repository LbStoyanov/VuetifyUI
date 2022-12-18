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
      show: false
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
    showSnackbar (state){
      state.snackbar.show = true;
    }
  },
  actions: {
    addNewTask ({commit},newTaskTitle){
      commit('addNewTask',newTaskTitle)
      commit('showSnackbar')
    }
  },
  modules: {
  }
})
