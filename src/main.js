import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/styles.scss';
import BaseButton from '@/components/Base/Button.vue';
import BaseBadge from '@/components/Base/Badge.vue';
import BaseModal from '@/components/Base/Modal.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('BaseBadge', BaseBadge);
app.component('BaseModal', BaseModal);
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.mount('#app');
