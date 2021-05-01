import './style.css';

// ------ ZPROVOZNĚNÍ NAVIGACE ------- na úzkých displejích po kliknutí na hamburger ikonku
// V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač prvku nav odebere nebo přidá třídu nav-closed. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
const navBar = document.querySelector('nav');
const navElm = document.querySelector('#nav-btn');
navElm.addEventListener('click', () => {
  navBar.classList.toggle('nav-closed');
});

// Navigaci budeme chtít schovat i po přesunutí na nějakou sekci. Připojte tedy posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.
const hide = document.querySelectorAll('a');
for (let i = 0; i < hide.length; i += 1) {
  hide[i].addEventListener('click', () => {
    navBar.classList.toggle('nav-closed');
  });
}
