import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: []
    },

    mutations : {
        ADD_TASK(state, task) {
            state.tasks.push(task)
        },

        TASK_COMPLETED(state, task) {
            task.completed = !task.completed
        }
    },

    actions : {
        git(context, task) {
            //faço o ajax no evento de sucesso chamo a mutation

            context.commit('ADD_TASK', task)
        }
    }


})