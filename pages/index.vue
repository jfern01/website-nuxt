<template>
    <div>
        <Hero />

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-center">
                        <p class="font-secondary paragraph-lg text-dark">Jose <span class="text-primary">♥</span> Open Source</p>
                        <p class="font-secondary paragraph-lg text-dark">A graduate of ITT Tech, Jose Fernandez has been with Crosby Interactive since 2013. He enjoys challenging projects that provide opportunities for problem solving and learning new skills. Jose specializes in providing software solutions which may include Dev Ops, Linux systems administration and data analysis. His favorite programming languages are Python, TypeScript, PHP and Go. Jose prefers the freedom and innovation of open source technologies and is always looking for new ways to leverage and contribute to the free and open source software community.</p>
                        <a href="https://www.linkedin.com/in/jose-fernandez-89179540/" target="_blank" class="btn btn-transparent">know more</a>
                    </div>
                </div>
            </div>
        </section>

        <Skills />

        <Experience />

        <Education />

        <!-- <Services /> -->

        <Portfolio />

        <Testimonials />

        <Brands />

        <LatestPosts />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Home',
        }
    },
    data() {
        return {}
    }
};
</script>