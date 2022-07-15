// header icons scropts
let searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form');
let contactInfo = document.querySelector('.contact-info');
let navbar = document.querySelector('.nav');

document.querySelector('#bars').onclick = () =>{
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
  contactInfo.classList.remove('active');
  searchForm.classList.remove('active');

}

document.querySelector('.fa-search').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#times-btn').onclick = () =>{
    contactInfo.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove();
    loginForm.classList.remove();
    contactInfo.classList.remove();
}

//Home slider

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //lightGallery script
  lightGallery(document.querySelector('.projects .box-container'));

  //reviews slider
  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
  });

  //blog slider
  var swiper = new Swiper(".blogs-slider", {
    slidesPerView: 3,
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
  });

  //logo slider
  var swiper = new Swiper(".logo-slider", {
    slidesPerView: 5,
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
      375: {
        slidesPerView: 2,
      },
      425: {
        slidesPerView: 2,
      },
      540: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 5,
      },
   },
  });

 //Toggle Nav bar

//  $(document).ready(function(){
//   $(".fa-bars").click(function(){
//     $(".nav").fadeToggle();
//   });
// });