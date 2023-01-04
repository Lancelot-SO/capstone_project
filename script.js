const menubtn = document.querySelector('.humburger');
const mobilemenu = document.querySelector('.mobile-nav');

menubtn.addEventListener('click', () => {
  menubtn.classList.toggle('is-active');
  mobilemenu.classList.toggle('is-active');
});

const guestData = [{
  imageSrc: './images/10.jpeg',
  imageDescription: 'Felix Sowah',
  guestTitle: 'Felix Sowah',
  profession: 'CEO of Komfo Anokye Teaching Hospital',
  quotes: '“Felix has been leading open-source projects at the Mozilla Foundation such as the open source movement.',
},
{
  imageSrc: './images/9.jpeg',
  imageDescription: 'Ignicious Sowah',
  guestTitle: 'Ignicious Sowah',
  profession: 'CEO of Despite Group Of Companies',
  quotes: 'Leading open-source projects at the Mozilla Foundation such as the open source movement.',
},
{
  imageSrc: './images/7.jpeg',
  imageDescription: 'Lancelot Hans',
  guestTitle: 'Lancelot Hans',
  profession: 'CEO of World Bank',
  quotes: '“Networking and good cooperation across national borders are what matter - especially in the field of global health.',
},
{
  imageSrc: './images/8.jpeg',
  imageDescription: 'Mathias Bassaw',
  guestTitle: 'Mathias Bassaw',
  profession: 'CEO U&I Technology and Services',
  quotes: 'These are times of deep and shared responsibility.',
},
{
  imageSrc: './images/2.jpeg',
  imageDescription: 'Emmanuel Baidoo',
  guestTitle: 'Emmanuel Baidoo',
  profession: 'Manager of World Trade Center',
  quotes: 'Networking and good cooperation across national borders are what matter - especially in the field of global health.',
},
{
  imageSrc: './images/6.jpeg',
  imageDescription: 'Victoria Olamide',
  guestTitle: 'Victoria Olamide',
  profession: 'General Manager World Health Organization',
  quotes: 'Victoria has been leading open-source projects at the Mozilla Foundation such as the open source movement.',
},
];

const questElement = document.querySelector('.speaker');
for (let i = 0; i < guestData.length; i += 1) {
  questElement.innerHTML += `
  <div class="persons">
  <img src="${guestData[i].imageSrc}" alt="${guestData[i].imageDescription}" />
  <div class="right-desc">
      <h3>${guestData[i].guestTitle}</h3>
      <h4>${guestData[i].profession}</h4>
      <p>${guestData[i].quotes}
      </p>
  </div>
</div>`;
}