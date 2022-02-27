<template>
  <div class="video-modal">
    <div class="video-modal-content" @click.stop>
      <button class="close-btn close-btn_video" @click="videoToggle">
        <i class="bx bx-x" style="color: #ffffff"></i>
      </button>
      <div v-if="videoShow" class="video-modal-video">
        <video width="650" controls="">
          <source
            type="video/mp4"
            src="~/assets/video/True__False__Not_Given__Which_one_is_it_.mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    videoShow() {
      return this.$store.state.videoModal
    },
  },
  methods: {
    videoToggle() {
      this.$store.commit('TOGGLE_VIDEO_MODAL')
    },
  },
}
</script>

<style lang="scss" scoped></style>
