<template>
    <section class="portfolio-component section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="section-title display-4">Portfolio</h2>
                </div>
            </div>
            <masonry :cols="colSettings" :gutter="30">
                <div class="mb-4">
                    <div class="position-relative rounded hover-wrapper">
                        <nuxt-img src="/images/portfolio/kygunco.png" width="400" alt="portfolio-image" class="img-fluid rounded w-100" />
                        <div class="hover-overlay">
                            <div class="hover-content">
                                <a class="btn btn-light btn-sm" href="https://www.kygunco.com/" target="_blank" rel="noreferrer">view project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="position-relative rounded hover-wrapper">
                        <nuxt-img src="/images/portfolio/danos.png" width="400" alt="portfolio-image" class="img-fluid rounded w-100" />
                        <div class="hover-overlay">
                            <div class="hover-content">
                                <a class="btn btn-light btn-sm" href="https://danosseasoning.com/" target="_blank" rel="noreferrer">view project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="position-relative rounded hover-wrapper">
                        <nuxt-img src="/images/portfolio/opticsowl.png" width="400" alt="portfolio-image" class="img-fluid rounded w-100" />
                        <div class="hover-overlay">
                            <div class="hover-content">
                                <a class="btn btn-light btn-sm" href="https://opticsowl.com" target="_blank" rel="noreferrer">view project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="position-relative rounded hover-wrapper">
                        <nuxt-img src="/images/portfolio/goodwill.png" width="400" alt="portfolio-image" class="img-fluid rounded w-100" />
                        <div class="hover-overlay">
                            <div class="hover-content">
                                <a class="btn btn-light btn-sm" href="https://www.goodwillky.org/find-a-goodwill-ky-store/" target="_blank" rel="noreferrer">view project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="position-relative rounded hover-wrapper">
                        <nuxt-img src="/images/portfolio/greenremedy.png" width="400" alt="portfolio-image" class="img-fluid rounded w-100" />
                        <div class="hover-overlay">
                            <div class="hover-content">
                                <a class="btn btn-light btn-sm" href="https://greenremedy.com/" target="_blank" rel="noreferrer">view project</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="position-relative rounded hover-wrapper">
                        <nuxt-img src="/images/portfolio/kysbesthemp.png" width="400" alt="portfolio-image" class="img-fluid rounded w-100" />
                        <div class="hover-overlay">
                            <div class="hover-content">
                                <a class="btn btn-light btn-sm" href="https://kysbesthemp.com/" target="_blank" rel="noreferrer">view project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </masonry>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Portfolio',
    data () {
        return {
            colSettings: {
                default: 3,
                768: 2,
                480: 1,
            }
        };
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/portfolio.scss';
</style>