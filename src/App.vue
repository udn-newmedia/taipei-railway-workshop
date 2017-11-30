<template>
	<div id="app">
    <Headbar @stateChange="stateChange"></Headbar>
    <div id="exitbutton" @click="exitVr" :class="{hidden: !vrMode}">
      <span><i class="fa fa-close"></i></span>Exit VR
    </div>
    <div class="plus" @click="expand" :class="{expand: min, show: circleShow}"><img src="./assets/plus_button.png"></div>
		<Cover :src="bg_m" :src-web="bg" :style="{opacity: opacity}" :class="{hidden: coverHidden}">
      <div id="cover-contain">
        <h1>用一生守護乘客</h1>
        <div class="sub-title">360VR看台北機廠82年歲月</div>
        <p><br/></p>
        <Share href="https://udn.com/upf/newmedia/2017_data/taipei-railway-workshop/index.html"/>
      </div>
      <div class="start" @click="start"><img src="./assets/start.png"></div>
      <!-- <div class="youtu"><a href="https://www.youtube.com/watch?v=V4LkXWk-J18&feature=youtu.be" target="_blank">直接看影片</a></div> -->
		</Cover>
    <ContentContainer id="comment-block" :class="{hidden: commentHidden}">
      <p><br/></p>
      <div><a href="https://www.surveycake.com/s/KpQKN" target="_blank"><img id="question" src="./assets/question.jpg"></a></div>
      <p><br/></p>
      <Editor>
        <div>文字、影片腳本：魏妤庭、洪欣慈</div>
				<div>攝影：林伯東</div>
				<div>視覺設計、影片製作：呂紹齊</div>
				<div>插畫：董十行</div>
        <div>網頁製作：鄭偉廷</div>
				<div>2017.12.05</div>
      </Editor>
      <p><br/></p>
      <Share href="https://udn.com/upf/newmedia/2017_data/taipei-railway-workshop/index.html"/>
      <p><br/></p>
      <Relate>
        <a href="https://udn.com/news/story/7314/2283796" target="_blank" slot="relate-1">
					<img class="lazyload" :data-src="relate1"/>
					<p>古蹟爭議暫緩 台北機廠變身鐵道博物館</p>
				</a>
				<a href="https://udn.com/news/story/7314/2583228" target="_blank" slot="relate-2">
					<img class="lazyload" :data-src="relate2"/>
					<p>台北機廠修復中19日開放導覽 不到三天搶光光</p>
				</a>
				<a href="https://udn.com/news/story/7266/2617906" target="_blank" slot="relate-3">
					<img class="lazyload" :data-src="relate3"/>
					<p>鐵道迷夢幻逸品 全世界最早的臥鋪電車來台</p>
				</a>
				<a href="https://opinion.udn.com/opinion/story/10763/2786595" target="_blank" slot="relate-4">
					<img class="lazyload" :data-src="relate4"/>
					<p>【圖輯】歷史上的今天：走過八十二個年頭的臺北機廠</p>
				</a>
      </Relate>
      <p><br/></p>
      <FBComment href="https://udn.com/upf/newmedia/2017_data/taipei-railway-workshop/index.html" />
      <p><br/></p>
      <Foot background-color="#FFFFFF"/>
    </ContentContainer>
    <Intro :min="min" :style="{opacity: opacity1}" :text="introText" />
    <a-scene @touchstart="touchHandle" @enter-vr="enterVr" @exit-vr="exitVr">
      <a-assets>
        <img id="button-1" src="./assets/button_1.png">
        <img id="button-2" src="./assets/button_2.png">
        <img id="button-3" src="./assets/360videolink.png">
      </a-assets>
      <a-sky id="image-360" :src="skySrc">
        <a-animation begin="click" easing="ease-in" attribute="opacity" @animationend="skyAnimation" 
            from="1" to="0.8" dur="700"></a-animation>
        <a-animation begin="show" easing="ease-in" attribute="opacity"
            from="0.8" to="1" dur="700"></a-animation>
      </a-sky>
      <a-sky id="image-360-2" src="" material="opacity: 0">
        <a-animation begin="hide" easing="ease-in" attribute="opacity" 
            from="1" to="0" dur="700"></a-animation>
        <a-animation begin="show" easing="ease-in" attribute="opacity"
            from="0" to="1" dur="700"></a-animation>
      </a-sky>
      <a-sky id="image-360-3" src="" material="opacity: 0">
        <a-animation begin="hide" easing="ease-in" attribute="opacity" 
            from="1" to="0" dur="700"></a-animation>
        <a-animation begin="show" easing="ease-in" attribute="opacity"
            from="0" to="1" dur="700"></a-animation>
      </a-sky>
      <a-image id="button_1" class="link" position="-5.5 0 -4" src="#button-1" width="1.5" height="1.5" rotation="0 50 0" @click="toStage2" material="opacity: 0">
        <a-animation begin="show" easing="ease-in" attribute="opacity"
            from="0" to="1" dur="700"></a-animation>
        <a-animation begin="click" easing="ease-in" attribute="opacity"
            from="1" to="0" dur="700"></a-animation>
        <a-animation begin="mouseenter" easing="ease-in" attribute="scale"
            from="1 1 1" to="1.5 1.5 1.5" dur="700"></a-animation>
        <a-animation begin="mouseleave" easing="ease-in" attribute="scale"
            from="1.5 1.5 1.5" to="1 1 1" dur="700"></a-animation>
      </a-image>
      <a-image id="button_2" class="link" position="-1 0 -5" src="#button-2" width="1.5" height="1.5" rotation="0 10 0" @click="toStage3" material="opacity: 0">
        <a-animation begin="show" easing="ease-in" attribute="opacity"
            from="0" to="1" dur="700"></a-animation>
        <a-animation begin="click" easing="ease-in" attribute="opacity"
            from="1" to="0" dur="700"></a-animation>
        <a-animation begin="mouseenter" easing="ease-in" attribute="scale"
            from="1 1 1" to="1.5 1.5 1.5" dur="700"></a-animation>
        <a-animation begin="mouseleave" easing="ease-in" attribute="scale"
            from="1.5 1.5 1.5" to="1 1 1" dur="700"></a-animation>
      </a-image>
      <a-image id="button_3" class="link" position="-4 0 -5" src="#button-3" width="1.5" height="1.5" rotation="0 40 0" @click="toYoutube" material="opacity: 0">
        <a-animation begin="show" easing="ease-in" attribute="opacity"
            from="0" to="1" dur="700"></a-animation>
        <a-animation begin="mouseenter" easing="ease-in" attribute="scale"
            from="1 1 1" to="1.5 1.5 1.5" dur="700"></a-animation>
        <a-animation begin="mouseleave" easing="ease-in" attribute="scale"
            from="1.5 1.5 1.5" to="1 1 1" dur="700"></a-animation>
      </a-image>
      <a-entity id="camera-rotation" rotation="0 60 0">
        <a-camera mouse-cursor looks>
            <a-cursor id="cursor" cursor="fuse: false" geometry="primitive: ring; radiusInner: 0.03; radiusOuter: 0.04" material="color: red">
              <a-animation begin="click" easing="ease-in" attribute="scale"
                          fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>
              <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
                          from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
            </a-cursor>
          </a-camera>
        </a-entity>
      </a-entity>
    </a-scene>
	  <div class="circle" :class="{show: circleShow}"><img src="./assets/360icon.png"></div>
  </div>
</template>

<script>

import Utils from 'udn-newmedia-utils'

import Headbar from '@/components/Headbar'
import Cover from '@/components/Cover'
import ContentContainer from '@/components/Content'
import Share from '@/components/Share'
import Intro from '@/components/Intro'
import Editor from '@/components/Editor'
import Relate from '@/components/Relate'
import FBComment from '@/components/FBComment'
import Foot from '@/components/Footer'

import bg_m from '@/assets/bg_m.jpg'
import bg from '@/assets/bg.jpg'

import relate1 from '@/assets/relate1.jpg'
import relate2 from '@/assets/relate2.jpg'
import relate3 from '@/assets/relate3.jpg'
import relate4 from '@/assets/relate4.jpg'

var track = 0

export default {
  name: 'app',
  data: function(){
    return {
      introText: '上班時間的市民大道車水馬龍，喇叭聲與人聲不絕於耳，有個地方在熱鬧中顯得寂靜低調，紅紅的四個大字「台北機廠」逐漸被樹叢淹沒。這裡臉書打卡率最高的，是這個宛如「羅馬浴場」的員工浴室。',
      opacity: 1,
      opacity1: 0,
      circleShow: false,
      commentState: false,
      coverHidden: false,
      commentHidden: true,
      bg_m: bg_m,
      bg: bg,
      vrMode: false,
      min: false,
      skySrc: './static/0.jpg',
      skySrcCounter: 0,
      stage: 0,
      stageOffset: 0,
      youtuFlag: false,
      interval: null,
      relate1: relate1,
      relate2: relate2,
      relate3: relate3,
      relate4: relate4
    }
  },
  mounted: function(){
    var d = new Date()
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    var day = d.getDate()
    var hour = d.getHours()
    var minute = d.getMinutes()
    var second = d.getSeconds()
    var tempUser = 'udn-' + year + '-' + month + '-' + day + '-' +  hour + '-' + minute + '-' + second + '-' + Math.floor(Math.random()*100000)
    window.addEventListener('orientationchange', function(){
      console.log(123)
      console.log(document.querySelector('a-scene').object3D)
      // setTimeout(function(){
      //   $('window').trigger('resize')
      //   // $('canvas').css('width', window.innerWidth)
      //   // $('canvas').css('height', window.innerHeight)
      // }, 300)
    })
    setInterval(function(){
      var temp = document.querySelector('a-camera')
      console.log(temp.getAttribute('rotation'), track, tempUser)
      track += 1
      ga("send", {
        "hitType": "event",
        "eventCategory": "VR 追蹤",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [VR 追蹤] [" + tempUser + "] [" + track + "]"
      });
    }, 1000)
  },
  methods: {
    enterVr: function(){
      this.vrMode = true
      this.circleShow = false
      ga("send", {
        "hitType": "event",
        "eventCategory": "進入VR模式",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [進入VR模式]"
      });
    },
    exitVr: function(){
      ga("send", {
        "hitType": "event",
        "eventCategory": "進入VR模式",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [離開VR模式]"
      });
      document.querySelector('a-scene').exitVR();
      window.location.href = "./index.html"
      this.vrMode = false
      this.circleShow = true
    },
    skyAnimation: function(){
      var temp = document.querySelector('#image-360')
      temp.emit('show')
    },
    stateChange: function(){
      if(this.stage == 0){
        this.coverHidden = !this.coverHidden
        this.commentHidden = !this.commentHidden
        ga("send", {
          "hitType": "event",
          "eventCategory": "留言icon點擊",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [留言icon點擊]"
        });
      }
      else{
        this.coverHidden = true
        ga("send", {
          "hitType": "event",
          "eventCategory": "返回icon點擊",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [返回icon點擊]"
        });
        if(this.commentHidden == false){
          this.commentHidden = true
          this.circleShow = true
        }
        else{
          this.commentHidden = false
          this.min = true
          this.circleShow = false
        }
      }
    },
    expand: function(){
      this.min = false
      ga("send", {
        "hitType": "event",
        "eventCategory": "expand 點擊",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [expand 點擊]"
      });
    },
    toYoutube: function(){
      if(this.stage != 3){
        return
      }
      ga("send", {
        "hitType": "event",
        "eventCategory": "Head youtube 點擊",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [stage3 youtube 點擊]"
      });
      if(this.youtuFlag == false){
        window.open('https://www.youtube.com/watch?v=V4LkXWk-J18&feature=youtu.be')
        this.youtuFlag = true
        setTimeout(() => {
          this.youtuFlag = false
        }, 3000)
      }
    },
    toStage3: function(){
      if(this.stage != 2){
        return
      }
      ga("send", {
        "hitType": "event",
        "eventCategory": "進入VR場景 3",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [Stage 3]"
      });
      clearInterval(this.interval)
      var temp = document.querySelector('#button_3')
      temp.emit('show')
      temp = document.querySelector('#button_2')
      temp.parentNode.removeChild(temp)
      temp = document.querySelector('#image-360')
      temp.emit('click')
      temp = document.querySelector('#image-360-2')
      temp.emit('hide')
      temp = document.querySelector('#image-360-3')
      temp.emit('hide')
      this.min = false
      this.skySrc = './static/6.jpg'
      this.stage = 3
      this.introText = '歷經遷廠、文化資產保存等爭議，台北機廠在今年7月19日開放民眾登記參觀，預約一開搶就秒殺，現在導覽預約已滿到明年，讓不少想一睹機廠的民眾扼腕。這座已高齡82歲的「火車醫院」魅力何在？聯合報首次以360VR，紀錄台北機廠維修前原貌，跟著台鐵老員工的腳步，聽故事、感受曾經的機廠風華。'
    },
    toStage2: function(){
      if(this.stage != 1){
        return
      }
      ga("send", {
        "hitType": "event",
        "eventCategory": "進入VR場景 2",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [Stage 2]"
      });
      var temp = document.querySelector('#button_2')
      temp.emit('show')
      temp = document.querySelector('#button_1')
      temp.parentNode.removeChild(temp)
      temp = document.querySelector('#image-360')
      temp.emit('click')
      temp = document.querySelector('#image-360-2')
      temp.setAttribute('src', './static/4.jpg')
      temp = document.querySelector('#image-360-3')
      temp.setAttribute('src', './static/5.jpg')
      this.min = false
      this.skySrc = './static/3.jpg'
      this.stageOffset += 3
      this.introText = '但在浴池之外，斑駁的圍牆內承載的是台灣近一世紀的鐵路史縮影。從蒸汽火車，到熟悉的普悠瑪號，都是在這裡做定期健檢。許多人一輩子都待在這，用雙手維護著火車上你我的安全。'
      this.stage = 2
      this.skySrcCounter = 0
    },
    touchHandle: function(){
      this.min = true
    },
    start: function(){
      ga("send", {
        "hitType": "event",
        "eventCategory": "進入VR場景 1",
        "eventAction": "click",
        "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [Stage 1]"
      });
      this.opacity = 0
      this.opacity1 = 1
      this.circleShow = true
      this.stage = 1
      var temp = document.querySelector('#button_1')
      temp.emit('show')
      temp = document.querySelector('#image-360-2')
      temp.setAttribute('src', './static/1.jpg')
      temp = document.querySelector('#image-360-3')
      temp.setAttribute('src', './static/2.jpg')
      setTimeout(() => {
        this.coverHidden = true
      }, 700)
      this.interval = setInterval(() => {
        if(this.skySrcCounter == 2){
          return
        }
        this.skySrcCounter = (this.skySrcCounter + 1) % 3
        // this.skySrc = './static/' +  (this.skySrcCounter + this.stageOffset) + '.jpg'
        if(this.skySrcCounter == 0){
          var temp = document.querySelector('#image-360-2')
          temp.emit('hide')
          temp = document.querySelector('#image-360-3')
          temp.emit('hide')
        }
        else if(this.skySrcCounter == 1){
          var temp = document.querySelector('#image-360-2')
          temp.emit('show')
        }
        else{
          var temp = document.querySelector('#image-360-3')
          temp.emit('show')
        }
      }, 1500)
    }
  },
  components: {
    Cover, Intro, Headbar, Share, ContentContainer, Editor, Relate, FBComment, Foot
  }
}
</script>

<style>
  #exitbutton{
    position: absolute;
    height: 46px;
    color: #FFFFFF;
    line-height: 46px;
    left: 50%;
    margin-left: -49px;
    font-size: 24px;
    z-index: 99999;
  }

  #exitbutton .fa-close{
    margin-right: 5px;
  }
  a-box{
    pointer-events: none;
  }
  #app{
    height: 100%;
  }

  #comment-block{
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
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

  @keyframes opchange{
    0% {opacity: 1}
    50% {opacity: 0.6}
    100% {opacity: 1}
  }

  .start{
    animation-name: opchange;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    position: absolute;
    bottom: 140px;
    left: 50%;
    margin-left: -65px;
    width: 130px;
  }

  .youtu a{
    color: #FFFFFF;
    text-decoration: none;
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
    display: none;
  }
  .plus.show{
    display: block;
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

  @media screen and (max-width: 767px){
    #question{
      width: 75%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px){
    .start{
      width: 200px;
      margin-left: -100px;
    }
  }

  @media screen and (min-width: 1024px){
    #cover-contain{      
      left: 10%;
    }
  }

</style>
