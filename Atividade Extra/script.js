//jeito 1
const pessoa1 = {
  nome: "Eduardo Um",
  idade: 20,
  hobby: "escutar música",
  apresentar: function () {
    return `Oi, sou o ${this.nome}, tenho ${this.idade} anos e gosto de ${this.hobby}.`;
  },
};

console.log("1:", pessoa1.apresentar());

//jeito 2
const pessoa2 = new Object();

pessoa2.nome = "Eduardo Dois";
pessoa2.idade = 20;
pessoa2.hobby = "jogar videogames";

pessoa2.apresentar = function () {
  return `Oi, sou o ${this.nome}, tenho ${this.idade} anos e gosto de ${this.hobby}.`;
};

console.log("2:", pessoa2.apresentar());

//jeito 3
const pessoa3 = Object.create(Object.prototype, {
  nome: { value: "Eduardo Três", enumerable: true },
  idade: { value: 20, enumerable: true },
  hobby: { value: "caminhar", enumerable: true },
});

pessoa3.apresentar = function () {
  return `Oi, sou o ${this.nome}, tenho ${this.idade} anos e gosto de ${this.hobby}.`;
};

console.log("3:", pessoa3.apresentar());

//jeito 4
function PessoaQuatro(nomePessoa, idadePessoa, hobbyPessoa) {
  this.nome = nomePessoa;
  this.idade = idadePessoa;
  this.hobby = hobbyPessoa;

  this.apresentar = function () {
    return `Oi, sou o ${this.nome}, tenho ${this.idade} anos e gosto de ${this.hobby}.`;
  };
}

const pessoa4 = new PessoaQuatro("Eduardo Quatro", 20, "tocar guitarra");
console.log("4:", pessoa4.apresentar());

//jeito 5

class PessoaCinco {
  constructor(nome, idade, hobby) {
    this.nome = nome;
    this.idade = idade;
    this.hobby = hobby;
  }

  apresentar() {
    return `Oi, sou o ${this.nome}, tenho ${this.idade} anos e gosto de ${this.hobby}.`;
  }
}

const pessoa5 = new PessoaCinco("Eduardo Cinco", 20, "viajar");
console.log("5:", pessoa5.apresentar());

const divOutput = document.getElementById("output");

divOutput.innerHTML += pessoa1.apresentar() + "<br>";
divOutput.innerHTML += pessoa2.apresentar() + "<br>";
divOutput.innerHTML += pessoa3.apresentar() + "<br>";
divOutput.innerHTML += pessoa4.apresentar() + "<br>";
divOutput.innerHTML += pessoa5.apresentar() + "<br>";

//o método apresentar está sendo exibido tanto no console, quanto na parte front estática via HTML
