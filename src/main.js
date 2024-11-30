import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/styles.scss';
import BaseButton from '@/components/Base/Button.vue';
import BaseBadge from '@/components/Base/Badge.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('BaseBadge', BaseBadge);
app.component('BaseButton', BaseButton);
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.mount('#app');
