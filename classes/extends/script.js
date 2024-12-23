// Subclasses
// É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo
class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  andar() {
    console.log('Anda com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2);
honda.andar();

// -----------------------------------------------------------------//

// Métodos
// Podemos escrever por cima de um método herdado
class Veiculo2 {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto2 extends Veiculo2 {
  acelerar() {
    console.log('Acelerou muito');
  }
}

const yamaha = new Moto2(2);
yamaha.acelerar();

// -----------------------------------------------------------------//

// Super
// É possível utilizar a palavra chave super para falarmos com a classe que pai e acessarmos os seus métodos e propriedades
class Veiculo3 {
  constructor(rodas) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto3 extends Veiculo3 {
  acelerar() {
    super.acelerar();
    console.log('Acelerou mais');
  }
}

const kawasaki = new Moto3(2);
kawasaki.acelerar();

// -----------------------------------------------------------------//

// Super e Constructor
// Podemos utilizar o super para estendermos o método constructor
class Veiculo4 {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
}

class Moto4 extends Veiculo4 {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
}

const triumph = new Moto4(4, 'Gasolina', true);
console.log(triumph);
