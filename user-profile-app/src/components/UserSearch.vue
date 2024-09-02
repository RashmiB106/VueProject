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
      <!-- Loader -->
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        class="my-4 loader"
      ></v-progress-circular>
    </v-card>
  </v-container>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
  data() {
    return {
      searchTerm: '',
      loading: false, // Loader state
    };
  },
  methods: {
    async onSearch() {
      this.loading = true; // Start loader
      try {
        await this.$emit('search-user', this.searchTerm);
      } finally {
        this.loading = false; // Stop loader
      }
    },
    debouncedSearch: debounce(function() {
      this.onSearch();
    }, 300), // Adjust the delay (in ms) as needed
  },
};
</script>

<style>
.loader {
  margin: auto !important;
  display: flex;
}
</style>
