// Iterable
// São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros
const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/').then(({ headers }) => console.log(headers));

// for...of
// É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos
const carros = ['Honda', 'Ford', 'Chevrolet'];
const frase2 = 'O dia está lindo';

for (const carro of carros) {
  console.log(carro);
}

for (const letra of frase2) {
  console.log(letra);
}

// Spread e for...of
// Com o for loop podemos manipular cada um dos elementos do objeto iterável
const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
  btn.style.background = 'blue';
}

console.log(...buttons);

// Apenas Iteráveis
// O for...of não irá funcionar em um objeto comum que não seja iterável
const carro = {
  marca: 'Honda',
  ano: 2018,
};

// for (const propriedade of carro) {
//   console.log(propriedade); // Erro, não é Iterável
// }

// for...in
// Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto
const carro2 = {
  marca: 'Honda',
  ano: 2018,
};

for (const key in carro2) {
  console.log(key, carro[key]);
}

// Arrays e for...in
// Uma Array é um objeto, porém a chave de cada valor é igual ao seu index
const paises = ['Brasil', 'Noruega', 'Dinamarca'];

for (const index in paises) {
  console.log(index);
}

for (const index in paises) {
  console.log(paises[index]);
}

// Chave e Valor
// Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis
const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}

// Do / While
// Outro tipo de loop é o Do / While. Não é muito utilizado
let i = 0;
do {
  console.log(i++);
} while (i <= 5);
