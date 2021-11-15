<template>
    <section class="hero-component bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-lg-11 mx-auto">
                    <h1 class="text-white font-tertiary display-3">Hi! I’m <br> Jose Fernandez<br> Software Engineer</h1>
                </div>
            </div>
        </div>
        <kinesis-container class="position-absolute w-100 h-100" style="top: 0;">
            <div class="layer-bg w-100">
                <img class="img-fluid w-100" src="/images/illustrations/leaf-bg.png" alt="bg-shape" />
            </div>
            <div id="l2" class="layer">
                <kinesis-element :strength="20">
                    <img src="/images/illustrations/dots-cyan.png" alt="bg-shape" />
                </kinesis-element>
            </div>
            <div id="l3" class="layer">
                <kinesis-element :strength="20">
                    <img src="/images/illustrations/leaf-orange.png" alt="bg-shape" />
                </kinesis-element>
            </div>
            <div id="l4" class="layer">
                <kinesis-element :strength="20">
                    <img src="/images/illustrations/dots-orange.png" alt="bg-shape" />
                </kinesis-element>
            </div>
            <div id="l5" class="layer">
                <kinesis-element :strength="20">
                    <img src="/images/illustrations/leaf-yellow.png" alt="bg-shape" />
                </kinesis-element>
            </div>
            <div id="l6" class="layer">
                <kinesis-element :strength="20">
                    <img src="/images/illustrations/leaf-cyan.png" alt="bg-shape" />
                </kinesis-element>
            </div>
            <div id="l7" class="layer">
                <kinesis-element :strength="20">
                    <img src="/images/illustrations/dots-group-orange.png" alt="bg-shape" />
                </kinesis-element>
            </div>
            <div id="l8" class="layer">
                <kinesis-element :strength="20">
                    <img src="/images/illustrations/leaf-pink-round.png" alt="bg-shape" />
                </kinesis-element>
            </div>
            <div id="l9" class="layer">
                <kinesis-element :strength="20">
                    <img src="/images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
                </kinesis-element>
            </div>
        </kinesis-container>
        <ul class="list-unstyled ml-5 mt-3 position-relative zindex-1">
            <li class="mb-3">
                <a class="text-white" href="https://github.com/jfern01" target="_blank" rel="noreferrer">
                    <ThemifyIcon icon="github" />
                </a>
            </li>
            <li class="mb-3">
                <a class="text-white" href="https://www.linkedin.com/in/jose-fernandez-89179540/" target="_blank" rel="noreferrer">
                    <ThemifyIcon icon="linkedin" />
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
import ThemifyIcon from 'vue-themify-icons';
import { KinesisContainer, KinesisElement} from 'vue-kinesis';

export default {
    name: 'Hero',
    components: {
        ThemifyIcon,
        'kinesis-container': KinesisContainer,
        'kinesis-element': KinesisElement,
    },
    data () {
        return {};
    },
    methods: {}
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/components/hero.scss';
</style>