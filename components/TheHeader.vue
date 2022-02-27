<template>
  <header class="header">
    <nav class="nav sticky">
      <div class="nav-left">
        <div class="mobile-bar">
          <button
            class="mobile-bar__button"
            :class="mobileBar"
            @click="mobileOpen"
          >
            <span class="mobile-bar__item"></span>
            <span class="mobile-bar__item"></span>
            <span class="mobile-bar__item"></span>
          </button>
        </div>
        <nuxt-link to="/" class="nav-logo">
          <img src="~/assets/images/IELTS.svg" alt="IELTS logo" />
        </nuxt-link>
        <ul class="nav-list">
          <li class="nav-list__item">
            <a
              href="https://ielts.idp.com/uzbekistan/about"
              class="nav-list__link"
              >About
              <i class="bx bx-chevron-left"></i>
            </a>
            <div class="nav-sub-menu">
              <div class="nav-sub-menu__wrap">
                <ul>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/about/which-test-do-i-take"
                      >Which test do I take?</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/about/who-accepts-ielts/organisations-that-accept-ielts"
                      >Who accepts IELTS</a
                    >
                  </li>
                  <li>
                    <a href="https://ielts.idp.com/uzbekistan/about/test-day"
                      >On test day</a
                    >
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/about/special-requirements"
                      >Special requirements</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/about/news-and-articles"
                      >News and articles</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-list__item">
            <a
              href="https://ielts.idp.com/uzbekistan/prepare"
              class="nav-list__link"
              >Prepare
              <i class="bx bx-chevron-left"></i>
            </a>
            <div class="nav-sub-menu">
              <div class="nav-sub-menu__wrap">
                <ul>
                  <li>
                    <a href="https://ielts.idp.com/uzbekistan/prepare/speaking"
                      >Speaking</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/prepare/academic-writing"
                      >IELTS Academic Writing</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/prepare/academic-reading"
                      >IELTS Academic Reading</a
                    >
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://ielts.idp.com/uzbekistan/prepare/listening"
                      >Listening</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/prepare/general-training-writing"
                      >IELTS General Training Writing</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/prepare/general-training-reading"
                      >IELTS General Training Reading</a
                    >
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/prepare/masterclass"
                      >IELTS Masterclass</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-list__item">
            <a
              href="https://ielts.idp.com/uzbekistan/results"
              class="nav-list__link"
              >Results
              <i class="bx bx-chevron-left"></i>
            </a>
            <div class="nav-sub-menu">
              <div class="nav-sub-menu__wrap">
                <ul>
                  <li>
                    <a href="https://ielts.idp.com/uzbekistan/results/scores"
                      >IELTS band scores</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/results/how-ielts-is-marked"
                      >How IELTS is marked</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://ielts.idp.com/uzbekistan/results/request-remark"
                      >Request a remark</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <button
          class="nav-right__search search-button"
          @click="openSearchModal"
        >
          <img
            v-show="!searchOpen"
            src="~/assets/icons/search_gry.svg"
            alt="Search icon"
          />
          <img
            v-show="searchOpen"
            src="~/assets/icons/cls.svg"
            alt="Search close icon"
          />
        </button>
        <a
          href="https://my.ieltsessentials.com/IELTS?countryId=224"
          class="book-now"
        >
          <span>Book now</span>
          <the-circle />
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    searchOpen() {
      return this.$store.state.searchModal
    },
    mobileBar() {
      return this.$store.state.mobileMenu ? 'active' : ''
    },
  },
  methods: {
    openSearchModal() {
      this.$store.commit('TOGGLE_SEARCH_MODAL')
    },
    mobileOpen() {
      if (this.$store.state.searchModal || this.$store.state.videoModal) {
        this.$store.commit('SWITCH_STATE')
      }
      this.$store.commit('TOGGLE_MOBILE')
    },
  },
}
</script>
