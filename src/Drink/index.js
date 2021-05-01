import { Layer } from '../Layer/index.js';
import './style.css';
// V index.js vytvořte komponentu Drink, která očekává props v následujícím tvaru:

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
  return element;
};
