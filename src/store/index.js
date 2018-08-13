import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    //Needs state object

    state: {
        cart: [],
    },
    // All changes must go through a mutation
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
    },
});
