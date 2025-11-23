const scrollBtn = document.getElementById('scroll-top');

const topFunction = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const scrollBtnDisplay = () => {
  const scrollY = window.scrollY;
  const footer = document.querySelector('footer');


  if (scrollY > window.innerHeight) {
    scrollBtn.classList.add('scroll-show');


    if (footer) {
      const footerRect = footer.getBoundingClientRect();

      if (footerRect.top < window.innerHeight) {
        const distanceFromBottomToFooterTop = window.innerHeight - footerRect.top;
        scrollBtn.style.bottom = (distanceFromBottomToFooterTop + 50) + 'px';
      } else {
        scrollBtn.style.bottom = '30px';
      }
    } else {
      scrollBtn.style.bottom = '30px';
    }
  } else {
    scrollBtn.classList.remove('scroll-show');
    scrollBtn.style.bottom = '30px';
  }
};

window.addEventListener('scroll', scrollBtnDisplay);
window.addEventListener('resize', scrollBtnDisplay);
scrollBtn.addEventListener('click', topFunction);