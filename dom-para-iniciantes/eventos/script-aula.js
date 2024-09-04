// Adicionando evento a um elemento
const img = document.querySelector('img');

// Um dos métodos de como adicionar evento usando arrow function
img.addEventListener('click', () => {
  console.log('clicou');
});

// Outro método com a função fora do evento
function callback(event) {
  console.log(event);
}

img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

// Algumas funcionalidades do event
function executarCallback(event) {
  const currentTarget = event.currentTarget; // Faz referencia ao elemento selecionado, temos o mesmo resultado usando this
  const target = event.target; // Onde o clique ocorreu
  const type = event.type; // Tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

// Prevendo comportamentos padrões de alguma ação
const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
}

linkExterno.addEventListener('click', handleLinkExterno);

// Outros tipos de evento
const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent);
window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent);

// Adicionando mudanças ao clicar em teclas
function handleKeyboard(event) {
  if (event.key === 'a') document.body.classList.toggle('azul');
  else if (event.key === 'v') document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);

// Usando forEach para aplicar evento a mais de um elemento
const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach(img => {
  img.addEventListener('click', handleImg);
});
