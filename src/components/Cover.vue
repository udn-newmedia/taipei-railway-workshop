<template>
    <div id="cover">
        <slot></slot>
        <div id="bg-contain">
            <img class="hidden-md hidden-lg lazyload" :data-src="src" >
            <img class="hidden-xs hidden-sm lazyload" :data-src="srcWeb">
        </div>
    </div>
</template>

<script>
export default {
    props: ['src', 'srcWeb']
}
</script>

<style scoped>
    #cover {
        height: 100vh;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        position: absolute;
        z-index: 10;
        width: 100%;
        top: 0;
        left: 0;
    }
    #bg-contain{
        transition: opacity 0.7s ease;
        overflow: hidden;
    }
    h1{
        font-size: 55px;
        letter-spacing: -1px;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0px 18px rgba(48,48,48,1);
        margin: 0;
        font-weight: bold;
    }
    img{
        width: 100%;
    }
    @media screen and (max-width: 767px){
        h1{
            font-size: 40px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        h1{
            font-size: 45px;
        }
    }
    
</style>