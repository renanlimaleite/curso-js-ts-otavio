/**
 * Class
 * Getters
 * Setters
 * Symbol
 */

/**
 * Tornando propriedades privadas com symbol
 */

const _velocidade = Symbol('velocidade')

class Carro {
  constructor(name) {
    this.name = name
    this[_velocidade] = 0
  }

  set velocidade(value) {
    if (typeof value !== 'number') return
    if (value >= 100 || value <= 0) return
    this[_velocidade] = value
  }

  get velocidade() {
    return this[_velocidade]
  }

  acelerar() {
    if (this[_velocidade] >= 100) return
    this[_velocidade]++
  }

  freiar() {
    if (this[_velocidade] <= 0) return
    this[_velocidade]--
  }
}

const c1 = new Carro('Fusca')

for (let i = 0; i <= 200; i++) {
  c1.acelerar()
}

/**
 * Não sobrescreve pois tem um Symbol, e um get,
 * Só podemos sobrescrever usando um setter set
 */
c1.velocidade = 99
console.log(c1.velocidade)


class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }

  set nomeCompleto(value) {
    value = value.split(' ')
    this.nome = value.shift()
    this.sobrenome = value.join(' ')
  }
}

const p1 = new Pessoa('Renan', 'Lima')

p1.nomeCompleto = 'Barreto Leite' // sobrescrevendo utilizando set

console.log(p1.nomeCompleto)