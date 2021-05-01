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
// V index.js vytvořte komponentu Drink, která očekává props v následujícím tvaru:
// const drink1 = {
//   id: 'romano',
//   name: 'Romano',
//   ordered: false,
//   layers: [
//     {
//       color: '#fbdf5b',
//       label: 'citrón',
//     },
//     {
//       color: '#613916',
//       label: 'espresso',
//     },
//   ],
// };

// const drinksListELm = document.querySelector('.drinks-list');
// drinksListELm.appendChild(Drink(drink1));

// -----8. DYNAMICKÁ KOMPONENTA NÁPOJE
// Zprovozněte tlačítko pro objednávání tak, aby veškerý kód byl součástí komponenty Drink. V tomto případě se budeme muset zbavit globální proměnné ordered. Ke stejnému účelu však můžeme využít vlastnost ordered, která je obsažena v každém objektu nápoje. Tak zaručíme, že každý nápoj bude mít svoji vlastní informaci o tom, zde je objednaný či nikoliv.

// ----9- SEZNAM NÁPOJŮ----- (= zobrazit vícero nápojů)
// globální proměnná:
// const drinks = [
//   {
//     id: 'cappuccino',
//     name: 'Cappuccino',
//     ordered: false,
//     layers: [
//       {
//         color: '#feeeca',
//         label: 'mléčná pěna',
//       },
//       {
//         color: '#fed7b0',
//         label: 'teplé mléko',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
//   {
//     id: 'romano',
//     name: 'Romano',
//     ordered: false,
//     layers: [
//       {
//         color: '#fbdf5b',
//         label: 'citrón',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
// ];
// Použijte cyklus for nebo forEach, projděte seznam nápojů a pomocí komponenty Drink zobrazte každý nápoj na stránce. Vyzkoušejte, že si každý nápoj můžete objednat nebo u něj zrušit objednávku.
// const drinksListELm = document.querySelector('.drinks-list');
// for (let i = 0; i < drinks.length; i += 1) {
//   drinksListELm.appendChild(Drink(drinks[i]));
// }

// ----10. BACKEND---- (ze kterého si stáhneme seznam všech nabízených nápojů)
// Seznam všech nápojů stáhnout z API pro Café Lóra na adrese: https://apps.kodim.cz/daweb/cafelora/api/drinks
// což je pole plné objektů v této podobě:
// {
//   "id": "espresso",
//   "name": "Espresso",
//   "ordered": false,
//   "layers": [
//   {
//   "color": "#613916",
//   "label": "espresso"
//   }
//   ]
//   },
// Prohlédněte si data, která tento endpoint vrací.
// Pomocí funkce fetch data stáhněte a zobrazte je na vaší stránce stejným způsobem, jako jste je zobrazovali doposud.
const drinksListELm = document.querySelector('.drinks-list');
const displayDrinks = (json) => {
  for (let i = 0; i < json.length; i += 1) {
    drinksListELm.appendChild(Drink(json[i]));
  }
};

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then(displayDrinks);
