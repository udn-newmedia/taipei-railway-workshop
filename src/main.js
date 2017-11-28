// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lazysizes'
import 'aframe'
import './mouse-cursor'
import './looks'

import Utils from 'udn-newmedia-utils'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

$(document).ready(function(){
  fbq('track', 'ViewContent');
  ga("send", {
    "hitType": "event",
    "eventCategory": "超連結點擊",
    "eventAction": "click",
    "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + $(this).attr('href') + "] [" + $(this).parent().attr('class') + "]"
  });
})
