<template>
  <div class="wrapper">
    <the-header />
    <nuxt />
    <the-footer />
    <the-video-modal :class="videoOpen" />
    <the-search-modal :class="searchOpen" />
    <the-mobile-menu :class="mobileMenu" />
  </div>
</template>
<script>
export default {
  computed: {
    searchOpen() {
      return this.$store.state.searchModal ? 'show' : ''
    },
    videoOpen() {
      return this.$store.state.videoModal ? 'show' : ''
    },
    mobileMenu() {
      return this.$store.state.mobileMenu ? 'show' : ''
    },
  },
}
</script>
