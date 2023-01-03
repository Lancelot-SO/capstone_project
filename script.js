const menubtn = document.querySelector('.humburger');
const mobilemenu = document.querySelector('.mobile-nav');

menubtn.addEventListener('click', () => {
  menubtn.classList.toggle('is-active');
  mobilemenu.classList.toggle('is-active');
});