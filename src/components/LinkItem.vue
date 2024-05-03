<template>
    <div class="link-item">
        <a :href="url" target="_blank" rel="noopener noreferrer">
            <img :src="icon" :alt="title" class="link-item__icon" />
        </a>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.link-item {
    display: inline-block;
}

.link-item__icon {
    width: 24px;
    height: 24px;
}
</style>