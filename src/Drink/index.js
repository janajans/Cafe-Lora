import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = (props) => {
  let layersHtml = '';
  for (let i = 0; i < props.layers.length; i += 1) {
    layersHtml += Layer(props.layers[i]);
  }
  const element = document.createElement('div');
  element.classList.add = 'drink';
  element.innerHTML = `
  <div class="drink__product">
  <div class="drink__cup"><img src="/assets/cups/${props.id}.png" /></div>
  <div class="drink__info">
    <h3>${props.name}</h3>
    ${layersHtml}
</div>
<div class="drink__controls"><button class="order-btn">Objednat</button></div>
</div>`;
  // dávala jsem document.querySelector, musí být element.querySelector! = vybírat ho z elementu, ne z dokumentu
  const orderBtnElm = element.querySelector('.order-btn');
  const drinkCupElm = element.querySelector('.drink__cup');
  orderBtnElm.addEventListener('click', () => {
    if (props.ordered) {
      drinkCupElm.classList.add('drink__cup--selected');
      orderBtnElm.textContent = 'Zrušit';
      props.ordered = false;
    } else {
      drinkCupElm.classList.remove('drink__cup--selected');
      orderBtnElm.textContent = 'Objednat';
      props.ordered = true;
    }
  });
  return element;
};

// Zprovozněte tlačítko pro objednávání tak, aby veškerý kód byl součástí komponenty Drink --> zbavit se globální proměnné ordered, ke stejnému účelu využít vlastnost ordered, která je obsažena v každém objektu nápoje. Tak zaručíme, že každý nápoj bude mít svoji vlastní informaci o tom, zde je objednaný či nikoliv.
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
