<template>
    <section class="testimonials-component section bg-primary position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title display-4 text-white mb-5">Testimonials</h2>
                </div>
                <div class="col-lg-10 mx-auto">
                    <VueSlickCarousel
                        v-if="!$fetchState.pending"
                        :speed="300"
                        :adaptive-height="false"
                        :arrows="false"
                        :dots="true"
                        :autoplay="true"
                        :autoplay-speed="5000"
                        :swipe-to-slide="true">
                        <div v-for="testimonial in testimonials" :key="testimonial.slug" class="text-center testimonial-content">
                            <i class="ti-quote-right text-white icon mb-4 d-inline-block"></i>
                            <div class="text-white mb-4 content">
                                <nuxt-content :document="testimonial" />
                            </div>
                            <a :href="testimonial.authorUrl" target="_blank">
                                <nuxt-img
                                    v-if="testimonial.authorPhoto"
                                    class="img-fluid rounded-circle mb-4 d-inline-block"
                                    :src="testimonial.authorPhoto"
                                    alt="client-image"
                                    width="75">
                                </nuxt-img>
                                <h4 class="text-white">{{ testimonial.author }}</h4>
                                <h6 class="text-muted mb-4">{{ testimonial.title }}</h6>
                            </a>
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
        </div>
        <img id="testimonials-bg-map" src="/images/backgrounds/map.png" alt="map" class="img-fluid position-absolute" />
        <img id="testimonials-bg-shape-1" src="/images/illustrations/dots-group-v.png" alt="bg-shape" class="img-fluid position-absolute" />
        <img id="testimonials-bg-shape-2" src="/images/illustrations/leaf-orange.png" alt="bg-shape" class="img-fluid position-absolute" />
        <img id="testimonials-bg-shape-3" src="/images/illustrations/dots-group-sm.png" alt="bg-shape" class="img-fluid position-absolute" />
        <img id="testimonials-bg-shape-4" src="/images/illustrations/leaf-pink-round.png" alt="bg-shape" class="img-fluid position-absolute" />
        <img id="testimonials-bg-shape-5" src="/images/illustrations/leaf-cyan.png" alt="bg-shape" class="img-fluid position-absolute" />
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
    components: {
        VueSlickCarousel,
    },
    data () {
        return {
            testimonials: [],
        };
    },
    async fetch() {
        this.testimonials = await this.$content('testimonials').fetch();
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/testimonials.scss';
</style>