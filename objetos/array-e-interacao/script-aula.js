// A função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original)
const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase(), index);
});

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toLowerCase(), array);
});

// Arrow function
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function (item) {
  item.classList.add('ativa');
});

// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original
const carros2 = ['Ford', 'Fiat', 'Honda'];
carros2.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

console.log(carros2); // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

// Funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração
const carros3 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros3.map(item => {
  return 'Carro ' + item;
});

console.log(carros3); // ['Ford', 'Fiat', 'Honda']
console.log(newCarros); // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];

// Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined
const carros4 = ['Ford', 'Fiat', 'Honda'];
const newCarros2 = carros4.map(item => {
  const novoValor = 'Carro ' + item;
});

console.log(newCarros2); // [undefined, undefined, undefined];

// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>
const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3);

console.log(numerosX3); // [6, 12, 18, 24, 30, 36, 42];

// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto
const aulas = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas); // [15, 10, 20, 25];

const puxarNomes = aula => aula.nome; // Arrow function
const nomesAulas = aulas.map(puxarNomes);
console.log(nomesAulas); // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// Executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior
const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
  return acumulador + atual;
});
console.log(total1); // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
console.log(total2); // 165

// Puxando o maior valor usando Reduce
const numeros2 = [10, 25, 60, 5, 35, 13];

const maiorValor = numeros2.reduce((anterior, atual) => {
  // return anterior < atual ? atual : anterior;
  if (anterior > atual) {
    return anterior;
  } else {
    return atual;
  }
});

console.log(maiorValor); // 60

// Podemos retornar outros valores com Reduce também
const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const listaAulas = aulas3.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});

console.log(listaAulas);

// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita
const frutas = ['Banana', 'Pera', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

console.log(frutasRight); // Uva Pera Banana
console.log(frutasLeft); // Banana Pera Uva

// Se pelo menos um return da iteração for truthy, ele retorna true
const frutas2 = ['Banana', 'Pera', 'Uva'];
const temUva = frutas2.some(item => {
  return item === 'Uva';
});

console.log(temUva); // true

// Se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false
const frutas3 = ['Banana', 'Pera', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas3.every(fruta => {
  return fruta; // false
});

const numeros4 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros4.every(x => x > 3); // true

// Retorna o valor atual da primeira iteração que retornar um valor truthy, para no primeiro truthy que der
const numeros5 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros5.find(x => x > 45);

console.log(buscaMaior45); // 88

// Ao invés de retornar o valor, retorna o index deste valor na array, para no primeiro truthy que der
const frutas4 = ['Banana', 'Pera', 'Uva', 'Maçã'];
const buscaUva = frutas4.findIndex(fruta => {
  return fruta === 'Uva';
});

console.log(buscaUva); // 2

// Retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy
const frutas5 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas5.filter(fruta => {
  return fruta;
});

console.log(arrayLimpa); // ['Banana', 'Uva', 'Maçã']

const numeros6 = [6, 43, 22, 88, 101, 29];
const buscaMaior46 = numeros6.filter(x => x > 46);

console.log(buscaMaior46); // [88, 101]

// Filter() em objeto
const aulas4 = [
  {
    nome: 'HTML 1',
    min: 15,
  },
  {
    nome: 'HTML 2',
    min: 10,
  },
  {
    nome: 'CSS 1',
    min: 20,
  },
  {
    nome: 'JS 1',
    min: 25,
  },
];

const aulasMaioresQue15 = aulas4.filter(aula => {
  return aula.min > 15;
});

console.log(aulasMaioresQue15); // [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
