<template>
  <section class="tests">
    <div class="container">
      <h2 class="title">IELTS tests</h2>
      <div class="line"></div>
      <div class="section-card-wrap">
        <client-only>
          <swiper class="swiper swiper_tests" :options="swiperOptions">
            <swiper-slide class="swiper-slide">
              <a
                href="https://ielts.idp.com/uzbekistan/about/which-test-do-i-take/academic"
                class="section-card"
              >
                <div class="section-card__img">
                  <img src="~/assets/images/image_02.webp" alt="Study" />
                  <span class="section-card__mask"></span>
                </div>
                <div class="section-card__desc">
                  <h3 class="section-card__title">
                    Should I take IELTS on computer or paper?
                  </h3>
                  <p>
                    Find out if you need to take IELTS Academic test. Take a
                    closer look at the test format, how it is marked and what to
                    expect on test day.
                  </p>
                  <div class="btn-link btn-link_card">
                    <span>Learn more</span>
                  </div>
                </div>
              </a>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <a
                href="https://ielts.idp.com/uzbekistan/about/which-test-do-i-take/general-training"
                class="section-card"
              >
                <div class="section-card__img">
                  <img src="~/assets/images/image_01.webp" alt="Study" />
                  <span class="section-card__mask"></span>
                </div>
                <div class="section-card__desc">
                  <h3 class="section-card__title">
                    Should I take IELTS on computer or paper?
                  </h3>
                  <p>
                    Find out if you need to take IELTS Academic test. Take a
                    closer look at the test format, how it is marked and what to
                    expect on test day.
                  </p>
                  <div class="btn-link btn-link_card">
                    <span>Learn more</span>
                  </div>
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </client-only>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.tests .swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
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
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
