<template>
  <div>
    <UserSearch @search-user="onSearchUser" />
    <UserProfileCard v-if="userId" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import UserSearch from './components/UserSearch.vue';
import UserProfileCard from './components/UserProfileCard.vue';

export default {
  components: { UserSearch, UserProfileCard },
  data() {
    return {
      userId: null,
    };
  },
  methods: {
    ...mapActions('users', ['fetchUserDetails', 'fetchUserPosts']),
    onSearchUser(userId) {
      this.userId = userId;
      this.fetchUserDetails(userId);
      this.fetchUserPosts(userId);
    },
  },
};
</script>

