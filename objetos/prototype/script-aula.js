// O JavaScript procura primeiro a função no objeto e depois no protótipo
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype); // Retorna o objeto
console.log(andre.prototype); // Undefined, pois andre é um objeto e não uma função

// Criando funções através do prototype
Pessoa.prototype.andar = function () {
  return this.nome + ' andou';
};

Pessoa.prototype.nadar = function () {
  return this.nome + ' nadou';
};

console.log(Pessoa.prototype.andar());
console.log(andre.andar());
console.log(andre.nadar());

// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor
console.log(Object.prototype);
console.log(andre.toString());
console.log(andre.isPrototypeOf());
console.log(andre.valueOf());

const pais = 'Brasil';
const cidade = new String('Rio');

console.log(pais.charAt(0));
console.log(cidade.charAt(0));

// É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array
const lista = document.querySelectorAll('li'); // Retorna uma NodeList
console.log(lista);

const listaArray1 = Array.prototype.slice.call(lista); // Transforma em uma array, está lindado ao protótipo
console.log(listaArray1);

const listaArray2 = Array.from(lista); // Jeito mais usado para transformar em array, porem está lincado a função array
console.log(listaArray2);

// Retorna uma lista com os métodos/propriedades
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype));

[1, 2, 3].slice(); // Existe
[1, 2, 3].from(); // Não existe

// Entenda o que está sendo retornado
const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  },
};

Carro; // Object
Carro.marca; // String
Carro.preco; // Number
Carro.acelerar; // Function
Carro.acelerar(); // Boolean
Carro.marca.charAt; // Function
Carro.marca.charAt(0); // String
