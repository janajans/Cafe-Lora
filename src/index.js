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

// Podívejte se do index.html na strukturu jednotlivých layers. Komponenta nechť vrací řetězec obsahující výsledné HTML pro jednu vrstvu. V index.html si jednotlivé ingredience pro capuccino (divy .layer) zakomentujte nebo smažte.
// Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři dané ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.
// Skvělá práce! Teď si komponentu Layer přesuneme do samostatné složky. Ve vašem projektu vytvořte pro vaši komponentu separátní složku s názvem Layer. V této složce bude index.js a style.css V souboru index.js bude JavaScriptový kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním index.js celého projektu. Vyzkoušejte, že váš projekt funguje.
// Z hlavního souboru style.css přesuňte do CSS styly, které se týkají komponenty Layer do našeho nového style.css ve složce Layer. Nezapomeňte váš CSS soubor správně importovat do index.js aby jej Webpack zahrnul do výsledného sestavení.
// Jakmile váš projekt funguje, commitněte váš kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
