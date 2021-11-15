<template>
    <section class="header-component bg-primary position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <slot />
                </div>
            </div>
        </div>
        <nuxt-img id="header-bg-shape-1" src="/images/illustrations/page-title.png" alt="illustrations" class="position-absolute w-100" />
        <nuxt-img id="header-bg-shape-2" src="/images/illustrations/leaf-pink-round.png" alt="illustrations" class="position-absolute" />
        <nuxt-img id="header-bg-shape-3" src="/images/illustrations/dots-cyan.png" alt="illustrations" class="position-absolute" />
        <nuxt-img id="header-bg-shape-4" src="/images/illustrations/leaf-orange.png" alt="illustrations" class="position-absolute" />
        <nuxt-img id="header-bg-shape-5" src="/images/illustrations/leaf-yellow.png" alt="illustrations" class="position-absolute" />
        <nuxt-img id="header-bg-shape-6" src="/images/illustrations/dots-group-cyan.png" alt="illustrations" class="position-absolute" />
        <nuxt-img id="header-bg-shape-7" src="/images/illustrations/leaf-cyan-lg.png" alt="illustrations" class="position-absolute" />
    </section>
</template>

<script>
export default {
    name: 'Header',
    props: {},
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '../assets/scss/components/header.scss';
</style>