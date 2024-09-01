// src/store.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  modules: {
    users: {
      namespaced: true,
      state: {
        userDetails: {},
        userPosts: [],
      },
      mutations: {
        SET_USER_DETAILS(state, details) {
          state.userDetails = details;
        },
        SET_USER_POSTS(state, posts) {
          state.userPosts = posts;
        },
      },
      actions: {
        async fetchUserDetails({ commit }, userId) {
          const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
          commit('SET_USER_DETAILS', data);
        },
        async fetchUserPosts({ commit }, userId) {
          const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            params: { userId },
          });
          commit('SET_USER_POSTS', data);
        },
      },
    },
  },
});

export default store;
