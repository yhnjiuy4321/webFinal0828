<template>
  <div class="container">
    <div class="grid-container">
      <div v-for="(article, index) in articles" :key="index" class="Card" @click="goToArticle(index)">
        <p class="card-content">{{ article.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles : [
        { id: 1, title: 'The Importance of Time Management' },
        { id: 2, title: 'The Role of Emotional Intelligence in Leadership' },
        { id: 3, title: 'The Impact of Digital Transformation on Modern Businesses' },
        { id: 4, title: 'Sustainable Practices in Modern Agriculture' },
        { id: 5, title: 'The Benefits of Lifelong Learning' },
        { id: 6, title: 'The Evolution of E-commerce and Its Future Trends' },
        { id: 7, title: 'The Role of Innovation in Economic Development' },
        { id: 8, title: 'The Challenges of Remote Work and How to Overcome Them' },
        { id: 9, title: 'The Evolution of Educational Technology' },
        { id: 10, title: 'The Significance of Financial Literacy' },
        { id: 11, title: 'The Benefits of Networking for Career Growth' },
        { id: 12, title: 'The Role of Critical Thinking in Problem Solving' }
      ]
    }
  },
  methods: {
    goToArticle(index) {
      // 導航到對應的文章詳細頁面，將文章ID作為參數
      this.$router.push({ name: 'a_Article', params: { id: this.articles[index].id } });
    }
  }
}
</script>

<style>
.container {
  text-align: center;
  color: white;
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr); /* 每行4個卡片 */
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: #333;
  margin-top:100px;
  margin-bottom:10px;
}

.Card {
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px; /* 減少內邊距 */
  text-align: center;
  height: 100px; /* 增加高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  border-radius: 15px;
}

.card-content {
  font-weight: bold;
  margin: 0;
}
</style>
