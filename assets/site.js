const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(expanded));
    nav.classList.toggle('open', expanded);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.focus();
    }
  });
}

const castGrid = document.querySelector('.cast-grid');
if (castGrid) {
  const isTurkish = document.documentElement.lang === 'tr';
  const namesInBillingOrder = [
    'Farah Zeynep Abdullah',
    'Barış Arduç',
    'Mehmet Yılmaz Ak',
    'Özge Özacar',
    'Tuba Büyüküstün',
    'Tamer Levent',
    'Sergen Özdemir',
    'Erol Afşin',
    'Selin Çuhadaroğlu',
    'İlker Kızmaz',
    'Meral Çetinkaya',
    'Erdal Küçükkömürcü',
    'Selçuk Borak',
    'Burcu Gül Kazbek',
    'İsmail Tunçbilek',
  ];
  const members = new Map([...castGrid.querySelectorAll('.cast-member')].map((member) => [member.querySelector('h3')?.textContent, member]));

  if (!members.has('Tuba Büyüküstün')) {
    const member = document.createElement('article');
    const name = document.createElement('h3');
    const role = document.createElement('p');
    member.className = 'cast-member';
    name.textContent = 'Tuba Büyüküstün';
    role.textContent = isTurkish ? 'Konuk oyuncu' : 'Special guest appearance';
    member.append(name, role);
    members.set(name.textContent, member);
  }

  namesInBillingOrder.forEach((name) => {
    const member = members.get(name);
    if (member) castGrid.append(member);
  });

  const starring = document.querySelector('.simple-starring');
  if (starring) {
    starring.innerHTML = 'Farah Zeynep Abdullah · Barış Arduç<br>Mehmet Yılmaz Ak · Özge Özacar · Tuba Büyüküstün · Tamer Levent';
  }
}
