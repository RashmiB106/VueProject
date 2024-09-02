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
          try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            commit('SET_USER_DETAILS', data || {}); // Set to empty object if data is null or undefined
          } catch (error) {
            console.error('Error fetching user details:', error);
            commit('SET_USER_DETAILS', {}); // Set to empty object in case of error
          }
        },
        async fetchUserPosts({ commit }, userId) {
          try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
              params: { userId },
            });
            commit('SET_USER_POSTS', data || []); // Set to empty array if data is null or undefined
          } catch (error) {
            console.error('Error fetching user posts:', error);
            commit('SET_USER_POSTS', []); // Set to empty array in case of error
          }
        },
      },
    },
  },
});

export default store;
