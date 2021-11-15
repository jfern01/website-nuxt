<template>
    <div>
        <Header>
            <h1 class="text-white font-tertiary display-3">Blog</h1>
        </Header>

        <section class="section blogs-area">
            <div class="container">
                <masonry :cols="colSettings" :gutter="30">
                    <article v-for="post in posts" :key="post.slug" class="card shadow mb-4" >
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
                </masonry>
                <div class="row">
                    <div class="col-12 text-center">
                        <div v-if="!posts.length" class="alert alert-warning" role="alert">
                            No posts yet. Check back soon!
                        </div>
                    </div>
                </div>
                <!-- <BPaginationNav
                    v-model="$page.posts.pageInfo.currentPage"
                    align="center"
                    size="lg"
                    router-component-name="nuxt-link"
                    :link-gen="linkGen"
                    :number-of-pages="$page.posts.pageInfo.totalPages" use-router></BPaginationNav> -->
            </div>
        </section>
    </div>
</template>

<script>
// import { BPaginationNav } from 'bootstrap-vue';

export default {
    components: {
        // BPaginationNav
    },
    data() {
        return {
            page: 1,
            perPage: 9,
            posts: [],
            colSettings: {
                default: 3,
                992: 2,
                767: 1,
            }
        };
    },
    async fetch() {
        this.posts = await this.$content('posts')
            .sortBy('date', 'desc')
            .skip(this.page * this.perPage - this.perPage)
            .limit(9)
            .fetch();
    },
    head() {
        return {
            title: 'Blog',
        }
    },
    methods: {
        linkGen(pageNum) {
            return {
                path: pageNum === 1 ? '/blog/' : `/blog/${pageNum}`
            };
        },
    },
};
</script>