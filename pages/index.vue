<template>
  <main class="main-content">
    <section class="banner">
      <div class="container-fluid">
        <div class="banner-wrap">
          <div class="banner-left">
            <h1>
              Achieve your work, study and migration goals with IELTS by IDP
            </h1>
            <p>
              IELTS is accepted by more government agencies, educational
              institutions, and professional bodies than any other
              English-language test.
            </p>
          </div>
          <div class="banner-right">
            <img src="~/assets/images/banner-third.jpg" alt="Banner image" />
          </div>
        </div>
      </div>
    </section>
    <section class="cards">
      <div class="container">
        <div class="cards-wrap">
          <a href="https://ielts.idp.com/uzbekistan/test-dates" class="card">
            <div class="card-icon">
              <img src="~/assets/images/calendar.svg" alt="Book IELTS" />
            </div>
            <h2 class="card-title">Book IELTS</h2>
            <p class="card-desc">
              Find your closest IELTS test centre and book your test
            </p>
          </a>
          <a href="https://ielts.idp.com/uzbekistan/prepare" class="card">
            <div class="card-icon">
              <img src="~/assets/images/book.svg" alt="Prepare for IELTS" />
            </div>
            <h2 class="card-title">Prepare for IELTS</h2>
            <p class="card-desc">
              Prepare for IELTS with these helpful resources
            </p>
          </a>
          <a
            href="https://ielts.idp.com/results/check-your-result"
            class="card"
          >
            <div class="card-icon">
              <img src="~/assets/images/mail.svg" alt="Check IELTS results" />
            </div>
            <h2 class="card-title">Check IELTS results</h2>
            <p class="card-desc">
              If you have taken IELTS, check your IELTS results
            </p>
          </a>
        </div>
      </div>
    </section>
    <the-news-and-articles :news="News" />
    <the-video />
    <the-tests />
  </main>
</template>

<script>
import TheNewsAndArticles from '~/components/TheNewsAndArticles.vue'
import TheTests from '~/components/TheTests.vue'
import TheVideo from '~/components/TheVideo.vue'
export default {
  components: { TheNewsAndArticles, TheVideo, TheTests },
  async asyncData({ $axios }) {
    const News = await $axios
      .$get(process.env.baseUrl + '/api/news-articles?populate=image')
      .then((res) => res.data)

    return { News }
  },
}
</script>
