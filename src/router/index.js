import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomeView'
import Movie from '@/views/MovieView'
import Book from '@/views/BookView'
import Radio from '@/views/RadioView'
import Page from '@/views/PageView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    },
    {
      path:'/page/:id',
      name: 'page',
      component: Page
    },
    {
      path: '*',
      redirect: {name:'home'}
    }
  ]
})
