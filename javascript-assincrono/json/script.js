//  JSON (exemplo no arquivo json.json)
// JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string

// -----------------------------------------------------------------//

//  Valores (exemplo no arquivo valores.json)
// Os valores podem ser números, strings, boolean, arrays, objetos e null

// -----------------------------------------------------------------//

//  Arrays e Objetos (exemplo no arquivo arrays-e-objetos.json)
// É comum possuirmos array's com objetos em cada valor da array. Cuidado para não colocar vírgula no último item do objeto ou array

// -----------------------------------------------------------------//

//  JSON.parse() e JSON.stringify()
// JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON
const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
const textoOBJ = JSON.parse(textoJSON);

const enderecoOBJ = {
  cidade: 'Rio de Janeiro',
  rua: 'Ali Perto',
  pais: 'Brasil',
  numero: 50,
};
const enderecoJSON = JSON.stringify(enderecoOBJ);

console.log(enderecoJSON);
console.log(textoOBJ);

// -----------------------------------------------------------------//

//  Exemplo Real
// Podemos guardar por exemplo no localStorage, uma string como valor de uma propriedade. E retornar essa string como um objeto
const configuracoes = {
  player: 'Google API',
  tempo: 25.5,
  aula: '2-1 JavaScript',
  vitalicio: true,
};

localStorage.configuracoes = JSON.stringify(configuracoes);
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);

console.log(pegarConfiguracoes);
