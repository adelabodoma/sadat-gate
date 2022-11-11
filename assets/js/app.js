jQuery(document).ready(function ($) {
  const sliderNx = document.querySelector(".slider .swiper-button-next");
  const sliderPr = document.querySelector(".slider .swiper-button-prev");
  const sliderPagination = document.querySelector(".post-slider .swiper-pagination");

  new Swiper(".header__swiper__slides", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 5000,
    },
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.header__swiper .header__swiper__container .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.header__swiper__navigation .swiper-button-next',
      prevEl: '.header__swiper__navigation .swiper-button-prev',
    },
  });


  // REMOVE SPINNER
  setTimeout(() => {
    $(".loader").fadeOut("slow");
  }, 1000);

  $('#openMenu').on('click', function (e){
    e.preventDefault()
    $('.header__menu').css('top', '0')
  })


  $('#closeMenu').on('click', function (e){
    e.preventDefault()
    $('.header__menu').css('top', ' -100%')
  })



  const topButton = document.getElementById("gotToTopButton");
  const headerNav = document.querySelector(".header__mobile-nav");
  topButton.addEventListener("click", topFunction);

  window.onscroll = function () {
    scrollFunction(topButton, headerNav);
  };


  // WOW JS
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )

  setTimeout(()=>{
    wow.init();
  }, 1000)
});

function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }

  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    $(".event-details__container").css("bottom", "50px");
  } else {
    $(".event-details__container").css("bottom", "-250px");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

