import axios from 'axios';

export default {
    //Needs state object
    state: {
        cart: [],
        parts: null
    },
    // All changes must go through a mutation
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
        updateParts(state, parts) {
            state.parts = parts;
        }
    },
    actions: {
        getParts({ commit }) {
            axios.get('/api/parts')
                .then(result => commit('updateParts', result.data))
                .catch(console.error);
        },
    },
    getters: {
        cartSaleItems(state) {
            return state.cart.filter(item => item.head.onSale);
        }
    }
};
