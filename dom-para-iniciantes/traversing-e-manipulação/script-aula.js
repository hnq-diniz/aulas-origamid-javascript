// Com o Traversing é como se estivéssemos navegando pelo DOM
const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement); // Para selecionarmos o pai do elemento
console.log(lista.nextElementSibling); // Para selecionarmos o elemento acima
console.log(lista.previousElementSibling); // Para selecionarmos o elemento abaixo

console.log(lista.children); // Para vermos os filhos do elemento, retorna uma HTMLCollection
console.log(lista.children[0]); // Primeiro filho
console.log(lista.children[--lista.children.length]); // Ultimo filho

console.log(lista.querySelector('li:last-child')); // Forma de selecionar o ultimo filho usando seletor CSS

// Node puxa todos os elementos incluindo comentários e os espaços da pagina
console.log(lista.childNodes);
console.log(lista.previousSibling);

// Element fala apenas com o elemento, geralmente mais usado que o Node
const contato = document.querySelector('.contato');
const tituloContato = contato.querySelector('.titulo');
const animais = document.querySelector('.animais');
const mapa = document.querySelector('.mapa');
const faq = document.querySelector('.faq');
const tituloFaq = faq.querySelector('.titulo');
const dadosContato = contato.querySelector('.dados');

lista.appendChild(tituloContato); // Move o elemento para o final da elemento selecionado
contato.insertBefore(animais, mapa); // Move o elemento do primeiro argumento para dentro do elemento selecionado, porem antes do elemento do segundo argumento
faq.removeChild(tituloFaq); // Remove o elemento do argumento do elemento selecionado
contato.replaceChild(mapa, dadosContato); // Troca o elemento do primeiro argumento pelo elemento do segundo argumento

// Criando elemento e inserindo ele no DOM
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');
mapa.appendChild(novoH1);

console.log(novoH1);

// Clonando elemento
const primeiroLink = document.querySelector('a');
const clonePrimeiroLink = primeiroLink.cloneNode(true); // True sinaliza para incluir os filhos

mapa.appendChild(clonePrimeiroLink);
