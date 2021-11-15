<template>
    <div v-if="post">
        <Header>
            <h1 class="text-white font-tertiary display-5">{{ post.title }}</h1>
        </Header>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <p class="font-secondary">Published on {{ post.date }} by
                            <span class="text-primary">{{ post.author }}</span>
                        </p>
                        <div class="content">
                            <nuxt-content :document="post" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: null,
        };
    },
    async fetch() {
        this.post = await this.$content(`posts/${this.$route.params.slug}`).fetch();
    },
    head() {
        return {
            title: 'Blog',
        }
    },
};
</script>

<style scoped lang="scss">
@import '@/node_modules/prismjs/themes/prism.css'
</style>