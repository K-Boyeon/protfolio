$(function () {
  setTimeout(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 800, function () {
      promotionEl.classList.add("hide");
      $(".main-menu .menu li").eq(0).find("a").addClass("active");
    });
  });

  $(window).resize(function () { //이벤트 헨들링의 첫 시작이 setTimeout -> 이벤트 헨들링을 조종해주는 역할
    h = $(window).height();
    $("section").css({
      height: h
    }); //css속성을 줌으로써 자동적으로 px단위를 인식함
  });
  $(window).trigger("resize"); //강제로 실행(trigger)

  // INTRO-ANIMATION
  const inner = document.querySelector(".inner");
  const innerH1 = document.querySelector(".intro h1");
  const h1 = document.querySelectorAll(".text");
  const text2 = document.querySelectorAll(".text-2");
  const mainMenu = document.querySelector(".intro .fade-in");
  const bgTop = document.querySelector(".bg-top");
  const bgBottom = document.querySelector(".bg-bottom");

  const tl = new TimelineMax();
  tl.fromTo(inner, 1.5, {height: "0%",opacity: 0}, {height: "50%",opacity: 1,ease: Power2.easeInOut});
  tl.fromTo(inner, 1.5, {width: "97%"}, {width: "60%",ease: Power2.easeInOut}, "-=0.7");
  tl.fromTo(innerH1, 0.7, {opacity: 1}, {opacity: 0});
  tl.fromTo(mainMenu, 0.5, {opacity: 0}, {opacity: 1,ease: Power2.easeIn}, "-=0.5");
  tl.fromTo(h1, 0.7, {x: "-30",opacity: 0}, {x: "0",opacity: 1}, "-=0.5");
  tl.fromTo(text2, 0.7, {x: "-30",opacity: 0}, {x: "0",opacity: 1}, "-=0.5");
  tl.fromTo(bgTop, 1.5, {y: "-100%"}, {y: "0%",ease: Power2.easeInOut}, "-=1.5");
  tl.fromTo(bgBottom, 1.7, {y: "100%"}, {y: "0%",ease: Power2.easeInOut}, "-=1.5");


  // FIXED MENU
  const toFixed = document.querySelector("header .fixed-menu");
  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      toFixed.classList.add("on");
      // opacity
      toTop.classList.add("on");
    } else {
      toFixed.classList.remove("on");
      toTop.classList.remove("on");
    }
  });

  $(toTop).click(function () {
    if ($("html, body").is(":animated")) {
      return false;
    }

    n = 0;
    $("html, body").animate({
      scrollTop: $("#section" + (n + 1)).offset().top
    });
  });


  // MOUSEWHEEL
  var n = 0;
  $("html, body").mousewheel(function (e, delta) {
    if ($("html, body").is(":animated")) {
      return false;
    }
    if (delta > 0) {
      if (n > 0) {
        n--;
      }
    } else {
      if (n < 4) {
        n++;
      }
    }
    $("html, body").animate({
      scrollTop: $("#section" + (n + 1)).offset().top
    }, 800, function () {
      $(".fixed-menu > .menu li a").removeClass("on");
      $(".fixed-menu > .menu li a").eq(n).addClass("on");
    });
  });

  // MENU CLICK
  $(".menu li a").click(function (e) {
    e.preventDefault();
    n = $(this).parent().index();
    $("html, body").animate({
      scrollTop: $("#section" + (n + 1)).offset().top
    }, 800);
    $(".fixed-menu > .menu li a").removeClass("on");
    $(".fixed-menu > .menu li a").eq(n).addClass("on");
  });

  // PROFILE CLICK
  var promotionEl = document.querySelector(".box2 > .swiper-container");
  var promotionToggleBtn = document.querySelector(".togglebtn");
  var isHidePromotion = false;

  promotionToggleBtn.addEventListener("click", function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
      //숨김 처리
      promotionEl.classList.add("hide");
    } else {
      //보임 처리
      promotionEl.classList.remove("hide");
    }
  });

  // PROFILE PROGRESS
  $(function () {
    $('progress').each(function () {
      var max = $(this).val();
      $(this).val(0).animate({
        value: max
      }, {
        duration: 8000,
        easing: 'easeOutCirc'
      });
    });
  });

  // SWIPER
  // INTRO
  new Swiper(".inner .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true
  });
  // PROFILE
  new Swiper(".box2 .swiper-container", {
    slidesPerView: 1, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬아이드가 가운데 보이기
    loop: true, //반복 재생
    autoplay: { //자동 재생
      delay: 5000
    },
    navigation: {
      prevEl: ".box2 .swiper-prev",
      nextEl: ".box2 .swiper-next"
    }
  });
  // WORK
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

  // SCROLLMAGIC
  const spyEls = document.querySelectorAll("section.scroll-spy");
  spyEls.forEach(function (spyEl) {
    new ScrollMagic
      .Scene({ //보여질 부분
        triggerElement: spyEl, //선택 요소
        triggerHook: 0.5 // 뷰포트에서 걸려지는 위치 (위에서 부터 0~1)
      })
      .setClassToggle(spyEl, "show") //show라는 클라스 생성
      .addTo(new ScrollMagic.Controller()); //동작 가능하게 하는 메서드
  });

  // DATE
  const thisYear = document.querySelector(".this-year");
  thisYear.textContent = new Date().getFullYear();

});
