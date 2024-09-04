// Jeito errado
const carroErrado = {
  marca: 'Marca',
  preco: 0,
};

const hondaErrado = carroErrado;
hondaErrado.marca = 'Honda';
hondaErrado.preco = 4000;

const fiatErrado = carroErrado;
fiatErrado.marca = 'Fiat';
fiatErrado.preco = 3000;

// Jeito certo
// Funções construtoras usamos PascalCase
function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 2000);
const fiat = new Carro('Fiat', 5000);

// O novo objeto criado só tera acesso aos itens que tiverem com o this
function CarroNovo(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const chev = new CarroNovo('Chevrolet', 3000);
