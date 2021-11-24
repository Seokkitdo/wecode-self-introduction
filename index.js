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
const checkbox = document.querySelector('#checkbox');
const header = document.querySelector('.header__wrap');
const labeldark = document.querySelectorAll('.label_dark');
const p = document.querySelectorAll('a > p');
const footer = document.querySelector('footer');

console.log(at);

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  header.classList.toggle('dark');
  labeldark.forEach((item) => {
    item.classList.toggle('dark');
  });
  p.forEach((item) => {
    item.classList.toggle('dark');
  });
  footer.classList.toggle('dark');
});

about.addEventListener('click', (e) => {
  console.log(e);
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
