<template>
  <div class="container content intro" :class="{min: min}">
      <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ['text', 'min'],
}
</script>

<style scoped>
    h2{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        margin: 0;
    }
    .chart-title{
        font-size: 28px;
    }
    p{
        font-size: 21px;
        margin: 0;
        color: #FFFFFF;
    }
    .img-say{
        font-size: 17px;
        color: gray;
        margin-top: 5px;
    }
    .content.intro{
      padding: 70px 20px 30px 20px;
    }
    .intro{
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.8);
      transition: all 0.7s ease;
      width: 100%;
      z-index: 10;
      transform-origin: top left;
    }
    .intro.min{
      top: 64px;
      left: 20px;
      transform: scale(0);
    }
    .min p{
        display: none;
    }
    @media screen and (max-width: 767px){
        h2{
            font-size: 26px;
        }
        .chart-title{
            font-size: 26px;
        }
        p{
            font-size: 18px;
            line-height: 32px;
        }
        .content{
            padding: 64px 20px;
        }
        .img-say{
            font-size: 15px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        .container{
            width: 100%;
        }
        .content{
            padding: 64px 100px;
        }
        h2{
            font-size: 30px;
        }
        p{
            font-size: 20px;
            line-height: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        .container{
            width: 880px;
        }
        .content{
            padding: 100px 0px;
        }
        p>br{
            line-height: 50px;
        }
    }
</style>


