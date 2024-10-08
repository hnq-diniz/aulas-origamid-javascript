// Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host
Object;
String;
Array;
Function;

// Objetos do browser
NodeList;
HTMLCollection;
Element;

// Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.
$('a').addClass('ativo');
$('a').hide();
$('a').show();

// O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.
if (typeof Array.from !== 'undefined') {
  console.log('Existe Array.from');
}
if (typeof NodeList !== 'undefined') {
  console.log('Existe NodeList');
}
