/** app.js
  *
  * Entry for bundling by webpack.
  * for example, if you have your own script, or plguin,
  * you can import that.
  * ex) import "./bower_components/animate.css/animate.min.css"
  *
  * you are able to include js, css
  * if you want to contain other scripts like .ts, .less, .sass,
  * set the loaders in tidory.config.js
  *
  * after import assets it will be contained in app.js
  */

import Vue from 'vue'
import InfiniteScrollPlugin from 'vue-infinite-scroll'

import ScrollSpy from './components/ScrollSpy.vue'
import InfiniteScroll from './components/InfiniteScroll.vue'
import ToTop from './components/ToTop.vue'
import ThemeBtn from './components/ThemeBtn.vue'

Vue.use(InfiniteScrollPlugin)

Vue.component('scrollspy', ScrollSpy)
Vue.component('infinite-scroll', InfiniteScroll)
Vue.component('to-top', ToTop)
Vue.component('theme-btn', ThemeBtn)

window.Vue = new Vue({ el: '#main__b' })

window.h = require('./js/h')
