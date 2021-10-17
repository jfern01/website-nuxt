import Vue from 'vue';
import VueMasonry from 'vue-masonry-css';

Vue.use(VueMasonry);

Vue.directive('scroll', {
    inserted: (el, binding) => {
        const f = function (evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        };
        
        window.addEventListener('scroll', f);
    }
});