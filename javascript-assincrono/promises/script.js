// Promise é uma função construtora de promessas. Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado
// Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.
// Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada

const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu.'));
  }
});

// console.log(promessa); // Promise {<rejected>: Error:...} (caso a condição seja false)
console.log(promessa); // Promise {<resolved>: "Estou pronto!"} (caso a condição seja true)

// O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve
promessa.then(function (resolucao) {
  console.log(resolucao); // 'Estou pronto!'
});

// -----------------------------------------------------------------//

// As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono. O poder está na execução de código assíncrono que executará o resolve() ao final dele
const promessa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolvida');
  }, 1000);
});

promessa2.then(resolucao => {
  console.log(resolucao); // 'Resolvida' após 1s
});

console.log(promessa2);

// -----------------------------------------------------------------//

// O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será o valor do retorno anterior
const promessa3 = new Promise((resolve, reject) => {
  resolve('Etapa 1');
});

promessa3
  .then(resolucao => {
    console.log(resolucao); // 'Etapa 1';
    return 'Etapa 2';
  })
  .then(resolucao => {
    console.log(resolucao); // 'Etapa 2';
    return 'Etapa 3';
  })
  .then(resolucao => resolucao + 4)
  .then(resolucao => {
    console.log(resolucao); // Etapa 34
  });

// O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.
const promessaFalse = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu, mostrado com o catch'));
  }
});

promessaFalse
  .then(resolucao => {
    console.log(resolucao);
  })
  .catch(reject => {
    console.log(reject);
  });

// Podemos passar a função que será ativada caso a promise seja rejeitada, direto no método then, como segundo argumento
const promessa4 = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve('Estou pronto!');
  } else {
    reject(Error('Um erro ocorreu, porem mostrado com o then'));
  }
});

promessa4.then(
  resolucao => {
    console.log(resolucao);
  },
  reject => {
    console.log(reject);
  }
);

// -----------------------------------------------------------------//

//finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.
promessa
  .then(
    resolucao => {
      console.log(resolucao);
    },
    reject => {
      console.log(reject);
    }
  )
  .finally(() => {
    console.log('Acabou'); // 'Acabou'
  });

// -----------------------------------------------------------------//

// Métodos do objeto promise

// Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas ou pelo menos uma rejeitada. A reposta é uma array com as respostas de cada promise
const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1500);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 2000);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
  console.log(respostas); // Array com ambas respostas
});

// -----------------------------------------------------------------//

// Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida
const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then(resposta => {
  console.log(resposta); // Login Efetuado
});
