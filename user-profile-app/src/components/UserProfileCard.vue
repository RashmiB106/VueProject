<!-- src/components/UserProfileCard.vue -->
<template>
    <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-4 text-center">
            <img v-if="userDetails.profilePicture" :src="userDetails.profilePicture" alt="Profile Picture"
                class="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 class="text-xl font-semibold">{{ userDetails.name }}</h2>
            <p class="text-gray-600">{{ userDetails.email }}</p>
        </div>
        <div class="p-4">
            <button @click="togglePosts" class="w-full bg-blue-500 text-white p-2 rounded-lg mb-4">
                Toggle Posts
            </button>
            <div v-if="showPosts">
                <slot :posts="userPosts">
                    <UserPost v-for="post in userPosts" :key="post.id" :post="post" />
                </slot>
            </div>
        </div>
    </div>
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
    },
};
</script>