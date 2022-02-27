<template>
  <section class="feature">
    <div class="container">
      <div class="feature-wrap">
        <h2 class="title">Featured news and articles</h2>
        <div class="line"></div>
        <client-only>
          <!-- Slider main container -->
          <swiper class="swiper" :options="swiperOptions">
            <!-- Slides -->
            <swiper-slide
              v-for="newsSlide of news"
              :key="newsSlide.id"
              class="swiper-slide"
            >
              <nuxt-link
                :to="{ name: 'news-id', params: { id: newsSlide.id } }"
                class="section-card"
              >
                <div class="section-card__img">
                  <!-- <p>{{ newsSlide }}</p> -->
                  <img
                    :src="url + newsSlide.attributes.image.data.attributes.url"
                    alt="Study"
                  />
                  <span class="section-card__mask"></span>
                </div>
                <div class="section-card__desc">
                  <h3 class="section-card__title">
                    {{ newsSlide.attributes.title }}
                  </h3>
                  <div class="btn-link">
                    <span>Read more</span>
                    <div class="circle circle-slider">
                      <i class="bx bx-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </swiper-slide>
            <!-- <swiper-slide class="swiper-slide">
              <a href="#" class="section-card">
                <div class="section-card__img">
                  <img
                    src="https://ged.com/wp-content/uploads/Top-Study-Tips.jpg"
                    alt="Study"
                  />
                  <span class="section-card__mask"></span>
                </div>
                <div class="section-card__desc">
                  <h3 class="section-card__title">
                    Should I take IELTS on computer or paper?
                  </h3>
                  <div class="btn-link">
                    <span>Read more</span>
                    <div class="circle circle-slider">
                      <i class="bx bx-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </a>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <a href="#" class="section-card">
                <div class="section-card__img">
                  <img
                    src="https://ged.com/wp-content/uploads/Top-Study-Tips.jpg"
                    alt="Study"
                  />
                  <span class="section-card__mask"></span>
                </div>
                <div class="section-card__desc">
                  <h3 class="section-card__title">
                    Should I take IELTS on computer or paper?
                  </h3>
                  <div class="btn-link">
                    <span>Read more</span>
                    <div class="circle circle-slider">
                      <i class="bx bx-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </a>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <a href="#" class="section-card">
                <div class="section-card__img">
                  <img
                    src="https://ged.com/wp-content/uploads/Top-Study-Tips.jpg"
                    alt="Study"
                  />
                  <span class="section-card__mask"></span>
                </div>
                <div class="section-card__desc">
                  <h3 class="section-card__title">
                    Should I take IELTS on computer or paper?
                  </h3>
                  <div class="btn-link">
                    <span>Read more</span>
                    <div class="circle circle-slider">
                      <i class="bx bx-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </a>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <a href="#" class="section-card">
                <div class="section-card__img">
                  <img
                    src="https://ged.com/wp-content/uploads/Top-Study-Tips.jpg"
                    alt="Study"
                  />
                  <span class="section-card__mask"></span>
                </div>
                <div class="section-card__desc">
                  <h3 class="section-card__title">
                    Should I take IELTS on computer or paper?
                  </h3>
                  <div class="btn-link">
                    <span>Read more</span>
                    <div class="circle circle-slider">
                      <i class="bx bx-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </a>
            </swiper-slide> -->
          </swiper>
        </client-only>
        <!-- If we need pagination -->
        <div class="swiper-pagination news"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev">
          <div class="circle circle-slider">
            <i class="bx bx-chevron-right"></i>
          </div>
        </div>
        <div class="swiper-button-next">
          <div class="circle circle-slider">
            <i class="bx bx-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.feature .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      },
      url: process.env.baseUrl,
      image: this.news[0].attributes.image,
      title: this.news[0].attributes.title,
      description: this.news[0].attributes.description,
      newsContent: this.news[0].attributes.newsContent,
    }
  },
}
</script>

<style lang="scss" scoped></style>
