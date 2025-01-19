// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = btnStyles;
console.log(backgroundColor, color, margin); // rgb(255, 99, 71), rgb(0, 0, 0) e 0px

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = ['HTML', 'JavaScript'];
console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo',
};

const { cor: bobCor } = cachorro;
console.log(bobCor); // Amarelo
