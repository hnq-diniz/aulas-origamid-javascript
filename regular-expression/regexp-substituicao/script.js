// Referência da Seleção
// É possível utilizarmos o $& durante o momento da substituição para fazermos uma referência à seleção.
const ReferenciaRegexp = /Java/g;
// Procura: Java

console.log('PHP e Java são linguagens diferentes'.replace(ReferenciaRegexp, '--$&Script')); // PHP e --JavaScript são linguagens diferentes $& será igual à Java

// -----------------------------------------------------------------//

// Grupo de Captura
// É possível definirmos diferentes grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.
const grupoRegexp = /(\w+)@[\w.]+/g;
// Procura: sequência alfanumérica, seguida de @, seguido de alfanumérico ou .

console.log('andre@email.com.br'.replace(grupoRegexp, '$1@gmail.com')); // andre@gmail.com

// Não use este regexp para emails, ele falha em alguns casos.

// -----------------------------------------------------------------//

// Mais de um Grupo
// Podemos definir quantos grupos de captura quisermos.
const MaisGrupoRegexp = /(\w+),\s(\w+)/g;
// Procura: sequência alfanumérica, seguida de , seguido espaço de sequência alfanumérica.

console.log('Rafael, Andre'.replace(MaisGrupoRegexp, '$2 $1')); // Andre Rafael

// -----------------------------------------------------------------//

//Mais do que Captura apenas
//Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição.
const MaisCapturaRegexp = /(ta)+/gi;
// Procura: qualquer sequência de ta

console.log('Tatata, tata, ta'.replace(MaisCapturaRegexp, 'Pá')); // Pá, Pá, Pá

// -----------------------------------------------------------------//

//Ignorar Captura
// Utilize o (?:) para ignorar a captura.
const IgnorarRegexp = /(?:ta)+/gi;
// Procura: qualquer sequência de ta

console.log('Tatata, tata, ta'.replace(IgnorarRegexp, 'Pá')); // Pá, Pá, Pá

// -----------------------------------------------------------------//

// Positive Lookahead
// Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. Apesar de utilizar () parênteses o positive lookahead não captura grupo.

// Procura: dígitos em sequência, que
// possuírem px, sem selecionar o px.
const positiveLookaheadRegexp = /\d(?=px)/g;

console.log('2em, 4px, 5%, 2px, 1px'.replace(positiveLookaheadRegexp, 'X')); // 2em, Xpx, 5%, Xpx, Xpx

// -----------------------------------------------------------------//

// Negative Lookahead
// Faz a seleção dos itens não possuírem o padrão dentro de (?!) à sua frente.
const negativeLookaheadRegexp = /\d(?!px)/g;
// Procura: dígitos que não possuírem px sem selecionar o restante.

console.log('2em, 4px, 5%, 5px, 1px'.replace(negativeLookaheadRegexp, 'X')); // Xem, 4px, X%, 5px, 1px

// -----------------------------------------------------------------//

// Positive Lookbehind
// Faz a seleção dos itens que possuírem o padrão dentro de (?<=) atrás dos mesmos.
const positiveLookbehindRegexp = /(?<=R\$)[\d]+/g;
// Procura: dígitos que possuírem R$ na frente dos mesmos

console.log('R$99, 100, 200, R$20'.replace(positiveLookbehindRegexp, 'X')); // R$X, 100, 200, R$X
