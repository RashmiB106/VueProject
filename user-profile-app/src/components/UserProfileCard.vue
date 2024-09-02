<!-- src/components/UserProfileCard.vue -->
<template>
    <v-card v-if="Object.keys(userDetails).length > 0" class="max-w-sm mx-auto">
      <v-card-title class="text-center">
        <v-avatar size="120" class="mx-auto">
          <!-- Use a default avatar if no profile picture -->
          <v-img src="https://via.placeholder.com/120" />
        </v-avatar>
        <div>
          <h2 class="text-xl font-semibold">{{ userDetails.name }}</h2>
          <p class="text-body-2">{{ userDetails.email }}</p>
          <!-- Website link -->
          <div v-if="userDetails.website" class="mt-2">
            <v-btn :href="userDetails.website" target="_blank" color="secondary" class="mx-auto">
              Visit Website
            </v-btn>
          </div>
        </div>
      </v-card-title>
      <v-card-actions v-if="userPosts.length > 0">
        <v-btn @click="togglePosts" color="primary" class="w-full">
          {{ showPosts ? 'Hide Posts' : 'Show Posts' }}
        </v-btn>
      </v-card-actions>
      <v-card-text v-if="showPosts">
        <v-container>
          <v-row>
            <v-col
              v-for="post in userPosts"
              :key="post.id"
              cols="12" sm="6" md="4" lg="3"
            >
              <v-card class="pa-3 mb-4">
                <v-card-title>{{ post.title }}</v-card-title>
                <v-card-text>{{ post.body }}</v-card-text>
                <v-card-actions>
                  <v-btn @click="togglePostDetail(post.id)" color="primary">Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-card v-else>
      <v-card-title class="text-center">No Result Found</v-card-title>
    </v-card>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import UserPost from './UserPost.vue';
  
  export default {
    components: { UserPost },
    data() {
      return {
        showPosts: true,
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
  </style>
  