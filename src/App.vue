<template>
	<div id="app">
    <Headbar @stateChange="stateChange"></Headbar>
    <div class="plus" @click="expand" :class="{expand: min, show: circleShow}"><img src="./assets/plus_button.png"></div>
		<Cover :src="bg_m" :style="{opacity: opacity}" :class="{hidden: coverHidden}">
      <div id="cover-contain">
        <h1>台北機廠大標</h1>
        <p><br/></p>
        <Share />
      </div>
      <div class="start" @click="start"><img src="./assets/start.png"></div>
      <div class="youtu">直接看影片</div>
		</Cover>
    <ContentContainer id="comment-block" :class="{hidden: commentHidden}">
      <p><br/></p>
      <Editor>
        <div>文字：洪欣慈、蔡佩蓉</div>
				<div>視覺設計、影音：張心慈</div>
				<div>網頁製作：鄭偉廷</div>
				<div>攝影：陳立凱</div>
				<div>2017.10.30</div>
      </Editor>
      <p><br/></p>
      <Share/>
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
      <FBComment href="https://udn.com/upf/newmedia/2017_data/ideal/index.html" />
      <p><br/></p>
      <Foot background-color="#FFFFFF"/>
    </ContentContainer>
    <Intro :min="min" :style="{opacity: opacity1}" :text="introText" />
    <a-scene @touchstart="touchHandle">
      <a-assets>
        <img id="360-1-1" src="./assets/360-1-1.jpg"/>
        <img id="360-2" src="./assets/360-2.jpg"/>
        <img id="360-3" src="./assets/360-3.jpg"/>
        <img id="button-1" src="./assets/button_1.png">
        <img id="button-2" src="./assets/button_2.png">
        <img id="button-3" src="./assets/360videolink.png">
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
      <a-image id="button_1" class="link" position="-5.5 2 -3" src="#button-1" width="1.5" height="1.5" rotation="0 50 0" @click="toStage2">
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
      <a-image id="button_3" class="link" position="-4 1 -5" src="#button-3" width="1.5" height="1.5" rotation="0 60 0" @click="toYoutube" material="opacity: 0">
        <a-animation begin="show" easing="ease-in" attribute="opacity"
            from="0" to="1" dur="700"></a-animation>
        <a-animation begin="mouseenter" easing="ease-in" attribute="scale"
            from="1 1 1" to="1.5 1.5 1.5" dur="700"></a-animation>
        <a-animation begin="mouseleave" easing="ease-in" attribute="scale"
            from="1.5 1.5 1.5" to="1 1 1" dur="700"></a-animation>
      </a-image>
      <a-entity id="camera-rotation" rotation="0 80 0">
        <a-camera look-controls mouse-cursor>
            <a-cursor id="cursor" geometry="primitive: ring; radiusInner: 0.03; radiusOuter: 0.04" material="color: red">
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

import relate1 from '@/assets/relate1.jpg'
import relate2 from '@/assets/relate2.jpg'
import relate3 from '@/assets/relate3.jpg'
import relate4 from '@/assets/relate4.jpg'

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
      min: false,
      skySrc1: '#360-1-1',
      stage: 0,
      youtuFlag: false,
      interval: null,
      relate1: relate1,
      relate2: relate2,
      relate3: relate3,
      relate4: relate4
    }
  },
  mounted: function(){
    
  },
  methods: {
    stateChange: function(){
      if(this.stage == 0){
        this.coverHidden = !this.coverHidden
        this.commentHidden = !this.commentHidden
      }
      else{
        this.coverHidden = true
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
    },
    toYoutube: function(){
      if(this.stage != 3){
        return
      }
      if(this.youtuFlag == false){
        window.open('https://youtube.com.tw')
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
      var temp = document.querySelector('#image-360-3')
      temp.emit('show')
      temp = document.querySelector('#button_3')
      temp.emit('show')
      temp = document.querySelector('#button_2')
      temp.parentNode.removeChild(temp)
      this.min = false
      this.stage = 3
      this.introText = '歷經遷廠、文化資產保存等爭議，台北機廠在今年7月19日開放民眾登記參觀，預約一開搶就秒殺，現在導覽預約已滿到明年，讓不少想一睹機廠的民眾扼腕。這座已高齡82歲的「火車醫院」魅力何在？聯合報首次以360VR，紀錄台北機廠維修前原貌，跟著台鐵老員工的腳步，聽故事、感受曾經的機廠風華。'
    },
    toStage2: function(){
      if(this.stage != 1){
        return
      }
      var temp = document.querySelector('#image-360-2')
      temp.emit('show')
      temp = document.querySelector('#button_2')
      temp.emit('show')
      temp = document.querySelector('#button_1')
      temp.parentNode.removeChild(temp)
      temp = document.querySelector('#camera-rotation')
      temp.setAttribute('rotation', '0 30 0')
      this.min = false
      this.introText = '但在浴池之外，斑駁的圍牆內承載的是台灣近一世紀的鐵路史縮影。從蒸汽火車，到熟悉的普悠瑪號，都是在這裡做定期健檢。許多人一輩子都待在這，用雙手維護著火車上你我的安全。'
      this.stage = 2
    },
    touchHandle: function(){
      this.min = true
    },
    start: function(){
      this.opacity = 0
      this.opacity1 = 1
      this.circleShow = true
      this.stage = 1
      setTimeout(() => {
        this.coverHidden = true
      }, 700)
    }
  },
  components: {
    Cover, Intro, Headbar, Share, ContentContainer, Editor, Relate, FBComment, Foot
  }
}
</script>

<style>

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

</style>
