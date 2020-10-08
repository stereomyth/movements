import moment from 'moment';

export const state = () => ({
  interval: null,
  now: 0,
  time: 0,
  offset: 0,

  hour: 0,
  minute: 0,
  second: 0,

  hour12: 0,
});

export const mutations = {
  tick(state) {
    const m = moment();
    state.now = m;
    state.time = m;

    state.hour = m.hour();
    state.minute = m.minute();
    state.second = m.second();

    state.hour12 = m.format('h');
  },
};

export const actions = {
  init({ commit }) {
    window.setInterval(() => commit('tick'), 100);
  },
};
