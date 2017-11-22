<template>
	<div id="app">
		<Cover :src="bg_m" :style="{opacity: opacity, display: display}">
      <h1>台北機廠大標</h1>
      <div class="btn btn-primary" @click="test">進入空間</div>
		</Cover>
    <Intro :style="{opacity: opacity1}" text="上班時間的市民大道車水馬龍，喇叭聲與人聲不絕於耳，一片喧鬧中，有個地方顯得寂靜低調，紅紅的四個大字「台北機廠」逐漸被樹叢淹沒，不留心就會錯過。" />
    <a-scene>
      <a-assets>
        <img id="360-1" src="./assets/360-1.jpg"/>
        <img id="button-1" src="./assets/button_1.png">
        <audio id="click-sound" crossorigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
      </a-assets>
      <a-sky id="image-360" src="#360-1" radius="10"></a-sky>
      <a-entity class="link"
  geometry="primitive: plane; height: 1; width: 1"
  material="shader: flat; src: #button-1"
  sound="on: click; src: #click-sound" position="1 2 -4"></a-entity>
      <a-entity log="event: anEvent; message: Hello, 123"></a-entity>
      <a-entity rotation="0 80 0">
        <a-camera look-controls>
            <a-cursor id="cursor" fuse="false" geometry="primitive: ring; radiusInner: 0.04; radiusOuter: 0.05">
              <a-animation begin="click" easing="ease-in" attribute="scale"
                           fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>
              <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
                           from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
            </a-cursor>
          </a-camera>
      </a-entity>
    </a-scene>
  </div>
</template>

<script>
import Cover from '@/components/Cover'
import Intro from '@/components/Intro'

import bg_m from '@/assets/bg_m.jpg'

export default {
  name: 'app',
  data: function(){
    return {
      opacity: 1,
      opacity1: 0,
      display: 'block',
      bg_m: bg_m
    }
  },
  mounted: function(){
    $('canvas').on('touchstart', function(){
      console.log(123)
      $('.intro').css('opacity', 0)
    })
    var el = document.querySelector('.link')
    el.addEventListener('click', function(){
      console.log(123)
    })
    el.addEventListener('mouseenter', function(){
      this.setAttribute('scale', '1.5 1.5 1.5')
    })
    el.addEventListener('mouseleave', function(){
      this.setAttribute('scale', '1 1 1')
    })
  },
  methods: {
    test: function(){
      this.opacity = 0
      this.opacity1 = 1
      // setTimeout(() => {
        this.display = 'none'
      // }, 700)
    }
  },
  components: {
    Cover, Intro
  }
}
</script>

<style>

  #app{
    height: 100%;
  }

  #cover{
    transition: opacity 0.7s ease;
  }

  #cover h1{
    position: absolute;
    left: 20px;
    top: 50%;
    margin-top: -22px;
    z-index: 999;
  }

  .btn{
    position: absolute;
    left: 50%;
    bottom: 200px;
    margin-left: -41px;
  }

</style>
