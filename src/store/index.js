import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    users: [],
    loggedInUser: null,
  },
  mutations: {
    ADD_USER(state, user) {
      state.users.push(user);
    },
    LOGIN_USER(state, user) {
      state.loggedInUser = user;
    },
    UPDATE_USER(state, updatedUser) {
      const index = state.users.findIndex(
        (user) => user.username === updatedUser.username
      );
      if (index !== -1) {
        state.users.splice(index, 1, updatedUser);
        if (
          state.loggedInUser &&
          state.loggedInUser.username === updatedUser.username
        ) {
          state.loggedInUser = updatedUser;
        }
      }
    },
  },
  actions: {
    registerUser({ commit, state }, user) {
      if (!state.users.find((u) => u.username === user.username)) {
        commit("ADD_USER", user);
        return true; // Registration successful
      }
      return false; // Username already exists
    },
    loginUser({ commit, state }, credentials) {
      const user = state.users.find(
        (u) =>
          u.username === credentials.username &&
          u.password === credentials.password
      );
      if (user) {
        commit("LOGIN_USER", user);
        return true; // Login successful
      }
      return false; // Invalid credentials
    },
  },
  getters: {
    getLoggedInUser: (state) => state.loggedInUser,
  },
});
