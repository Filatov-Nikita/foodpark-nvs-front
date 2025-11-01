import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/styles.scss';
import BaseButton from '@/components/Base/Button.vue';
import BaseBadge from '@/components/Base/Badge.vue';
import BaseModal from '@/components/Base/Modal.vue';
import BaseSpinner from '@/components/Base/Spinner.vue';
import BaseIcon from '@/components/Base/Icon.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Notifications from '@kyvg/vue3-notification';
import VScroll from '@/plugins/scroll';
import 'swiper/css';
import 'swiper/css/navigation';
import 'animate.css';
import 'virtual:svg-icons-register';

const app = createApp(App);

app.use(VScroll);
app.use(Notifications);

app.component('BaseIcon', BaseIcon);
app.component('BaseButton', BaseButton);
app.component('BaseBadge', BaseBadge);
app.component('BaseModal', BaseModal);
app.component('BaseSpinner', BaseSpinner);
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.mount('#app');
