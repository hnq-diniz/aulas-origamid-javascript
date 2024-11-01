// setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.
function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 1000, 'Passou 1s');

setTimeout(() => {
  console.log('Passou 2s');
}, 2000);

// -----------------------------------------------------------------//

// Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. Podemos passar uma função anônima diretamente com argumento.
setTimeout(() => {
  console.log('Imediatamente');
});

// Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.
for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5000);
}

// Forma correta de fazer o loop ⬎
// Agora ele está multiplicando o tempo por i. Assim o primeiro aparecerá em 0ms, o segundo em 300ms, o terceiro em 600ms e assim em diante.
for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    console.log(i);
  }, 200 * i);
}

// -----------------------------------------------------------------//

// setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window.
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
  setTimeout(function () {
    console.log(this);
    this.classList.add('active');
  }, 1000);
}
// Erro pois window.classList não existe

// Quando utilizamos uma Arrow Function como callback, o contexto de this passa a ser do local onde o setTimeout foi iniciado.
const btn2 = document.querySelector('.button2');
btn2.addEventListener('click', handleClick2);

// this agora é btn.
function handleClick2(event) {
  setTimeout(() => {
    this.classList.add('active');
    console.log(this);
  }, 1000);
}

// -----------------------------------------------------------------//

// setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a quantidade de tempo passar.
// (Para sempre caso não haja clearInterval)
// function loop(texto) {
//   console.log(texto);
// }
// setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo (para sempre caso não haja clearInterval)
// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);

// clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.
const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
  console.log(i++ + ' quantidades');
  if (i > 10) {
    clearInterval(contarAte10);
  }
}
