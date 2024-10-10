// Basta adicionar type="module" na tag script do HTML.
// Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único).
// E import nome from arquivo.js para importar
import initScrollSuave from './modules/scroll-suave.js';
initScrollSuave();

import initAnimacaoScroll from './modules/scroll-animacao.js';
initAnimacaoScroll();

import initTabNav from './modules/navegacao-tab.js';
initTabNav();

import initAccordion from './modules/accordion.js';
initAccordion();

// -----------------------------------------------------------------//

// Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor.
// O nome importado deve ser igual ao exportado
import { teste1, teste2 } from './modules/teste-sabendo.js';
teste1();
teste2();

// Importe todos os valores em um objeto
import * as teste from './modules/teste-todos.js';
teste.teste3();
teste.teste4();

// -----------------------------------------------------------------//

// Podemos exportar objetos, funções, classes, números, strings e mais
console.log(teste.senha);
console.log(teste.usuario);

// -----------------------------------------------------------------//

// O modo estrito previne que algumas ações consideradas erros.
// Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo

// 'use strict';

// nome = 'Ford'; // erro, variável global
// delete Array.prototype; // erro, não delatável
// window.top = 200; // erro, não pode mudar
// const arguments = 3.14; // escrever em palavra reservada
