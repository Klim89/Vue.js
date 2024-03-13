<!-- Создайте компонент "Список пользователей" (UserList), который
будет отображать список пользователей из переданного массива.
Каждый пользователь должен быть представлен в виде отдельного
компонента "Пользователь" (User), принимающего пропсы с данными
о пользователе (например, имя, фамилия и электронная почта). -->

<template>
<ul>
  <UserComponent :user="user" v-for="user in users" :key="user.id"/>
</ul>
</template>

<script>
import UserComponent from './UserComponent.vue'
export default {
  name: 'UserList',
  components: {
    UserComponent
  },
  props: {
  },
  data() {
    return {
      users: [
        {name: 'Boris', lastName: 'Ivanov', email: 'asd@qwe.ru'},
        {name: 'Sergey', lastName: 'Smirnov', email: 'asd@qwe.ru'},
        {name: 'Andrey', lastName: 'Sobolev', email: 'asd@qwe.ru'},
        {name: 'Viktor', lastName: 'Trio', email: 'asd@qwe.ru'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
