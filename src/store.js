import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: localStorage.getItem('access_token') || '',
        currentUser: JSON.parse(localStorage.getItem('user')) || [],
        isUserLogged: localStorage.getItem('user') !== null
    },
    mutations: {
        login(state, user) {
            localStorage.setItem('user', JSON.stringify(user));
            state.currentUser = JSON.parse(localStorage.getItem('user'));
            state.isUserLogged = localStorage.getItem('user') !== null
        },

        logout(state) {
            localStorage.removeItem('user');
            state.currentUser = [];
            state.isUserLogged = localStorage.getItem('user') !== null
        }
    }
})