$(document).ready(function() {
    $('.js-header__burger').click(function(event) {
        $('.js-header-mobile').toggleClass('active');
    });
    $('.js-header-mobile__exit').click(function(event) {
        $('.js-header-mobile').removeClass('active');
    });

    
//////////////////////////////////////////////////////////////////

    if ($('.js-partners-item-info').length > 0) {
        let swiperArray = [];
        $( ".js-partners-item-info" ).each(function( index, element ) {
          const $this = $(this); 
          $this.addClass('instance-' + index);
          $this.parent().find('.partners-item-info__btn-up').addClass("next-" + index);
          $this.parent().find('.partners-item-info__btn-down').addClass("prev-" + index);

          swiperArray[index] = new Swiper( '.instance-' + index, {
          // Optional parameters
          direction: 'vertical',
          loop: true,
        
          // Navigation arrows
          navigation: {
            nextEl: '.next-' + index,
            prevEl: '.prev-' + index,
          },
          
          slidesPerView: 1,

          spaceBetween: 30,

          mousewheel: {
            sensitivity: 1,
            eventsTag: '.partners-item-info__slide',
          } 
        });
      });   
    }


if ($('.js-directions-swiper').length > 0) {
  let directionsSwiperArray = [];
  $( ".js-directions-swiper" ).each(function( index, element ) {
    $this = $(this);
    $this.addClass('directions-instance-' + index);
    $this.find('.directions__logo-open').addClass("directions-swiper-next-" + index);
    $this.find('.directions__logo-close').addClass("directions-swiper-prev-" + index);

    directionsSwiperArray[index] = new Swiper('.directions-instance-' + index, {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: ".directions-swiper-next-" + index,
        prevEl: ".directions-swiper-prev-" + index,
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      slidesPerView: 1,

      effect:'flip',
      
      flipEffect: {
        slideShadows: true,
        limitRotation: true,
      },
    });
  }); 
}
});

/*let arr = [];
const stagesEl = document.querySelectorAll('.header__menu-item');
for(let el of stagesEl) {
  arr.push(el);
}
let user = arr.find(item => item.innerText == "О программе")
console.log(user.innerText);

let us = item => item + 1;
console.log(us(3));*/
/*const menuItem = document.querySelectorAll('.menu__list .menu__item');
let positionElem = menuItem[1].getBoundingClientRect();
menuItem[1].addEventListener("mousedown", function (event) {
  menuItem[1].addEventListener("mousemove", function (event) {
    menuItem[1].style.transform = `translateX(${event.clientX - positionElem.x - 50}px)`;
  });
});


const stagesEllipse = document.querySelector('.stages__ellipse');
let positionElemTwo = stagesEllipse.getBoundingClientRect();
stagesEllipse.addEventListener("mousedown", function (event) {
  stagesEllipse.addEventListener("mousemove", function (event) {
    stagesEllipse.style.transform = `translateX(${event.clientX - positionElemTwo.x - 20}px)`;
  });
});

const elemObj = document.querySelectorAll('.header__menu-item a');*/

/*const elem = document.querySelector('.input form');
const elemInput = document.querySelector('.input form input');
const elemTextEl = document.querySelector('.inpit__text span');
let elemText = elemTextEl.getAttribute('maxlenght');
console.log(elemText);

if (elemInput.addEventListener('keyup', function(event) {
  let textResult = elemText - elemInput.value.length;
  elemTextEl.textContent = textResult;
}));*/
