/**
 * Mesma coisa da função construtora!!! Só que de maneira diferente
 * 
 * Os métodos são automaticamente colocado no prototipe do objeto!!
 */
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  // Métodos
  falar() {
    console.log(`${this.nome} está falando`)
  }

  comer() {
    console.log(`${this.nome} está comendo`)
  }

  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}

/**
 * Functions Construtoras 
 * Nesse caso da muito mais trabalho
 */
function Pessoa2(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}
Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Renan', 'Leite')
console.log(p1)
const p2 = new Pessoa2('Barreto', 'Leite')
console.log(p2)