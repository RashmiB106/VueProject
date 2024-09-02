<template>
  <v-container>
    <v-card v-if="Object.keys(userDetails).length > 0" class="max-w-sm mx-auto">
      <v-card-text>
        <v-col cols="12" class="py-0">
          <h1>User Details</h1>
        </v-col>
      </v-card-text>
      <v-card-title class="text-center user-details-wrapper py-4">
        <v-avatar size="40" class="mx-auto">
          <v-img :src="defaultAvatar" />
        </v-avatar>
        <div>
          <h2 class="text-xl font-semibold">{{ userDetails.name }}</h2>
          <p class="text-body-2">{{ userDetails.email }}</p>
          <div v-if="userDetails.website" class="mt-2 mb-2">
            <v-btn :href="userDetails.website" target="_blank" color="secondary" class="mx-auto">
              Visit Website
            </v-btn>
          </div>
        </div>
      </v-card-title>
      <v-card-text>
        <v-card-actions>
          <v-row class="w-100" justify="space-between">
            <v-col cols="9">
              <h1>Posts Based on Searched UserId:</h1>
            </v-col>
            <v-col class="text-right showPost-btn" cols="3">
              <v-btn @click="togglePosts" color="primary">
                {{ showPosts ? 'Hide Posts' : 'Show Posts' }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-container v-if="showPosts">
          <v-row>
            <v-col
              v-for="post in userPosts"
              :key="post.id"
              cols="12" sm="6" md="4" lg="3"
            >
              <v-card class="pa-3 mb-4 post-details-card">
                <v-card-title class="title-bg">{{ post.title }}</v-card-title>
                <v-card-text class="pt-2 pb-2">{{ post.body }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-card v-else>
      <v-card-title class="text-center">No Result Found</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import UserPost from './UserPost.vue';
import defaultAvatar from '../assets/default-user-img.png'; 

export default {
  components: { UserPost },
  data() {
    return {
      showPosts: true,
      defaultAvatar,
    };
  },
  computed: {
    ...mapState('users', ['userDetails', 'userPosts']),
  },
  methods: {
    togglePosts() {
      this.showPosts = !this.showPosts;
      this.$emit('toggle-posts', this.showPosts);
    },
    togglePostDetail(postId) {
      // Method to handle post detail view
      console.log(`View details for post ID: ${postId}`);
    },
  },
};
</script>

<style scoped>
.v-card {
  background-color: #f9f9f9;
}
.v-card-title {
  background-color: #e0e0e0;
}
.showPost-btn button {
  background: #48A9A6;
  color: white !important;
}
.title-bg {
  background-color: #aae7e4 !important;
}
.post-details-card {
  height: 230px;
}
</style>
