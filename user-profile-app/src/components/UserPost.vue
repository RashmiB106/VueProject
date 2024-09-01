<!-- src/components/UserPost.vue -->
<template>
    <div class="bg-white shadow-md rounded-lg p-4 mb-4">
        <h4 class="text-lg font-semibold mb-2">{{ post.title }}</h4>
        <p class="text-gray-600">{{ post.body }}</p>
    </div>
</template>

<script>
export default {
    props: ['post'],
};
</script>