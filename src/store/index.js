import Vue from 'vue';
import Vuex from 'vuex';
import RobotModule from './modules/robots';
import UsersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        robots : RobotModule,
        users: UsersModule
    }
});
