<!-- src/components/UserSearch.vue -->
<template>
    <div class="p-4">
      <input
        v-model="searchTerm"
        @input="onSearch"
        placeholder="Search user by ID..."
        class="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: '',
      };
    },
    methods: {
      onSearch() {
        this.$emit('search-user', this.searchTerm);
      },
    },
  };
  </script>
  