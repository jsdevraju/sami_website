// dark mode toogle
$(".theme-switch").on("click", () => {
  $("body").toggleClass("light-theme");
});

// fix navbar
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// slick slider
$(".your-class").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: {
    delay: 3000,
  },
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

// filter images
$(document).ready(function () {
  $(".buttons").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".image").show(400);
    } else {
      $(".image")
        .not("." + filter)
        .hide(200);
      $(".image")
        .filter("." + filter)
        .show(400);
    }
  });

  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// back to top
var $button = $.backToTop({
  // background color
  backgroundColor: "#151931",

  // text color
  color: "#FFFFFF",

  // container element
  container: this._body,

  // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
  effect: "spin",

  // enable the back to top button
  enabled: true,

  // width/height of the back to top button
  height: 70,
  width: 70,

  // icon
  icon: "fas fa-chevron-up",

  // margins
  marginX: 20,
  marginY: 20,

  // bottom/top left/right
  position: "bottom right",

  // trigger position
  pxToTrigger: 600,

  // scroll animation,

  // or 'fawesome'
  theme: "default",

  // z-index
  zIndex: 999,
});

// change active menu
const menuLi = document.querySelectorAll(".nav-link");

function setMenuActive() {
  menuLi.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

// scroll spy

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  menuLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
      console.log("hel");
    }
  });
});

// Preloader
$(function ($) {
  $(".js-preloader").preloadinator({
    minTime: 2000,
  });
});
