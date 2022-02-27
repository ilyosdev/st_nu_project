<template>
  <section class="video">
    <div class="container">
      <div class="video-wrap">
        <div class="video-video">
          <img src="~/assets/images/tfng.webp" alt="Video IELTS" />
          <button class="play-btn" @click="videoToggle">
            <i class="bx bx-play" style="color: #b5142c"></i>
          </button>
        </div>
        <div class="video-desc">
          <h3 class="video-desc__title">
            A quick look at True, False, Not given
          </h3>
          <a
            href="https://ielts.idp.com/uzbekistan/about/news-and-articles/article-a-closer-look-at-true-false-not-given"
            class="btn-link btn-link_video"
          >
            <span>Learn more</span>
            <div class="circle circle-video">
              <i class="bx bx-chevron-left"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    videoToggle() {
      this.$store.commit('TOGGLE_VIDEO_MODAL')
    },
  },
}
</script>

<style lang="scss" scoped></style>
