<template>
	<div id="app">
    <Headbar></Headbar>
    <div class="plus" @click="expand" :class="{expand: min}"><img src="./assets/plus_button.png"></div>
		<Cover :src="bg_m" :style="{opacity: opacity, display: display}">
      <div id="cover-contain">
        <h1>台北機廠大標</h1>
        <p><br/></p>
        <Share />
      </div>
      <div class="start" @click="start"><img src="./assets/start.png"></div>
      <div class="youtu">直接看影片</div>
		</Cover>
    <Intro :min="min" :style="{opacity: opacity1}" :text="introText" />
    <a-scene @touchstart="touchHandle">
      <a-assets>
        <img id="360-1-1" src="./assets/360-1-1.jpg"/>
        <img id="360-1-2" src="./assets/360-1-2.jpg"/>
        <img id="360-1-3" src="./assets/360-1-3.jpg"/>
        <img id="360-2" src="./assets/360-2.jpg"/>
        <img id="360-3" src="./assets/360-3.jpg"/>
        <img id="button-1" src="./assets/button_1.png">
        <img id="button-2" src="./assets/button_2.png">
      </a-assets>
      <a-sky id="image-360" src="#360-1-1"></a-sky>
      <a-sky id="image-360-2" src="#360-2" material="opacity: 0">
        <a-animation attribute="opacity"
               dur="700"
               from="0"
               to="1"
               begin="show"
               ></a-animation>
      </a-sky>
      <a-sky id="image-360-3" src="#360-3" material="opacity: 0">
        <a-animation attribute="opacity"
               dur="700"
               from="0"
               to="1"
               begin="show"
               ></a-animation>
      </a-sky>
      <a-image class="link" position="-5.5 2 -3" src="#button-1" width="1.5" height="1.5" rotation="0 50 0" @click="toStage2">
        <a-animation begin="click" easing="ease-in" attribute="opacity"
            from="1" to="0" dur="700"></a-animation>
        <a-animation begin="mouseenter" easing="ease-in" attribute="scale"
            from="1 1 1" to="1.5 1.5 1.5" dur="700"></a-animation>
        <a-animation begin="mouseleave" easing="ease-in" attribute="scale"
            from="1.5 1.5 1.5" to="1 1 1" dur="700"></a-animation>
      </a-image>
      <a-image id="button_2" class="link" position="-1 2 -5" src="#button-2" width="1.5" height="1.5" rotation="0 10 0" @click="toStage3" material="opacity: 0">
        <a-animation begin="show" easing="ease-in" attribute="opacity"
            from="0" to="1" dur="700"></a-animation>
        <a-animation begin="click" easing="ease-in" attribute="opacity"
            from="1" to="0" dur="700"></a-animation>
        <a-animation begin="mouseenter" easing="ease-in" attribute="scale"
            from="1 1 1" to="1.5 1.5 1.5" dur="700"></a-animation>
        <a-animation begin="mouseleave" easing="ease-in" attribute="scale"
            from="1.5 1.5 1.5" to="1 1 1" dur="700"></a-animation>
      </a-image>
      <a-entity rotation="0 80 0">
        <a-camera look-controls>
            <a-cursor id="cursor" fuse="false" geometry="primitive: ring; radiusInner: 0.03; radiusOuter: 0.04" material="color: red">
              <a-animation begin="click" easing="ease-in" attribute="scale"
                           fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>
              <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
                           from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
            </a-cursor>
          </a-camera>
      </a-entity>
    </a-scene>
	  <div class="circle" :class="{show: circleShow}"><img src="./assets/360icon.png"></div>
  </div>
</template>

<script>
import Headbar from '@/components/Headbar'
import Cover from '@/components/Cover'
import Share from '@/components/Share'
import Intro from '@/components/Intro'

import bg_m from '@/assets/bg_m.jpg'

export default {
  name: 'app',
  data: function(){
    return {
      introText: '上班時間的市民大道車水馬龍，喇叭聲與人聲不絕於耳，有個地方在熱鬧中顯得寂靜低調，紅紅的四個大字「台北機廠」逐漸被樹叢淹沒。這裡臉書打卡率最高的，是這個宛如「羅馬浴場」的員工浴室。',
      opacity: 1,
      opacity1: 0,
      circleShow: false,
      display: 'block',
      bg_m: bg_m,
      min: false,
      skySrc: '#360-1-1'
    }
  },
  mounted: function(){
    
    // $('canvas').on('touchstart', function(){
    //   console.log(123)
    //   $('.intro').css('opacity', 0)
    // })
    
  },
  methods: {
    expand: function(){
      this.min = false
    },
    toStage3: function(){
      var temp = document.querySelector('#image-360-3')
      temp.emit('show')
      this.min = false
      this.introText = '歷經遷廠、文化資產保存等爭議，台北機廠在今年7月19日開放民眾登記參觀，預約一開搶就秒殺，現在導覽預約已滿到明年，讓不少想一睹機廠的民眾扼腕。這座已高齡82歲的「火車醫院」魅力何在？聯合報首次以360VR，紀錄台北機廠維修前原貌，跟著台鐵老員工的腳步，聽故事、感受曾經的機廠風華。'
    },
    toStage2: function(){
      var temp = document.querySelector('#image-360-2')
      temp.emit('show')
      temp = document.querySelector('#button_2')
      temp.emit('show')
      this.min = false
      this.introText = '但在浴池之外，斑駁的圍牆內承載的是台灣近一世紀的鐵路史縮影。從蒸汽火車，到熟悉的普悠瑪號，都是在這裡做定期健檢。許多人一輩子都待在這，用雙手維護著火車上你我的安全。'
    },
    touchHandle: function(){
      this.min = true
    },
    start: function(){
      this.opacity = 0
      this.opacity1 = 1
      this.circleShow = true
      setTimeout(() => {
        this.display = 'none'
      }, 700)
    }
  },
  components: {
    Cover, Intro, Headbar, Share
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

  #cover-contain{
    position: absolute;
    left: 20px;
    top: 20%;
  }

  .start img{
    width: 100%;
  }

  .start{
    position: absolute;
    bottom: 140px;
    left: 50%;
    margin-left: -65px;
    width: 130px;
  }

  .youtu{
    position: absolute;
    font-weight: bold;
    bottom: 80px;
    left: 50%;
    margin-left: -60px;
    font-size: 24px;
    color: #FFFFFF;
    text-decoration: underline;
  }
  .plus{
    position: absolute;
    width: 35px;
    height: 35px;
    top: 64px;
    left: 20px;
    z-index: 10;
    transition: opacity 0.7s ease;
    opacity: 0;
  }
  .plus.expand{
    opacity: 1;
  }
  .plus img{
    width: 100%;
  }
  .circle{
    opacity: 0;
    transition: opacity 0.7s ease;
    position: absolute;
    bottom: 65px;
    width: 160px;
    left: 50%;
    margin-left: -80px;
  }
  .circle img{
    width: 100%;
  }
  .circle.show{
    opacity: 1;
  }

</style>
