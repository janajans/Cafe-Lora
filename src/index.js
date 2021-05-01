import './style.css';
import { Drink } from './Drink/index.js';

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
// let ordered = true;
// const orderBtnElm = document.querySelector('.order-btn');
// const drinkCupElm = document.querySelector('.drink__cup');
// orderBtnElm.addEventListener('click', () => {
//   if (ordered) {
//     drinkCupElm.classList.add('drink__cup--selected');
//     orderBtnElm.textContent = 'Zrušit';
//     ordered = false;
//   } else {
//     drinkCupElm.classList.remove('drink__cup--selected');
//     orderBtnElm.textContent = 'Objednat';
//     ordered = true;
//   }
// });

// -----5. INGREDIENCE JAKO KOMPONENTY--------- přepsat kód tak, aby ingredience (vrstva) byla komponenta
// V hlavním souboru index.js vytvořte komponentu Layer, která očekává props v následujícím tvaru.
// {
//   color: '#feeeca',
//   label: 'mléčná pěna',
// }
// Komponenta nechť vrací řetězec obsahující výsledné HTML pro jednu vrstvu. V index.html si jednotlivé ingredience pro capuccino (divy .layer) zakomentujte nebo smažte.
// Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři dané ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.

// const drinkInfoElm = document.querySelector('.drink__info');
// drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
// drinkInfoElm.innerHTML += Layer({ color: '#fed7b0', label: 'teplé mléko' });
// drinkInfoElm.innerHTML += Layer({ color: '#613916', label: 'espresso' });

// --------6. SEZNAM INGREDIENCÍ------ (zobrazit podle dat uložených v poli)
// Uvnitř hlavního index.js si vytvořte následujicí globální proměnnou.
const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];
// V současné chvíli používáme komponentu Layer tak, že 3x opakujeme skoro stejný kód. Zobrazte jednotlivé ingredience pomocí komponenty Layer tak, že použijte cyklus for nebo forEach a jako props použijete položky pole layers.
// for (let i = 0; i < layers.length; i += 1) {
//   drinkInfoElm.innerHTML += Layer(layers[i]);
// }

// ------7. NÁPOJ JAKO KOMPONENTA------ každý nápoj bude jedna komponenta
// Podívejte se do index.html nebo do devtools na strukturu jednoho nápoje. Tento obsah si v index.html zakomentujte. Zakomentujte si také přidávání ingrediencí capuccina pomocí komponenty Layer v hlavním index.js.

// STRUKTURA JEDNOHO NÁPOJE V HTML:
/* <div class="drink">
<div class="drink__product">
  <div class="drink__cup">
    <img src="/assets/cups/cappuccino.png" />
  </div>
  <div class="drink__info">
    <h3>Cappuccino</h3>
    <!-- <div class="layer">
      <div
        class="layer__color"
        style="background-color: #feeeca"
      ></div>
      <div class="layer__label">mléčná pěna</div>
    </div>
    <div class="layer">
      <div
        class="layer__color"
        style="background-color: #fed7b0"
      ></div>
      <div class="layer__label">teplé mléko</div>
    </div>

    <div class="layer">
      <div
        class="layer__color"
        style="background-color: #613916"
      ></div>
      <div class="layer__label">espresso</div>
    </div> -->
  </div>
</div>
<div class="drink__controls">
  <button class="order-btn">Objednat</button>
</div>
</div>  */

// vytvořte pro komponentu složku Drink s index.js a style.css (...)
// V index.js vytvořte komponentu Drink, která očekává props v následujícím tvaru:
const drink1 = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};
// Komponentu napište tak, aby vracela DOM element.
const drinksListELm = document.querySelector('.drinks-list');
drinksListELm.appendChild(Drink(drink1));

// Uvnitř vaší komponenty bude potřeba použít komponentu Layer. Dejte si pozor, abyse ji správně importovali.
// KOMPONENTA LAYER
// export const Layer = (props) => {
//   return `
// <div class="layer">
//   <div class="layer__color" style="background-color: ${props.color}"></div>
//   <div class="layer__label">${props.label}</div>
// </div>`;
// };
// Komponentu Layer v naší komponentě Drink použijte pomocí innerHTML, stejně jako jsme to dělali v hlavním index.js.

// Název obrázku, který se má zobrazit, můžete vzít z vlastnosti id. Je tak pouze potřeba sestavit správnou cestu pro atribut src.

// Tlačítko zatím pouze staticky zobrazte, fuknčnost mu přidáme v dalším kroku.

// Zobrazte na stránce nápoj dle dat uvedených výše. V hlavním index.js na správný prvek použijte funkci appendChild, neboť naše komponenta vrací DOM element. Měli byste vidět teď jeden nápoj, ‘Romano’.

// -----8. DYNAMICKÁ KOMPONENTA NÁPOJE
// Zprovozněte tlačítko pro objednávání tak, aby veškerý kód byl součástí komponenty Drink. V tomto případě se budeme muset zbavit globální proměnné ordered. Ke stejnému účelu však můžeme využít vlastnost ordered, která je obsažena v každém objektu nápoje. Tak zaručíme, že každý nápoj bude mít svoji vlastní informaci o tom, zde je objednaný či nikoliv.
// Vyzkoušejte si na stránce, že objednávání funguje.
