(() => {
  const img = document.querySelector('.logo');

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      img.src = "./assets/logo-desktop.svg";
    } else {
      img.src = "./assets/logo-mobile.svg";
    }
  })

  const menu = document.querySelector('.icon-menu');
  const navigation = document.querySelector('.navigation');
  menu.addEventListener('click', () => {
    menu.classList.toggle('closed');
    navigation.classList.toggle('open');
    if (menu.classList.contains('closed')) {
      menu.src = "./assets/menu-buguer-close.svg";
      menu.alt = "Fechar Menu";
    } else {
      menu.src = "./assets/menu-buguer-open.svg";
      menu.alt = "Menu";
    }
  })
})()