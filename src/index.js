import './style.css';
import { Layer } from './Layer/index.js';
import './Layer/style.css';

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

// --------OBJEDNÁVÁNÍ-------
// Na tlačíko se třídou order-btn pověste posluchač, při kliknutí změní nápis na tlačítku na Zrušit. Zároveň přidá na prvek se třídou drink__cup třídu drink__cup--selected.
// Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a změny na prvku .drink__cup i na tlačítku .order-btn se vrátily (odebrala se třída drink__cup--selected a vrátil se text tlačítka na Objednat). Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.
let ordered = true;
const orderBtnElm = document.querySelector('.order-btn');
const drinkCupElm = document.querySelector('.drink__cup');
orderBtnElm.addEventListener('click', () => {
  if (ordered) {
    drinkCupElm.classList.add('drink__cup--selected');
    orderBtnElm.textContent = 'Zrušit';
    ordered = false;
  } else {
    drinkCupElm.classList.remove('drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = true;
  }
});

// -----INGREDIENCE JAKO KOMPONENTY--------- přepsat kód tak, aby ingredience (vrstva) byla komponenta
// V hlavním souboru index.js vytvořte komponentu Layer, která očekává props v následujícím tvaru.
// {
//   color: '#feeeca',
//   label: 'mléčná pěna',
// }
// Komponenta nechť vrací řetězec obsahující výsledné HTML pro jednu vrstvu. V index.html si jednotlivé ingredience pro capuccino (divy .layer) zakomentujte nebo smažte.
// Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři dané ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.

const drinkInfoElm = document.querySelector('.drink__info');
drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
drinkInfoElm.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });
drinkInfoElm.innerHTML += Layer({ color: '#613916', label: 'espresso' });

// --------SEZNAM INGREDIENCÍ------ (zobrazit podle dat uložených v poli)
// Uvnitř hlavního index.js si vytvořte následujicí globální proměnnou.
// const layers = [
//   {
//     color: '#feeeca',
//     label: 'mléčná pěna',
//   },
//   {
//     color: '#fed7b0',
//     label: 'teplé mléko',
//   },
//   {
//     color: '#613916',
//     label: 'espresso',
//   },
// ];
// V současné chvíli používáme komponentu Layer tak, že 3x opakujeme skoro stejný kód. Zobrazte jednotlivé ingredience pomocí komponenty Layer tak, že použijte cyklus for nebo forEach a jako props použijete položky pole layers.
