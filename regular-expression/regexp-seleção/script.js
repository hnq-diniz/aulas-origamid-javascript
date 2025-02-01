// Regular Expression
// Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split()
const padraoRegexp = /a/;
// Procura: a

const texto = 'JavaScript';
const novoTexto = texto.replace(padraoRegexp, 'B');
console.log(novoTexto); // JBvaScript

// -----------------------------------------------------------------//

// Literal
// Utilizar um carácter literal irá realizar uma busca específica deste carácter
const literalRegexp = /Java/;
// Procura: J seguido de a, v e a

console.log('JavaScript'.replace(literalRegexp, 'Type')); // TypeScript

// -----------------------------------------------------------------//

// Flag: g
// As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão
const flagGRegexp = /a/g;
// Procura: Todo a

console.log('JavaScript'.replace(flagGRegexp, 'i')); // JiviScript

// -----------------------------------------------------------------//

// Flag: i
// Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A
const flagIRegexp = /Pe/gi;
// Procura: Todo PE, Pe, pE e pe

console.log('Perdeu perdido'.replace(flagIRegexp, 'Ba')); // Bardeu Bardido

// -----------------------------------------------------------------//

// Character Class
// Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b
const characterClassRegexp = /[ai]/gi;
// Procura: Todo a, A, i, I

console.log('JavaScript'.replace(characterClassRegexp, 'u')); // JuvuScrupt

// -----------------------------------------------------------------//

// Character Class e Especiais
// Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos
const characterEspeciaisRegexp = /[-.]/g;
// Podemos usar \ para selecionar os characters especiais também
// Procura: - ou .

console.log('111.222-333-44'.replace(characterEspeciaisRegexp, '')); // 11122233344

// -----------------------------------------------------------------//

// Um ou Outro
// Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho
const umOuOutroRegexp = /Bra[sz]il/g;
// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l

console.log('Brasil é com z: Brazil'.replace(umOuOutroRegexp, 'Prazer')); // Prazer é com z: Prazer

// -----------------------------------------------------------------//

// De A à Z
// O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance
const deAAZRegexp = /[a-z]/g;
// Busca por itens de a à z

console.log('JavaScript é a linguagem.'.replace(deAAZRegexp, '0')); // J000S00000 é 0 000000000.

const deAAZRegexpTodos = /[a-zA-Z]/g;
// Busca por itens de a à z e A à Z

console.log('JavaScript é a linguagem.'.replace(deAAZRegexpTodos, '1')); // 1111111111 é 1 111111111.

const regexpNumero = /[0-9]/g;
// Busca por números de 0 à 9

console.log('123.333.333-33'.replace(regexpNumero, 'X')); // XXX.XXX.XXX-XX

// -----------------------------------------------------------------//

// Negar
// Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]
const NegarRegexp = /[^a-z]/g;
// Procura: tudo que não estiver entre a e z

console.log('Brasil é com z: Brazil'.replace(NegarRegexp, ' ')); // rasil   com z   razil

// -----------------------------------------------------------------//

// Ponto
// O ponto . irá selecionar qualquer carácter, menos quebras de linha
const PontoRegexp = /./g;
// Procura: todos os caracteres menos quebra de linha

console.log('JavaScript é a linguagem.'.replace(PontoRegexp, '0')); // 0000000000000000000000000

// -----------------------------------------------------------------//

// Escapar Especiais
// Caracteres especiais como o ponto ., podem ser escapados utilizando a barra \, assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/
const EscaparRegexp = /\./g;
const regexpAlternativa = /[.]/g;
// Procura: todos os pontos

console.log('999.222.222.11'.replace(EscaparRegexp, '-')); // 999-222-222-11

// -----------------------------------------------------------------//

// Word
// O \w irá selecionar qualquer carácter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_]
const WordRegexp = /\w/g;
// Procura: todos os alfanuméricos

console.log('Guarda-chuva R$ 23,00.'.replace(WordRegexp, '-')); // ------------ -$ --,--.

// -----------------------------------------------------------------//

// Not Word
// O \W irá selecionar tudo o que não for carácter alfanumérico e o underline. É a mesma coisa que [^A-Za-z0-9_]
const NotWordRegexp = /\W/g;
// Procura: o que não for carácter alfanuméricos

console.log('Guarda-chuva R$ 23,00.'.replace(NotWordRegexp, '-')); // Guarda-chuva-R--23-00-

// -----------------------------------------------------------------//

// Digit
// O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9]
const DigitRegexp = /\d/g;
// Procura: todos os dígitos

console.log('+55 (21) 2222-2222'.replace(DigitRegexp, 'X')); // +XX (XX) XXXX-XXXX.

// -----------------------------------------------------------------//

// Not Digit
// O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9].
const NotDigitRegexp = /\D/g;
// Procura: o que não for dígito

console.log('+55 (21) 2222-2222'.replace(NotDigitRegexp, '')); // 552122222222

// -----------------------------------------------------------------//

//Whitespace
// O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.
const WhitespaceRegexp = /\s/g;
// Procura: espaços em branco

console.log('+55 (21) 2222-  2222  '.replace(WhitespaceRegexp, '')); // +55(21)2222-2222

// -----------------------------------------------------------------//

// Not Whitespace
// O \S irá selecionar qualquer carácter que não for espaço em branco.
const NotWhitespaceRegexp = /\S/g;
// Procura: o que não for espaço em branco

console.log('+55 (21) 2222-  2222  '.replace(NotWhitespaceRegexp, '')); // XXX XXXX XXXXX  XXXX
// /[\s\S]/g irá selecionar tudo.

// -----------------------------------------------------------------//

// Quantificador
//É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caracter por caracter.
const QuantificadorRegexp = /aaaa/g;
const regexpAlt = /a{4}/g;
// Procura: 4 a's seguidos

console.log('Vaaaai ali por favor.'.replace(QuantificadorRegexp, 'a')); // Vai ali por favor.

// -----------------------------------------------------------------//

// Quantificador Min e Max
// Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir duas ou mais vezes.
const MinMaxRegexp = /\d{2,3}/g;
// Procura: dígitos seguidos de 2 à 3

console.log('222.333.222.42'.replace(MinMaxRegexp, 'X')); // X.X.X.X

const MinMaxRegexpLetras = /\w{1,}/g;
// Procura: letras seguidos com 1 carácter ou mais

console.log('A melhor linguagem é JavaScript'.replace(MinMaxRegexpLetras, 'X')); // X X X é X

// -----------------------------------------------------------------//

//Mais +
// O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.
const MaisRegexp = /\d+/g;
// Procura: dígitos em ocorrência de um ou mais

console.log('222.333.222.42'.replace(MaisRegexp, 'X')); // X.X.X.X

const MaisRegexpLetras = /d\w+/g;
// Procura: Começa com d, seguido por uma ou mais letras.

console.log('Dígitos, dados, desenhos, Dito, d'.replace(MaisRegexpLetras, 'X')); // Dígitos, X, X, Dito, d

// -----------------------------------------------------------------//

// Asterisco *
// O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.
const AsteriscoRegexp = /d\w*/g;
// Procura: Começa com d, seguido por zero ou mais letras.

console.log('Dígitos, dados, desenhos, Dito, d'.replace(AsteriscoRegexp, 'X')); // Dígitos, X, X, Dito, X

// -----------------------------------------------------------------//

// Opcional ?
// O sinal ? significa que o carácter é opcional, pode ou não existir.
const opcionalRegexp = /regexp?/g;
// Procura: Por regex com p opcional

console.log('Qual é o certo, regexp ou regex?'.replace(opcionalRegexp, 'Regular Expression')); // Qual é o certo, Regular Expression ou Regular Expression?

// -----------------------------------------------------------------//

// Alternado |
// O sinal | irá selecionar um ou outro. java|php
const alternadoRegexp = /java|php/gi;
// Procura: java ou php (case insensitive)

console.log('PHP e Java são linguagens diferentes'.replace(alternadoRegexp, 'X')); // X e X são linguagens diferente

// -----------------------------------------------------------------//

// Word Boundary \b
// O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.
const boundaryRegexp = /java/gi;
// Procura: java (case insensitive)

console.log('Java não é JavaScript.'.replace(boundaryRegexp, 'X')); // X não é XScript.

const regexpBoundary = /\bjava\b/gi;
// Procura: java (case insensitive)

console.log('Java não é JavaScript.'.replace(regexpBoundary, 'X')); // X não é JavaScript.

const regexpDigito = /\b\d+\b/gi;
// Procura: Dígitos em sequência, que estejam isolados

console.log('O Restaurante25 na Rua 3, custa R$ 32,00'.replace(regexpDigito, 'X')); // O Restaurante25 na Rua X, custa R$ X,X
console.log('11_22 33-44 55é66 77e88'.replace(regexpDigito, 'X')); // 11_22 X-X XéX 77e88

// -----------------------------------------------------------------//

// Not Word Boundary \B
// É o contrário do \b.
const NotBoundaryRegexp = /\B\d+\B/gi;

console.log('11_22 33-44 55é66 77e88'.replace(NotBoundaryRegexp, 'X')); // 1X_X2 33-44 55é66 7XeX8

// -----------------------------------------------------------------//

// Anchor Beginning
// Com o ^ é possível informar que a busca deve ser iniciada no início da linha.
const anchorRegexp = /^\w+/g;
// Procura: sequência de alfanuméricos no início da linha.

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(anchorRegexp, 'X')
);
// X@origamid.com
// contato@origamid.com

// -----------------------------------------------------------------//

// Anchor End
// Com o $ é possível informar que a busca deve ser iniciada no final da linha.
const AnchorEndRegexp = /\w+$/g;
// Procura: sequência de alfanuméricos no final da linha.

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(AnchorEndRegexp, 'X')
);
// andre@origamid.com
// contato@origamid.X

// -----------------------------------------------------------------//

// Flag: m
// Com a flag m de multiline, podemos informar que a busca de início ^ e final $ de linha devem ocorrer em todas as linhas disponíveis.
const FlagMRegexp = /\w+$/gm;
// Procura: sequência de alfanuméricos no final da linha.

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(FlagMRegexp, 'X')
);
// andre@origamid.X
// contato@origamid.X

const InicioRegexp = /^\w+/gm;
// Procura: sequência de alfanuméricos no início da linha.

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(InicioRegexp, 'X')
);
// X@origamid.com
// X@origamid.com

// -----------------------------------------------------------------//

// Line Feed \n
// O \n irá selecionar o final de uma linha, quando criamos uma nova.
const LineRegexp = /\n/g;

console.log(`andre@origamid.com\ncontato@origamid.com`.replace(LineRegexp, '---')); // andre@origamid.com---contato@origamid.com

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(LineRegexp, 'X')
);
// andre@origamid.com---contato@origamid.com
// \t seleciona tabs

// -----------------------------------------------------------------//

// Unicode \u
// O \u irá selecionar o respectivo carácter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.
const UnicodeRegexp = /\u0040|\u00A9/g;
// Procura: @ ou ©

console.log('andre@origamid.com ©'.replace(UnicodeRegexp, '---')); // andre---origamid.com ---
