# Portfolio

## INTRO
# 
배경의 gradient style을 주어 TimelineMax 플러그인을 사용해 위, 아래로 나오는 애니메이션을 나타냈습니다.
```CSS
.bg-top{
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg, #2f4f4f 50%, rgba(255, 255, 255, 0) 50%
    );
    z-index: -9999;
}
.bg-bottom{
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg, rgba(255, 255, 255, 0) 50%, #faebd7 50%
    );
    z-index: -9999;
}
```
```javascript
  tl.fromTo(bgTop, 1.5, {y: "-100%"}, {y: "0%",ease: Power2.easeInOut}, "-=1.5");
  tl.fromTo(bgBottom, 1.7, {y: "100%"}, {y: "0%",ease: Power2.easeInOut}, "-=1.5");

```
intro의 line을 gradient style을 주었습니다.
```CSS
    border: 10px solid #2f4f4f;
    border-style: solid;
    border-image: linear-gradient(
        90deg, #faebd7 50%, #2f4f4f 50%
    );
    border-image-slice: 10;
```

## Profile

#
ScrollMagic 플러그인으로 스크롤될 때 애니메이션을 넣었습니다.
```CSS
.back-to-position{
    opacity: 0;
    -webkit-transition: 0.6s;
    transition: 0.6s;
}
.back-to-position.to-right{
    -webkit-transform: translateX(-150px);
    transform: translateX(-150px);
}
.back-to-position.to-left{
    -webkit-transform: translateX(150px);
    transform: translateX(150px);
}
.show .back-to-position{
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.show .back-to-position.delay-0{
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
}
.show .back-to-position.delay-1{
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
}
.show .back-to-position.delay-2{
    -webkit-transition-delay: 0.6s;
    transition-delay: 0.6s;
}
```
```javascript
const spyEls = document.querySelectorAll("section.scroll-spy");
    spyEls.forEach(function(spyEl){
        new ScrollMagic
        .Scene({ //보여질 부분
            triggerElement: spyEl, //선택 요소
            triggerHook: 0.5 // 뷰포트에서 걸려지는 위치 (위에서 부터 0~1)
        })
        .setClassToggle(spyEl, "show")  //show라는 클라스 생성
        .addTo(new ScrollMagic.Controller()); //동작 가능하게 하는 메서드
    });
```
# 
toggle형식의 버튼을 클릭하면 저의 설명에 대한 내용을 보실 수 있습니다.
```javascript
var promotionEl = document.querySelector(".box2 > .swiper-container");
    var promotionToggleBtn = document.querySelector(".togglebtn");
    var isHidePromotion = false;

    promotionToggleBtn.addEventListener("click",function(){
        isHidePromotion = !isHidePromotion
        if(isHidePromotion){
            //숨김 처리
            promotionEl.classList.add("hide");
        }else{
            //보임 처리
            promotionEl.classList.remove("hide");
        }
    });
```

## WORK
### Swiper 플러그인
#
아래의 형식을 이용해 슬라이드 형식을 구현하였습니다.
```HTML
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>

<div class="swiper-pagination"></div>

<div class="swiper-prev">
    <div class="material-icons">arrow_back_ios</div>
</div>
<div class="swiper-next">
    <div class="material-icons">arrow_forward_ios</div>
</div>
```
```javascript
new Swiper(".promotion .swiper-container", {
        slidesPerView: 1, //한번에 보여줄 슬라이드 개수
        spaceBetween: 10, //슬라이드 사이 여백
        centeredSlides: true, //1번 슬라이드가 가운데 보이기
        loop: true, //반복 재생
        autoplay: { //자동 재생
            delay: 6000
        },
        pagination: {
            el: ".promotion .swiper-pagination",
            clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
        },
        navigation: {
            prevEl: ".promotion .swiper-prev",
            nextEl: ".promotion .swiper-next"
        }
    });
```

## CONTACT
#
명함의 느낌을 주고싶어 hover 됐을 때 회전하면서 뒷 면이 보여지는 효과를 넣었습니다.
```HTML
<div class="card">
    <div class="front">
        <div class="logo logo-front">
            <img src="./img/favicon.png" alt="">
        </div>
        <div class="card-text">
            <div class="card-contact">
                <p>Phone number : 010-0000-0000</p>
                <p>E-mail : oooooooo<span>@naver.com</span></p>
            </div>
        </div>
    </div>
    <div class="back">
        <div class="card-back">
            <div class="back-card-contact">
                <img src="./img/favicon.png" alt="">
            </div>
        </div>
    </div>
</div>
```
```CSS
.contact .card .front,
.contact .card .back{
    position: absolute;
    backface-visibility: hidden;
    -webkit-transition: 1s;
    transition: 1s;
    width: 450px;
    height: 250px;
    background: #2f4f4f;
    border-radius: 10px;
}
.contact .card .front{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}
.contact .card:hover .front{
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
}

.contact .card .back{
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    background: #2f4f4f;
}
.contact .card:hover .back{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
}
.contact .card .card-back{
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}
```
