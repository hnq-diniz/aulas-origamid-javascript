// Pegando Height e Width
const listaAnimais = document.querySelector('.animais-lista');

const listaHeight = listaAnimais.clientHeight; // Width + padding
const listaWidth = listaAnimais.clientWidth; // Width + padding
const listaOffsetHeight = listaAnimais.offsetHeight; // Height + padding + border
const listaScrollHeight = listaAnimais.scrollHeight; // Height total, mesmo dentro de scroll

console.log(listaHeight, listaWidth, listaOffsetHeight, listaScrollHeight);

// Pegando a distancia do objeto ate os lados
const listaTop = listaAnimais.offsetTop; // Distância entre o topo do elemento e o topo da página
const listaLeft = listaAnimais.offsetLeft; // Distância entre o canto esquerdo do elemento e o canto esquerdo da página

console.log(listaTop, listaLeft);

// Para retornar um objeto com varias informações de posicionamento e tamanho
const rect = listaAnimais.getBoundingClientRect();

console.log(rect);

// Pegando a medida da tela
console.log(window.innerWidth); // Width do janela
console.log(window.outerWidth); // Soma dev tools também
console.log(window.innerHeight); // Height do janela
console.log(window.outerHeight); // Soma a barra de endereço

console.log(window.scrollY); // Distância total do scroll vertical
console.log(window.scrollX); // Distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log('Tela menor que 600px');
} // Método não muito utilizado

// Método para mudar media-querie como no css
const small = window.matchMedia('(max-width: 600px)'); // Matches retorna true ou false

if (small.matches) {
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}
