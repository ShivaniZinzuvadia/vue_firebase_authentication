export const state = {
  currentUser: null,
};

export const getters = {
  currentUser: (state) => state.currentUser,
};

export const mutations = {
  SET_USER(state, { user }) {
    state.currentUser = user;
  },
};

export const actions = {
  setUser({ commit }, user) {
    commit("SET_USER", { user: user });
  },
};
