// Change background header
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Services modal
const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalClose = document.querySelectorAll('.services-modal-close')     
      
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})


// Mixitup filter portfolio
var mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card',
    },
    animation: {
        duration: 500
    }
});

// Link active work
const linkWork = document.querySelectorAll('.work-item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

// Swiper Testimonial
var swiperTestimonial = new Swiper(".testimonial-container", {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },        
      },
  });

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id');
        const currentPos = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if(!currentPos){
            return;
        }
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            currentPos.classList.add('active-link')
        }else{
            currentPos.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



// Light dark theme


// Scroll reveal animation