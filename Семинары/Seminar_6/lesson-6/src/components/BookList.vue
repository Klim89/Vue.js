<!-- Разработка приложения для отображения информации о книгах
Требуется создать компонент "Книга" (Book), который будет
отображать информацию о книге, такую как название, автор и год
издания. Компонент "Книга" должен иметь возможность отображать
дополнительные детали о книге по требованию пользователя. Также
необходимо создать компонент "Список книг" (BookList), который
будет отображать список книг из переданного массива -->

<template>
  <ul>
    <BookComponent :book="book" v-for="book in books" :key="book.id"/>
  </ul>
</template>

<script>
import BookComponent from './BookComponent.vue'

export default {
  name: 'BookList',
  components: {
    BookComponent
  },
  props: {},
  data() {
    return {
      books: [
        {id: 1, title: 'Книга 1', author: 'Автор 1', year: 2020, details: 'gdfgdfgdfgdfg'},
        {id: 2, title: 'Книга 2', author: 'Автор 2', year: 2019, details: 'hgfhfhhgfh'},
        {id: 3, title: 'Книга 3', author: 'Автор 3', year: 2021, details: ''}
      ]
    };
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
