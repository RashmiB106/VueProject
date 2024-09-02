<!-- src/components/UserSearch.vue -->
<template>
  <v-container>
    <v-card class="max-width-md mx-auto p-4">
      <v-card-title>
        <span class="text-h6">Search User by ID</span>
      </v-card-title>
      <v-card-subtitle>
        <v-text-field
          v-model="searchTerm"
          @input="debouncedSearch"
          label="Enter user ID"
          outlined
          dense
        />
      </v-card-subtitle>
    </v-card>
  </v-container>
</template>

<script>
import debounce from 'lodash/debounce';

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
    debouncedSearch: debounce(function() {
      this.onSearch();
    }, 300), // Adjust the delay (in ms) as needed
  },
};
</script>
