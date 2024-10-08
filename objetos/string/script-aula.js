// Uma cria uma string e outra cria o objeto string
const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

// Propriedade com o total de caracteres da string
const frase1 = 'A melhor comida';

console.log(comida.length); // 5
console.log(frase1.length); // 15
console.log(comida[0]); // P
console.log(frase1[0]); // A
console.log(frase1[frase1.length - 1]); // a

// Serve para mostrar o caractere de acordo com o índice
const linguagem = 'JavaScript';

console.log(linguagem.charAt(0));
console.log(linguagem.charAt(2));
console.log(linguagem.charAt(linguagem.length - 1));

// Serve para concatenar string sem somar
const frase2 = 'A melhor linguagem é ';

const fraseFinal = frase2.concat(linguagem, '!!');

console.log(fraseFinal);

// Procura pela string exata dentro de outra string
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta, 11)); //Colocamos outro argumento para começar a procurar depois do index informado

// Para procurar uma sequencia de letra dentro de uma string
console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('rango'));

// Corta a string de acordo com os valores de start e end
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente (ele tira os 12 primeiros caracteres)
transacao1.slice(0, -4); // Depósito de cli (ele tira os 4 últimos caracteres)
transacao1.slice(-4); // ente (ele seleciona os últimos 4 caracteres)
transacao1.slice(3, 6); // ósi

// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice
linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript

// Retorna a posição onde esta o caractere ou o grupo
console.log(fruta.indexOf('B'));
console.log(fruta.lastIndexOf('na'));

// Aumenta o tamanho da string, caso não passe um segundo argumento ele não preenche com nada
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
const preco = 'R$ 99';

console.log(preco.padStart(10, '.'));
console.log(preco.padEnd(10, '.'));

listaPrecos.forEach(item => {
  console.log(item.padStart(10, '.'));
});

// Para repetir a string
const palavra = 'Ta';

console.log(palavra.repeat(5));

// Troca parte da string por outra string
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', '); //Para substituir todos os espaços precisamos usar uma regular expression, caso contrário substituirá apenas o primeiro

console.log(listaItens);

let valor = 'R$1200,43';
valor = valor.replace(',', '.');

console.log(valor);

// Divide a string com um padrão selecionado e transforma em uma array
const arrayItens = listaItens.split(', ');

console.log(arrayItens);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

console.log(htmlNovo);

// O método join junta uma array em uma string com um padrão, basicamente o contrario do método split
const frutasArray = ['Banana', 'Melancia', 'Laranja'];
const novaFrutasArray = frutasArray.join(', ');

console.log(novaFrutasArray);

// Para transformar as strings para maiúsculo ou minusculo
const nome = 'HenRiqUe';
const minusculo = nome.toLowerCase();
const maiusculo = nome.toUpperCase();

console.log(minusculo);
console.log(maiusculo);

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

sexo1.toLowerCase() === 'feminino'; // true
sexo2.toLowerCase() === 'feminino'; // true
sexo3.toLowerCase() === 'feminino'; // true

// Para remover espaços da string, menos o do meio da string
const valor2 = '  R$ 23.00   ';
valor2.trim(); // 'R$ 23.00'
valor2.trimStart(); // 'R$ 23.00   '
valor2.trimEnd(); // '  R$ 23.00'
