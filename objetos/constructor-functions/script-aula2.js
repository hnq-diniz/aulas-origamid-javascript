// Sem constructor function
const Dom = {
  seletor: 'li',
  // element() {
  //   const elementoSelecionado = document.querySelector(this.seletor);
  //   return elementoSelecionado;
  // },
  element() {
    return document.querySelector(this.seletor);
  },
  // ativar() {
  //   const elementoSelecionado = document.querySelector(this.seletor);
  //   elementoSelecionado.classList.add('ativo');
  // },
  ativar() {
    this.element().classList.add('ativo');
  },
};

Dom.seletor = 'ul';
Dom.ativar();

// Cem constructor function
function Dom2(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add('ativo');
  };
  this.classe = function (classe) {
    this.element().classList.add(classe);
  };
}

const li = new Dom2('li');
const ul = new Dom2('ul');

const lastLi = new Dom2('li:last-child');
lastLi.ativar();

li.classe('teste');
