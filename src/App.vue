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
      </a-assets>
      <a-sky id="image-360" src="#360-1"></a-sky>
      <a-image src="#button-1" position="-3 1.5dw -2"></a-image>
      <a-entity log></a-entity>
      <a-entity rotation="0 80 0">
        <a-camera></a-camera>
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
