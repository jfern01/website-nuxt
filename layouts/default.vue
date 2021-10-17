<template>
    <div class="layout">
        <header v-scroll="handleScroll" class="navigation fixed-top" :class="{ 'nav-bg': stickyHeader }">
            <nav class="navbar navbar-dark navbar-expand-lg">
                <nuxt-link class="navbar-brand font-tertiary h3" to="/">
                    <img src="~/assets/images/logo/default.svg" width="65px" alt="logo" />
                </nuxt-link>

                <BNavbarToggle target="navigation" />

                <BCollapse id="navigation" class="text-center" is-nav>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <nuxt-link class="nav-link p-3 font-tertiary text-white text-uppercase" to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link p-3 font-tertiary text-white text-uppercase" to="/blog/">Blog</nuxt-link>
                        </li>
                    </ul>
                </BCollapse>
            </nav>
        </header>

        <transition name="fade" appear>
            <main>
                <Nuxt />
            </main>
        </transition>

        <ContactForm />

        <footer class="footer-section bg-dark">
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5 class="text-muted">Email</h5>
                            <p class="text-white paragraph-lg font-secondary">self@josefernandez.me</p>
                        </div>
                        <div class="col-md-4">
                            <h5 class="text-muted">Phone</h5>
                            <p class="text-white paragraph-lg font-secondary">(502) 219-6375‬</p>
                        </div>
                        <div class="col-md-4">
                            <h5 class="text-muted">Address</h5>
                            <p class="text-white paragraph-lg font-secondary">Bardstown, KY</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright text-center py-5">
                <p class="mb-0 text-muted">Copyright &copy; {{ currentYear }} Jose Fernandez</p>
            </div>
        </footer>
    </div>
</template>

<static-query>
    query {
        metadata {
            siteName
            email
            phone
            address
        }
    }
</static-query>

<script>
import { BNavbarToggle, BCollapse } from 'bootstrap-vue';

export default {
    components: {
        BNavbarToggle,
        BCollapse,
    },
    data () {
        return {
            stickyHeader: false,
            currentYear: (new Date()).getFullYear(),
        };
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
        handleScroll() {
            this.stickyHeader = window.scrollY > 100;
        }
    }
};
</script>

<style scoped lang="scss">
.fade-enter-active {
    transition: opacity .5s;
}

.fade-enter {
    opacity: 0;
}

footer {
    padding-top: 200px;

    .copyright {
        border-top: 1px solid #343a40;
    }
}
</style>
