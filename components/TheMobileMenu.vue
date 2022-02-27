<template>
  <div class="mobile-menu">
    <div class="mobile-menu__wrap">
      <ul class="mobile-menu__list">
        <li class="mobile-menu__item">
          <a href="#" class="mobile-menu__link">About </a>
          <ul class="sub-menu">
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">Which test do I take?</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">Who accepts IELTS</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">On test day</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">Special requirements</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">News and articles</a>
            </li>
          </ul>
          <i class="bx bx-chevron-right"></i>
        </li>
        <li class="mobile-menu__item">
          <a href="#" class="mobile-menu__link">Prepare </a>
          <ul class="sub-menu">
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">Speaking</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">IELTS Academic Writing</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">IELTS Academic Reading</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">Listening</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link"
                >IELTS General Training Writing</a
              >
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link"
                >IELTS General Training Reading</a
              >
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">IELTS Masterclass</a>
            </li>
          </ul>
          <i class="bx bx-chevron-right"></i>
        </li>
        <li class="mobile-menu__item">
          <a href="#" class="mobile-menu__link">Results</a>
          <ul class="sub-menu">
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">IELTS band scores</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">How IELTS is marked</a>
            </li>
            <li class="sub-menu__item">
              <a href="#" class="sub-menu__link">Request a remark</a>
            </li>
          </ul>
          <i class="bx bx-chevron-right"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.activeDrop('mobile-menu__list', 'mobile-menu__item')
  },
  methods: {
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
