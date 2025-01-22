// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const itens = document.querySelectorAll('li');

for (item of itens) {
  item.classList.add('ativo');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (propriedade in window) {
  console.log(`${propriedade}: ${window[propriedade]}`);
}
