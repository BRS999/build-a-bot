import axios from 'axios';

export default {
    // State is always namespaced
    state: {
        foo: 'user-foo',
        user: null,
    },
    mutations: {
        updateCurrentUser(state, user) {
            state.user = user;
        },
    },
    getters: {
        foo(state) {
            return `user getter ${state.foo}`;
        }
    },
    actions: {
        signIn({ commit }) {
            axios.post('/api/sign-in')
                .then(result => commit('updateCurrentUser', result.data))
                .catch(console.error);
        },
    },
};
