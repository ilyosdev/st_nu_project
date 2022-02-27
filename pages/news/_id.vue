<template>
  <main class="main-content pages">
    <section class="banner-pages">
      <div class="container">
        <div class="banner-pages__wrap">
          <div class="banner-pages__top">
            <div class="banner-pages__image">
              <img :src="url + News.image.data.attributes.url" alt="IELTS" />
            </div>
            <div class="banner-pages__desc">
              <h3 class="banner-pages__title">{{ News.title }}</h3>
              <p class="banner-pages__text">News.description</p>
            </div>
          </div>
          <div
            v-html="markdown(News.newsContent)"
            class="banner-pages__bottom"
          ></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { marked } from 'marked'
export default {
  async asyncData({ params, $axios }) {
    const News = await $axios
      .$get(
        `${process.env.baseUrl}/api/news-articles/${params.id}?populate=image`
      )
      .then((response) => {
        return response.data.attributes
      })
      .catch((error) => {
        return error
      })
    return { News }
  },
  data() {
    return {
      url: process.env.baseUrl,
    }
  },
  methods: {
    markdown(val) {
      return marked(val)
    },
  },
}
</script>

<style>
.banner-pages__bottom ul {
  list-style: disc;
  padding-left: 20px;
}
.banner-pages__bottom ul li {
  margin-bottom: 10px;
}
</style>
