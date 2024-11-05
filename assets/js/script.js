const swiper = new Swiper('.heroSwiper', {
  // Optional parameters
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {

    delay: 2500,
    disableOnInteraction: false
  },

  loop: true
})

const swiper2 = new Swiper('.heroSwiper2', {
  // Optional parameters
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {

    delay: 10000,
    disableOnInteraction: false
  },

  loop: true
})

const swiper3 = new Swiper('.recommendedSwiper', {
  // Optional parameters
  spaceBetween: 20,
  slidesPerView: 4,
  centeredSlides: false,

  autoplay: {

    delay: 3000,
    disableOnInteraction: false
  },

  loop: true,
  breakpoints: {

    "@0.00": {

      slidesPerView: 1,
      spaceBetween: 10,
    },

    "@0.75": {

      slidesPerView: 2,
      spaceBetween: 10,
    },

    "@1.00": {

      slidesPerView: 3,
      spaceBetween: 20,
    },

    "@1.50": {

      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
})


const swiper4 = new Swiper('.BookOnSaleSwiper', {
  // Optional parameters
  spaceBetween: 20,
  slidesPerView: 4,
  centeredSlides: false,

  autoplay: {

    delay: 3000,
    disableOnInteraction: false
  },

  loop: true,
  breakpoints: {

    "@0.00": {

      slidesPerView: 1,
      spaceBetween: 10,
    },

    "@0.75": {

      slidesPerView: 2,
      spaceBetween: 10,
    },

    "@1.00": {

      slidesPerView: 4,
      spaceBetween: 20,
    },

    "@1.50": {

      slidesPerView: 5,
      spaceBetween: 20,
    },
  }
})


const swiper5 = new Swiper('.TestimonialsSwiper', {
  // Optional parameters
  spaceBetween: 20,
  slidesPerView: 4,
  centeredSlides: true,

  loop: true,
  breakpoints: {

    "@0.00": {

      slidesPerView: 1,
      spaceBetween: 10,
    },

    "@0.75": {

      slidesPerView: 1,
      spaceBetween: 10,
    },

    "@1.00": {

      slidesPerView: 3,
      spaceBetween: 10,
    },

    "@1.50": {

      slidesPerView: 3,
      spaceBetween: 10,
    },
  }
})


const menu = document.getElementById('menu')
const closeButton = document.getElementById('close_btn')
const menuButton = document.getElementById('menu_btn')
const menuLinks = document.querySelectorAll('.menu_container .menu_list li a')
const mainHeader = document.querySelector('header') 

var thresHold = 500

function close() {

  if (window.innerWidth <= 800) {

    menu.style.transform = 'translateX(-100%)'
  }
}

closeButton.addEventListener('click', close)

menuLinks.forEach((link) => {

  link.addEventListener('click', close)
})

menuButton.addEventListener('click', function() {

  menu.style.transform = 'translateX(0%)'
})

window.addEventListener('scroll', function() {

  if (window.scrollY > thresHold) {

    mainHeader.classList.add('fixed-header')

  } else {

    mainHeader.classList.remove('fixed-header')
  }

})


// Make Smoot Scroll in the Whole Website

// const sb = ScrollReveal({

//   duration: 1500,
//   delay: 400,
//   mobile: false,
//   origin: 'bottom',
//   distance: '60px'
// })

// sb.reveal('.nav_container, .features_container .col, .product_card, .featured_books, .books_grid .img_container, .content .client_group_container .img_container, .TestimonialsSwiper, .blog_card, .newsletter_inner, .footer_container .col, .view_more')
// sb.reveal('.hero_container .col:nth-child(1), .trending_container .col:nth-child(1), .new_launch_container .col:nth-child(1), .copyright_container .col:nth-child(1)', {origin:'left'})
// sb.reveal('.hero_container .col:nth-child(2), .trending_container .col:nth-child(2), .new_launch_container .col:nth-child(2), .copyright_container .col:nth-child(2)', {origin:'right'})
// sb.reveal('.title_container h4', {delay: 200, origin: 'left'})
// sb.reveal('.title_container h1', {delay: 500, origin: 'left'})
// sb.reveal('.title_container p', {delay: 800, origin: 'left'})