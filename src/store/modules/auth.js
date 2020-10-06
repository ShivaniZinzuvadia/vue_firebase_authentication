import { db } from "../../firebase";

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
  async setUser({ commit }, userData) {
    await db.collection('users').doc(userData.uid).set(userData.user);
    commit("SET_USER", { user: userData.user });
  },

  unsetUser({ commit }){
    commit("SET_USER", { user: null })
  },

  async getUser({ commit }, uid){
    await db
    .collection("users")
    .doc(uid)
    .get()
    .then((user) => commit("SET_USER", { user: user.data() }))
    .catch((err) => {
      console.log(err.message);
      commit("SET_USER", { user: null })
    });
  }
};
