// Destructuring
// Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis
const carro = {
  marca: 'fiat',
  ano: 2018,
  portas: 4,
};

const { marca, ano, rodas } = carro;

console.log(marca); // Fiat
console.log(ano); // 2018
console.log(rodas); // undefined

// Destructuring Objects
// A desestruturação irá facilitar a manipulação de dados. Principalmente quando temos uma grande profundidade de objetos
const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML'],
    },
    fisicas: {
      cadernos: ['Caderno 1'],
    },
  },
};

console.log(cliente.compras.digitais.livros); // ['Livro 1', 'Livro 2']
console.log(cliente.compras.digitais.videos); // ['Video JS', 'Video HTML']

const { livros, videos } = cliente.compras.digitais;

console.log(livros); // ['Livro 1', 'Livro 2']
console.log(videos); // ['Video JS', 'Video HTML']

// Nesting
// É possível aninhar uma desestruturação dentro de outra
const moto = {
  nome: 'Nmax',
  itens: {
    cores: {
      foscas: ['Vermelha', 'Cinza'],
      brilhantes: ['Preta', 'Branca'],
    },
    pneus: {
      marcas: ['Michelin'],
    },
  },
};

const {
  pneus,
  cores,
  cores: { foscas, brilhantes },
} = moto.itens;

console.log(pneus); // {marcas: Array(1)}
console.log(cores); // {foscas: Array(2), brilhantes: Array(2)}
console.log(foscas); // ['Vermelha', 'Cinza']
console.log(brilhantes); // ['Preta', 'Branca']

// Nome das Variáveis
// É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:
const usuario = {
  nome: 'Henrique',
  idade: 24,
};

const { nome, idade } = usuario;
// ou
const { nome: nomeusuario, idade: idadeusuario } = usuario;

console.log(nome); // Henrique
console.log(idade); // 24
console.log(nomeusuario); // Henrique
console.log(idadeusuario); // 24

// Valor Inicial
// Caso a propriedade não exista o valor padrão dela será undefined. É possível modificar este valor no momento da desestruturação
const comprador = {
  empresa: 'Andre',
  pedidos: 5,
};

const { empresa, pedidos, email = 'email@gmail.com', cpf } = comprador;
console.log(email); // email@gmail.com
console.log(cpf); // undefined

// Destructuring Arrays
// Para desestruturar array's você deve colocar as variáveis entre [] colchetes
const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;
console.log(primeira); // Banana
console.log(segunda); // Uva

// Declaração de Variáveis
// A desestruturação pode servir para declararmos uma sequência de variáveis
const primeiroValor = 'Item 1';
const segundoValor = 'Item 2';
const terceiroValor = 'Item 3';
// ou
const [item1, item2, item3] = ['Item 1', 'Item 2', 'Item 3'];

// Argumento Desestruturado
// Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração
function handleKeyboard(event) {
  console.log(event.key);
}
// Com Destructuring
function handleKeyboard2({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard2);
