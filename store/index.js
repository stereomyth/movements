import moment from 'moment';

export const state = () => ({
  now: 0,
});

export const mutations = {
  tick(state) {
    state.now = moment();
  },
};

export const actions = {
  init({ commit }) {
    window.setInterval(() => commit('tick'), 200);
  },
};
