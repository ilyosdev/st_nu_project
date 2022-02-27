var swiper = new Swiper(".feature .swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".feature .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var test = new Swiper(".tests .swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".tests .swiper-pagination",
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
});
const bodyOverlay = document.querySelector("body");
const searchButton = document.querySelector(".search-button");
const searchClose = document.querySelector(".close-btn_search");
const searchBlock = document.querySelector(".search-modal");

const videoModal = document.querySelector(".video-modal");
const videoModalOpenButton = document.querySelector(".play-btn");
const videoModalCloseButton = document.querySelector(".close-btn_video");
const videoPlayer = document.querySelector("video");

const mobileButton = document.querySelector(".mobile-bar__button");
const mobileBlock = document.querySelector(".mobile-menu");
function showMobileMenu() {
  if (mobileBlock.classList.contains("show")) {
    mobileBlock.classList.remove("show");
    mobileButton.classList.remove("active");
  } else {
    mobileBlock.classList.add("show");
    mobileButton.classList.add("active");
  }
}

function showVideoPopup() {
  console.dir(videoPlayer);
  if (videoModal.classList.contains("show")) {
    videoModal.classList.remove("show");
    bodyOverlay.classList.remove("overlay");
    videoPlayer.pause();
  } else {
    videoModal.classList.add("show");
    bodyOverlay.classList.add("overlay");
    videoPlayer.play();
  }
}
function closeVideoPopup(event) {
  if (
    videoModal.classList.contains("show") &&
    (event.target === videoModal ||
      event.target === videoModalCloseButton.querySelector("box-icon"))
  ) {
    videoPlayer.pause();
    videoModal.classList.remove("show");
    bodyOverlay.classList.remove("overlay");
  }
}

function activeDrop(parentElement, childElement) {
  const parentWrap = document.querySelector(`.${parentElement}`);
  const childItem = parentWrap.querySelectorAll(`.${childElement}`);

  childItem.forEach(function (dropItem) {
    dropItem.addEventListener("click", function () {
      const panel = this.children[1];
      if (this.classList.contains("active") && panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.remove("active");
      } else {
        for (let active of childItem) {
          active.children[1].style.maxHeight = null;
          active.classList.remove("active");
        }
        this.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

function handleScroll() {
  const header = document.querySelector(".header");
  let lastScroll = 35;
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    // down
    header.classList.add("sticky");
  } else if (currentScroll < lastScroll) {
    // up
    header.classList.remove("sticky");
  }
}

function showSearchPopup() {
  if (searchBlock.classList.contains("show")) {
    searchBlock.classList.remove("show");
    bodyOverlay.classList.remove("overlay");
  } else {
    searchBlock.classList.add("show");
    bodyOverlay.classList.add("overlay");
  }
}
function closeSearchPopup(event) {
  if (
    searchBlock.classList.contains("show") &&
    (event.target === searchBlock ||
      event.target === searchClose.querySelector("box-icon"))
  ) {
    searchBlock.classList.remove("show");
    bodyOverlay.classList.remove("overlay");
  }
}

activeDrop("footer-top", "accordion");
activeDrop("mobile-menu__list", "mobile-menu__item");
activeDrop("result-top-menu", "result-top-menu__item");

videoModalOpenButton.addEventListener("click", showVideoPopup);
searchButton.addEventListener("click", showSearchPopup);
mobileButton.addEventListener("click", showMobileMenu);
window.addEventListener("scroll", handleScroll);
window.addEventListener("click", closeSearchPopup);
window.addEventListener("click", closeVideoPopup);
