import { createStore } from 'vuex';
import coachesModule from './coaches/index';
import requestsModule from './requests/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
  mutations: null,
});

export default store;
