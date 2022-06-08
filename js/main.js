function smoothScroll(target) {
  const headerHeight = $("nav").outerHeight() + 77;
  $("html,body").animate(
    { "scrollTop": target.offset().top - headerHeight },
    1000
  );
}

$("nav ul li a").on("click", function (event) {
  if (this.getAttribute("href").charAt(0) == "#") {
    event.preventDefault();
    smoothScroll($(this.hash));
  } else {
    //just let link work
  }
});

$(window).scroll(function () {
  let scrollPos = $(this).scrollTop();
  let scrollDistance = scrollPos + 130;

  $("nav ul li a[href^='#']").each(function () {
    let currLink = $(this);
    let refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollDistance && refElement.position().top + refElement.height() > scrollDistance) {
      $("nav ul li a").removeClass("active");
      currLink.addClass("active");
    }
    else {
      currLink.removeClass("active");
    }
  });
});

$('li.question').on('click', function () {
  // don't move if is open //
  if ($(this).next().hasClass("openedFaQ")) {
    $(this).removeClass('openedQuestion');
    $(this).next().slideUp().removeClass("openedFaQ");
  }
  else {
    // plus, minus effect //
    $('li.question').removeClass('openedQuestion');
    $(this).addClass('openedQuestion');
    // remove anything already open //
    $('li.answer').slideUp().removeClass("openedFaQ");
    // add open state to the correct item //
    $(this).next().slideToggle(500).addClass('openedFaQ').siblings('li.answer').slideUp();
  }
});


$('.popup-slick').slick({
  arrows: false,
  dots: true
});

$('.popup-slick2').slick({
  arrows: false,
  dots: true,
});
$('.popup-slick2').slick('slickGoTo', 2);



$('.product-slider').slick({
  arrows: true,
  dots: false,
  swipe: false,
  asNavFor: '.slider-nav',
  responsive:[
    {
      breakpoint: 951,
      settings: {
        swipe: true,
      }
    },
    {
      breakpoint: 551,
      settings: {
        arrows: false,
        swipe: true,
      }
    }
  ]
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-slider',
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
});

$('.company-slider').slick({
  arrows: false,
  dots: false,
  swipe: false,
  asNavFor: '.company-nav'
});
$('.company-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.company-slider',
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});

$('.coment-slider').slick({
  arrows: true,
  dots: false
});

$('.popup-block4').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 401,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$('.portfolio-slider').slick({
  arrows: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1081,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
  ]
});

/* const openPopUp = document.getElementById('open_popup');
const closePopUp = document.getElementById('popup_close');
const popUp = document.getElementById('popup_about');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active')
}) */




$('.btn-popup-1').click(function () {
  $('.popup-1').fadeIn();
});

$('.popup_close').click(function () {
  $('.popup-1').fadeOut();
});

$(document).mouseup(function (e) {
  var popup = $('.popup_body');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.popup-1').fadeOut();
  }
});


$('.btn-popup-2').click(function () {
  $('.popup-2').fadeIn();
});

$('.popup_close').click(function () {
  $('.popup-2').fadeOut();
});

$(document).mouseup(function (e) {
  var popup = $('.popup_body');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.popup-2').fadeOut();
  }
});

Burger








/* $('.about_arrow').click(function () {
  $('.popup_about').fadeIn();
});

$('.popup_close').click(function () {
  $('.popup_about').fadeOut();
});

$(document).mouseup(function (e) {
  var popup = $('.popup_body');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.popup_about').fadeOut();
  }
}); */
















































