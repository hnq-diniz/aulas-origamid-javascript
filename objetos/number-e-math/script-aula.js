// Verifica se é um numero ou não (NaN = Not a Number)
Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false

// Verifica se é uma integral, um numero inteiro (caso o numero não seja uma integer ele é um float )
Number.isInteger(20); // true
Number.isInteger(23.6); // false

// Mudando string para number
parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100 (retorna um numero pois o caractere esta depois do numero)
Number.parseFloat('R$ 100'); // NaN (não retorna um numero pois tem caracteres antes do numero)

// Transforma o numero que é float em integer, apenas cortando o restante
// (usa-se 10 para mostrar que é para decimal, porem por padrão já fica em decimal)
parseInt('99.50', 10); // 99
parseInt(5.43434355555); // 5
Number.parseInt('100 Reais', 10); // 100

// Arredonda o número com base no total de casas decimais do argumento, tanto para cima quanto para baixo
const preco1 = 2.99;
preco1.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed(); // 1499

// Transforma um numero em uma string
// (usa-se 10 para mostrar que é para decimal, porem por padrão já fica em decimal)
const preco3 = 2.99;
preco3.toString(10); // '2.99'

// Formata o número de acordo com a língua e opções passadas
const preco4 = 59.49;
preco4.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); // '$59.49'
preco4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // 'R$ 59,49'

// Math é usado para funções e expressões matemáticas
Math.PI; // 3.14159
Math.E; // 2.718
Math.LN10; // 2.303

// abs() retorna o valor absoluto (transforma negativo em positivo)
// ceil() arredonda para cima, retornando sempre uma integral e floor() para baixo.
// round() arredonda para o número integral mais próximo.
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

// max() retorna o maior número de uma lista de argumentos
// min() o menor número e random() um número aleatório entre 0 e 1
Math.max(5, 3, 10, 42, 2); // 42
Math.min(5, 3, 10, 42, 2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
Math.floor(Math.random() * (max - min + 1)) + min;
