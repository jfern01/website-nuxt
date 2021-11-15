<template>
    <section class="section blogs-area">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title display-4">Latest Posts</h2>
                </div>
                <div v-for="post in posts" :key="post.slug" class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <article class="card shadow">
                        <nuxt-img v-if="post.thumbnail" class="rounded card-img-top" src="/images/logo/placeholder.png" alt="post-thumb" />
                        <nuxt-img v-else class="rounded card-img-top" :src="post.thumbnail" alt="post-thumb" />
                        <div class="card-body">
                            <h4 class="card-title">
                                <nuxt-link class="text-dark" :to="`/blog/${post.slug}`">{{ post.title }}</nuxt-link>
                            </h4>
                            <p class="cars-text">{{ post.description }}</p>
                            <nuxt-link class="btn btn-sm btn-primary" :to="`/blog/${post.slug}`">Read More</nuxt-link>
                        </div>
                    </article>
                </div>
                <div class="col-12 text-center">
                    <div v-if="!posts.length" class="alert alert-warning" role="alert">
                        No posts yet. Check back soon!
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            posts: [],
        };
    },
    async fetch() {
        this.posts = await this.$content('posts').sortBy('date', 'desc').limit(3).fetch();
    },
    methods: {}
};
</script>