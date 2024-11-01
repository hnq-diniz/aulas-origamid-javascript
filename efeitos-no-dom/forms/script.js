// É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.
console.log(document.forms); // lista com os formulários
console.log(document.forms.contato); // form com nome contato
console.log(document.forms.contato.elements); // elementos
console.log(document.forms[0].elements[0].value); // valor do primeiro

// -----------------------------------------------------------------//

// A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.
const form = document.getElementById('contato');
function handleKeyUp(event) {
  console.log(event.target.value);
}
form.addEventListener('keyup', handleKeyUp); // Com o keyup ele não identifica texto por voz
form.addEventListener('change', handleKeyUp); // Com o change ele identifica

// -----------------------------------------------------------------//

// O método checkValidity verifica se um input com o atributo required, é válido ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modicar com setCustomValidity('')
function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add('invalido');
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove('invalido');
  }
}
form.addEventListener('change', handleChange);

// -----------------------------------------------------------------//

// Select
function handleChange(event) {
  document.body.style.backgroundColor = event.target.value;
}

// -----------------------------------------------------------------//

// Checkbox
// Retorna o valor de value, se estiver checada ou não. checked retorna true ou false.
function handleChange(event) {
  if (event.target.checked) console.log('Marcado');
}

// -----------------------------------------------------------------//

// Radio
// A diferença entre Radio e Checkbox é que radio aceita apenas uma seleção por grupo. Radio é agrupado pelo atributo name.
function handleChange(event) {
  if (event.target.checked) console.log(event.target.value);
}

// -----------------------------------------------------------------//

// Pegando todos os valores
// Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.
const dados = {};
function handleChange(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
}
