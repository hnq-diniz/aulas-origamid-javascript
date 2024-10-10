// dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com "data-"
// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000; // Adicionou um novo dataset
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

delete div.dataset.width; // remove o atributo
// DOMStringMap {cor: "azul", tempo: "1000"}

// -----------------------------------------------------------------//

// Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS
const divs = document.querySelectorAll('[data-anima]');
divs.forEach(div => {
  div.classList.add(div.dataset.anima);
});

// adiciona em cada div uma classe com o mesmo nome que o valor de data

// -----------------------------------------------------------------//

// A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada
// <div data-anima="left" data-tempo="1000">Div 1</div>
// <div class="anima-left tempo-1000">Div 2</div>

// -----------------------------------------------------------------//

// Por padrão o JavaScript não aceita - (traço) como carácter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula
const div1 = document.querySelector('[data-anima-scroll]');
div1.dataset;
// {animaScroll: 'left'}
div1.dataset.animaScroll; // left
div1.dataset.tempoTotal = 1000;
// Na div1 vira data-tempo-total="1000"

delete div1.dataset.animaScroll; // remove o atributo
