const aboutLocation = document.querySelector(
  '.article__infos__about',
).offsetTop;

const interestLocation = document.querySelector(
  '.article__infos__interest',
).offsetTop;

const linksLocation = document.querySelector(
  '.article__links__title',
).offsetTop;

const headerHeight = document.querySelector('.header__wrap').offsetHeight;
const about = document.querySelector('.header__center-menu');

about.addEventListener('click', (e) => {
  console.log(typeof e.target.innerText);
  if (e.target.innerText === 'about') {
    window.scrollTo({ top: aboutLocation - headerHeight, behavior: 'smooth' });
  } else if (e.target.innerText === 'Interest') {
    window.scrollTo({
      top: interestLocation - headerHeight,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo({ top: linksLocation - headerHeight, behavior: 'smooth' });
  }
});
