// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lazysizes'
import AFRAME from 'aframe'

AFRAME.registerComponent('log', {
  schema: {
    event: {type: 'string', default: ''},
    message: {type: 'string', default: 'Hello, World'}
  },
  init: function(){
    console.log(this.data.message)
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
