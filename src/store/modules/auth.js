import { db } from "../../firebase";

export const state = {
  currentUser: null,
};

export const getters = {
  currentUser: (state) => state.currentUser,
};

export const mutations = {
  SET_USER(state,  user) {
    state.currentUser = user;
  },
};

export const actions = {
  async setUser({ commit }, userData) {
    await db.collection('users').doc(userData.uid).set(userData.user);
    commit("SET_USER", userData);
  },

  unsetUser({ commit }){
    commit("SET_USER", null)
  },

  async getLoggedInUser({ commit }, uid){
    await db
    .collection("users")
    .doc(uid)
    .get()
    .then((user) => commit("SET_USER", { uid: user.id ,user: user.data() }))
    .catch((err) => {
      console.log(err.message);
      commit("SET_USER", null);
    });
  },

  updateProfile({commit, getters }, profileData){
    let uid = getters.currentUser.uid;
    db.collection('users')
    .doc(uid)
    .update(profileData)
    .then(() => {
      commit("SET_USER",{ uid: uid ,user: profileData });
    })
  }
};
