// Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]('Ford');
dados[1][2].cor; // azul

// Toda array herda os métodos e propriedades do protótipo do construtor Array
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1]; // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati'; // Cria uma array com os espaços vazios até chegar no 10
carros.length; // 11

// Método utilizado para transformar array-like objects, em uma array
let li = document.querySelectorAll('li'); // NodeList
li = Array.from(li); // Array

const marcasCarros = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
};

const carrosArray = Array.from(marcasCarros);

console.log(carrosArray);

// Verifica se o valor passado é uma array e retorna um valor booleano
let lis = document.querySelectorAll('li'); // NodeList
Array.isArray(lis); // false

lis = Array.from(lis); // Transformou em array
Array.isArray(lis); // true

// Formas de criar uma array
Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

// Retorna o tamanho da array
const frutas = ['Banana', 'Pera', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6 (Retorna a quantidade de caracteres)
frutas[1].length; // 4
frutas[2].length; // 2

// Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original
const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos2.sort(); // Retorna em ordem alfabética
instrumentos2; // ['Baixo', 'Guitarra', Violão]

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort(); // Usa como base o primeiro caractere para colocar na ordem, se forem iguais ele pula pro segundo
idades; // [1, 12, 21, 32, 33, 43, 8]

const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Honda', 'Kia'); // 5 (Adiciona elementos no inicio da array e retorna o valor total da array)
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push('Ferrari'); // 6 (Adiciona elementos no final da array e retorna o valor total da array)
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros3.shift(); // 'Ford' (Retira o primeiro elemento da array e retorna ele)
carros3; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda' (Retira o ultimo elemento da array e retorna ele)
carros3; // ['Fiat', 'VW'];

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros4.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford']; (Inverte a ordem da array e retorna a ordem invertida)

// Adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens)
const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros5.splice(1, 0, 'Kia', 'Mustang'); // []
carros5; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros5.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros5; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

// A partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3); // ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1); // ['Item1', 'Item2', 'Item3', 'Item1']

// Preenche a array com o valor, do início até o fim.
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2); // Começa a partir item 2
// ['Item1', 'Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3); // Começa a partir do item 1 e vai até o 3
// ['Item1', 'Banana', 'Banana', 'Item4']

// Para concatenar a array com o valor passado
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

// Verifica se a array possui o valor e retorna true ou false
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false

// Verifica se a array possui o valor e retorna o index do primeiro valor na array
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2

// Retorna o index do último valor encontrado na array
linguagens.lastIndexOf('js'); // 5

// Junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens2.join(); // 'html,css,js,php,python'
linguagens2.join(' '); // 'html css js php python'
linguagens2.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2'); // ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1'); // <h1>Título Principal</h1>

// Retorna os itens da array começando pelo início e indo até o valor de final
const linguagens3 = ['html', 'css', 'js', 'php', 'python'];
linguagens3.slice(3); // ['php', 'python']
linguagens3.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens3.slice(); // Usamos o slice sem argumentos para clonar uma array
