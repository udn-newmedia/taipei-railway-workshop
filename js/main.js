
function detectMob() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}

function detectPlatform() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return 'Mob';
    }
    else {
        return 'PC';
    }
}

function iOSVersion(targetVersion) {
	if (/iP(hone|od|ad)/.test(navigator.userAgent)) {
		// supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        if(parseInt(v[1], 10) >= targetVersion){
            return true
        }
        else{
            return false
        }
		// return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
    else{
        return false
    }
}

function isFacebookApp(version) {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    // return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    var findFBAV =ua.indexOf('FBAV/')
    // ***FB IOS before version 148 have top position problem
    var FBversion_now = Number(ua.slice(findFBAV + 5, findFBAV + 8))
    if(FBversion_now < version){
        return true;
    } else {
        return false;
    }
}


function detectIE() {
    var ua = window.navigator.userAgent;
  
    // Test values; Uncomment to check result …
  
    //   IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
    
    //   IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    
    //   Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
    
    //   Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
  
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
  
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
  
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
  
    // other browser
    return false;
  }

$(document).ready(function(){

    var circleShow = false
    var commentState = false
    var coverHidden = false
    var commentHidden = true
    var vrMode = false
    var min = false
    var skySrc = './static/0.jpg'
    var skySrcCounter = 0
    var stage = 0
    var stageOffset = 0
    var youtuFlag = false
    var interval = null
    var temp 

    $('a').click(function(){
        fbq('track', 'ViewContent');
        ga("send", {
            "hitType": "event",
            "eventCategory": "超連結點擊",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [" + $(this).attr('href') + "] [" + $(this).parent().attr('class') + "]"
        });
    })

    $('canvas').on('touchstart', function(){
        $('.intro').addClass('min')
        $('.plus').addClass('show')
        $('.plus').addClass('expand')
    })

    $('.line-block').click(function(){
        ga("send", {
            "hitType": "event",
            "eventCategory": "Line Share",
            "eventAction": "click",
            "eventLabel": "[" + detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [line share]"
        });
        if(detectMob()){
            //手機
            window.location.href="//line.me/R/msg/text/?" + document.querySelector('title').innerHTML + "%0D%0A%0D%0A" + document.querySelector('meta[property="og:description"]').content + "%0D%0A%0D%0A" + window.location.href;
        }else{
            window.open("https://lineit.line.me/share/ui?url="+window.location.href);
        }
    })

    $('.start').click(function(){
        
        ga("send", {
            "hitType": "event",
            "eventCategory": "進入VR場景 1",
            "eventAction": "click",
            "eventLabel": "[" + detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [Stage 1]"
        });

        $('#cover').css('opacity', 0)
        
        $('#button_1').trigger('show')
            
        $('.intro').css('opacity', 1)
        $('.circle').toggleClass('show')
        stage = 1
            
        var temp = document.querySelector('#button_1')
        temp.emit('show')
        temp = document.querySelector('#image-360-2')
        temp.setAttribute('src', './static/1.jpg')
        temp = document.querySelector('#image-360-3')
        temp.setAttribute('src', './static/2.jpg')
            
        setTimeout(function(){
            $('#cover').addClass('hidden')
        }, 700)
        interval = setInterval(function(){
            
            if(skySrcCounter == 2){
                return
            }
            skySrcCounter = (skySrcCounter + 1) % 3
              
            if(skySrcCounter == 0){
                
                var temp = document.querySelector('#image-360-2')
                temp.emit('hide')
                var temp = document.querySelector('#image-360-3')
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
    })
    
    $(window).on('orientationchange', function(){
        setTimeout(function(){
            var temp = document.querySelector('a-scene')
            temp.reload()
        }, 500)
    })

})