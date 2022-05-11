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
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light themes class
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal(`.home-data`)
sr.reveal(`.home-handle`, {delay: 700})
sr.reveal(`.home-social, .home-scroll`, {delay: 900, origin: 'bottom'})