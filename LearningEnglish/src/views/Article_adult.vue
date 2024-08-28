<template>
  <div class="container">
    <h1>{{ article.title }}</h1>
    <img :src="article.img" alt="article.title">
    <p>{{ article.content }}</p>
  </div>
</template>

<script>
// 引入文章數據模塊
import { getArticleById } from '../data/article2';





export default {
  props: ['id'],
  data() {
    return {
      article: {}
    }
  },
  created() {
    // 使用數據模塊中的函數來獲取文章標題
    this.article = getArticleById(this.id);
  }
}
</script>

<style scoped>

h1 {
  font-size: 32px;
  color: rgb(13, 99, 205);
  text-align: center;
  margin-bottom: 40px;
}

.container {
  padding: 20px;
  max-width: 800px;
  margin-top: 100px;
  color: #000000;
  font-size: 22px;
  text-align: start;

}

.container>img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}


</style>
