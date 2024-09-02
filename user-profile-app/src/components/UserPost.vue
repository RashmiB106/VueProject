<!-- src/components/UserPost.vue -->
<template>
    <v-card class="mb-4">
      <v-card-title class="text-h6">{{ post.title }}</v-card-title>
      <v-card-text class="text-body-2">
        {{ post.body }}
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    props: ['post'],
  };
  </script>
  