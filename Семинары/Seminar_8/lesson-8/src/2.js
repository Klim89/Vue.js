import NotFound from './components/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '*', component: NotFound } // Маршрут для обработки ошибки 404
];


<template>
  <div>
    <h1>Ошибка 404: Страница не найдена</h1>
  </div>
</template>