let lastScrollPosition = 0;

let headline = document.querySelector('.headline')
let header = document.querySelector('.header')
let page = document.querySelector('.page')
let an = headline.cloneNode(true)

document.addEventListener('scroll', () => {
  lastScrollPosition = window.scrollY;

  if (lastScrollPosition >= 450) {

    page.insertBefore(an, page.firstChild)
    an.classList.add('headline-scroll-active')


  } else {

    an.remove();
    an.classList.remove('headline-scroll-active')


  }
});



