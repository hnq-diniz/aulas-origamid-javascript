// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

const henrique = new Pessoa('Henrique', 'Diniz', 24);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList));
console.log(Object.getOwnPropertyNames(HTMLCollection));
console.log(Object.getOwnPropertyNames(Document));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// Construtores listados usando .constructor.name
li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined, pois nãp retorna nada

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
