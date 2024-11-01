// O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.
const data = new Date();
console.log(data); // Dia da semana Mês Dia Ano HH:MM:SS GMT
console.log(data.getDate()); // Dia
console.log(data.getDay()); // Dia da Semana ex: 5 = Fri
console.log(data.getMonth()); // Número dia mês
console.log(data.getFullYear()); // Ano
console.log(data.getHours()); // Hora
console.log(data.getMinutes()); // Minutos
console.log(data.getTime()); // ms desde 1970
console.log(data.getUTCHours() - 3); // Brasília

// O método getTime() mostra o tempo total em milissegundos desde o dia 1 de janeiro de 1970.
// total de dias desde 1 de janeiro de 1970
const diasPassados = data.getTime() / (24 * 60 * 60 * 1000);

// Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.
const agora = new Date();
const promocao = new Date('December 24 2018 23:59');

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterEmDias(agora);
const diasPromocao = converterEmDias(promocao);

const faltam = diasPromocao - diasAgora;
