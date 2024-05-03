<template>
    <div>
        <LinkItem
            title="GitHub"
            url="https://github.com/BingusBoingus-Developer-Team"
            icon="fa fa-github"
        />
        <LinkItem
            title="Twitter"
            url="https://twitter.com/your-twitter-profile"
            icon="fab fa-twitter"
        />
        <LinkItem
            title="blvckleg.dev"
            url="https://blvckleg.dev"
            icon="fas fa-globe"
        />
    </div>
</template>

<script>
import LinkItem from './LinkItem.vue';

export default {
    components: {
        LinkItem
    }
};
</script>