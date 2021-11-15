<template>
    <section class="experience-component section">
        <div class="container">
            <div class="row justify-content-around mb-3">
                <div class="col-lg-12 text-center">
                    <h2 class="section-title display-4">Experience</h2>
                </div>
                <div class="col-lg-6 col-md-6 text-center">
                    <nuxt-img class="m-3 rounded bg-white" src="/images/experience/kygunco.svg" alt="icon" width="100" />
                    <p class="mb-0">Aug 2020 - Present</p>
                    <h4>Software Engineer</h4>
                    <h6 class="text-muted">KYGUNCO</h6>
                </div>
            </div>
            <div class="row justify-content-around">
                <div class="col-lg-3 col-md-4 text-center mt-3">
                    <nuxt-img class="m-3 rounded-circle" src="/images/experience/crosby-interactive.jpeg" alt="icon" width="100" />
                    <p class="mb-0">Apr 2013 - July 2020</p>
                    <h4>Chief Engineer</h4>
                    <h6 class="text-muted">Crosby Interactive</h6>
                </div>
                <div class="col-lg-3 col-md-4 text-center mt-3">
                    <nuxt-img class="m-3 rounded-circle" src="/images/experience/kinetic.png" alt="icon" width="100" />
                    <p class="mb-0">Mar 2012 - Apr 2013</p>
                    <h4>Document Specialist</h4>
                    <h6 class="text-muted">Kinetic theTechnologyAgency</h6>
                </div>
                <div class="col-lg-3 col-md-4 text-center mt-3">
                    <nuxt-img class="m-3 rounded-circle" src="/images/experience/flex.jpeg" alt="icon" width="100" />
                    <p class="mb-0">May 2011 - Sep 2011</p>
                    <h4>Repair Technician</h4>
                    <h6 class="text-muted">Flextronics</h6>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Experience',
    data () {
        return {};
    },
    methods: {}
};
</script>