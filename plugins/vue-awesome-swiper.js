import Vue from 'vue'
import {
  Swiper as SwiperClass,
  EffectFade,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from 'swiper'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
// import 'swiper/css/effect-fade'
SwiperClass.use([EffectFade, Pagination, Mousewheel, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
