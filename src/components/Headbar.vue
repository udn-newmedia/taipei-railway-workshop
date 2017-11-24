<template>
    <div id="head-bar">
        <div id="icon">
            <a href="."><img src="https://udn.com/upf/newmedia/image/udn.png"></a>
        </div>
        <div id="hbutton" class="squre" @click="handleClick">
            <img :src="icon">
        </div>
    </div>
</template>

<script>
import Utils from 'udn-newmedia-utils'
import Logo from '@/components/Logo.vue'

import fbicon from '@/assets/fb_comments.png'
import home from '@/assets/home.png'

export default {
    name: 'indicator',
    components: { Logo },
    data: function(){
        return{
            icon: fbicon
        }
    },
    methods: {
        handleClick: function(){
            if(this.icon == fbicon){
                this.icon = home
            }
            else{
                this.icon = fbicon
            }
            this.$emit('stateChange')
            ga("send", {
                "hitType": "event",
                "eventCategory": "Ham Click",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [Ham Click]"
            });
        }
    }
}
</script>

<style scoped>
    #head-bar {
        position: fixed;
        background-color: #231815;;
        color: #000000;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 99999;
        transition: opacity 0.7s ease;
    }
    #icon{
        position: absolute;
        top: 0;
    }
    #icon img {
        width: 130px;
        margin-top: -3px;
        margin-left: 5px;
    }
    #hbutton{
        width: 46px;
        height: 46px;
        top: 0;
        right: 0;
        padding: 0 5px;
        position: absolute;
    }
    .squre img{
        width: 100%;
        margin-top: 5px;
    }
    
    @media screen and (max-width: 1024px){
        #head-bar{
            height: 46px;
        }
        #icon {
            height: 46px;
            line-height: 46px;
            text-align: center;
            width: 100%;
        }
        .hbutton {
            margin: 1px auto 0 auto;
            background-color: #FFFFFF;
            color: #000000;
            border-bottom: 1px solid #000000;
            height: 60px;
            padding: 0;
            line-height: 60px;
            font-size: 20px;
            text-align: center;
            margin-top: 1px;
            letter-spacing: 8px;
            float: none;
        }
    }
    
    @media screen and (min-width: 1025px){
        #head-bar{
            height: 50px;
        }
        #icon {
            height: 50px;
            line-height: 50px;
        }
    }
</style>