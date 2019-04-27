import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        accessToken: localStorage.getItem('access_token') || '',
        currentUser: {},
        isUserLogged: false
    },
    mutations: {
        setUser(state, user) {
            state.currentUser = user;
            state.isUserLogged = true
        },

        deleteUser(state) {
            state.currentUser = {};
            state.isUserLogged = false
        }
    }
})