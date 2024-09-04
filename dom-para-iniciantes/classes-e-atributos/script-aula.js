// Aprendendo um pouco sobre as classes
const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul');

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

// Jeito que era usado antigamente
menu.classList += ' vermelho';

// Aprendendo um pouco sobre atributos
const animais = document.querySelector('.animais');
console.log(animais.attributes);
console.log(animais.attributes['data-texto']); // Para puxarmos data precisamos colocar colchetes e aspas

const img = document.querySelector('img');
const srcImg = img.getAttribute('src');
console.log(srcImg);

img.setAttribute('alt', 'É uma raposa'); // O setAttribute serve para definir se não existir e atualizar o existente

const possuiAlt = img.hasAttribute('alt'); // O hasAttribute serve para verificar se possui o atributo
const possuiTeste = img.hasAttribute('teste');
console.log(possuiAlt);
console.log(possuiTeste);

img.removeAttribute('alt'); // O removeAttribute remove o atributo

// Diferença entre Read Only e Writable
animais.className; // String com o nome das classes
animais.className = 'azul'; // Substitui completamente a string
animais.className += ' vermelho'; // Adiciona vermelho à string

animais.attributes = 'class="ativo"'; // Não funciona, read-only
