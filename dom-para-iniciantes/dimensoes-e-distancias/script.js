// Verifique a distância da primeira imagem em relação ao topo da página
const firstImg = document.querySelector('img');
const imgTop = firstImg.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function sumImages() {
  const images = document.querySelectorAll('img');
  let sum = 0;
  images.forEach(image => {
    sum += image.offsetWidth;
  });
  console.log(sum);
}

window.onload = function () {
  sumImages();
}; // Função para carregar a função depois que a página toda completar o carregamento

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach(link => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link + ' Possui o tamanho recomendado');
  } else {
    console.log(link + ' Não possui o tamanho recomendado');
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const smallDevice = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector('.menu');

if (smallDevice.matches) {
  menu.classList.add('menu-mobile');
}
