<template>
  <div class="search-modal">
    <div class="search-modal-content" @click.stop>
      <button class="close-btn close-btn_search" @click="searchClose">
        <i class="bx bx-x"></i>
      </button>
      <div class="search-modal-inner">
        <form class="search-form">
          <label class="search-form__label">
            <input
              id="search"
              v-model="searchInput"
              type="text"
              name="search"
              class="search-form__input"
              placeholder="Search IELTS"
            />
            <i
              v-show="searchInput.length"
              class="bx bx-x clear"
              @click="clearInput"
            ></i>
            <button type="submit" class="search-form__btn">
              <i class="bx bx-search" style="color: #ffffff"></i>
            </button>
          </label>
        </form>
        <div class="search-modal-result">
          <div v-show="!searchInput.length" class="result-top">
            <ul class="result-top-menu">
              <li class="result-top-menu__item">
                <div class="result-top-menu__title">Which test do I take?</div>
                <ul class="result-top__sub-menu">
                  <li class="result-top__sub-menu-item">
                    <a href="#">Academic or General Training</a>
                  </li>
                  <li class="result-top__sub-menu-item">
                    <a href="#">Academic or General Training</a>
                  </li>
                  <li class="result-top__sub-menu-item">
                    <a href="#">IELTS on paper or computer</a>
                  </li>
                </ul>
                <i class="bx bx-chevron-left"></i>
              </li>
              <li class="result-top-menu__item">
                <div class="result-top-menu__title">Which test do I take?</div>
                <ul class="result-top__sub-menu">
                  <li class="result-top__sub-menu-item">
                    <a href="#">Academic or General Training</a>
                  </li>
                  <li class="result-top__sub-menu-item">
                    <a href="#">Academic or General Training</a>
                  </li>
                  <li class="result-top__sub-menu-item">
                    <a href="#">IELTS on paper or computer</a>
                  </li>
                </ul>
                <i class="bx bx-chevron-left"></i>
              </li>
              <li class="result-top-menu__item">
                <div class="result-top-menu__title">Which test do I take?</div>
                <ul class="result-top__sub-menu">
                  <li class="result-top__sub-menu-item">
                    <a href="#">Academic or General Training</a>
                  </li>
                  <li class="result-top__sub-menu-item">
                    <a href="#">Academic or General Training</a>
                  </li>
                  <li class="result-top__sub-menu-item">
                    <a href="#">IELTS on paper or computer</a>
                  </li>
                </ul>
                <i class="bx bx-chevron-left"></i>
              </li>
            </ul>
            <div class="result-social">
              <a href="#">
                <img src="~/assets/icons/social/facebook.svg" alt="facebook" />
              </a>
              <a href="#">
                <img
                  src="~/assets/icons/social/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="#">
                <img src="~/assets/icons/social/telegram.svg" alt="telegram" />
              </a>
            </div>
          </div>
          <div v-show="searchInput.length" class="result-inner">
            <ul>
              <li>
                <a href="#">academic reading test</a>
              </li>
              <li>
                <a href="#">academic reading question types</a>
              </li>
              <li>
                <a href="#">academicreading free sample questions</a>
              </li>
              <li>
                <a href="#">academic writing task 1</a>
              </li>
              <li>
                <a href="#">academic writing free practice questions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    }
  },
  mounted() {
    this.activeDrop('result-top-menu', 'result-top-menu__item')
  },
  methods: {
    searchClose() {
      this.$store.commit('TOGGLE_SEARCH_MODAL')
    },
    clearInput() {
      this.searchInput = ''
    },
    activeDrop(parentElement, childElement) {
      const parentWrap = document.querySelector(`.${parentElement}`)
      const childItem = parentWrap.querySelectorAll(`.${childElement}`)

      childItem.forEach(function (dropItem) {
        dropItem.addEventListener('click', function () {
          const panel = this.children[1]
          if (this.classList.contains('active') && panel.style.maxHeight) {
            panel.style.maxHeight = null
            this.classList.remove('active')
          } else {
            for (const active of childItem) {
              active.children[1].style.maxHeight = null
              active.classList.remove('active')
            }
            this.classList.add('active')
            panel.style.maxHeight = panel.scrollHeight + 'px'
          }
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
