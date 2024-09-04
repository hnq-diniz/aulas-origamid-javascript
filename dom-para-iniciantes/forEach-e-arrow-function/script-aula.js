// Usando o forEach para interagir com todas as imagens do site
const imgs = document.querySelectorAll('img');

imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// Os métodos das arrays não funcionam em objetos HTMLCollection, então precisamos transformamos em array
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

// Arrow Function reduz a sintaxe na criação de funções
// Parâmetro único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// Múltiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// Sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

// Funções com uma linha de código não precisamos usar chaves
imgs.forEach(() => console.log(i--));
