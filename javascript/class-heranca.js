class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`)
      return
    }

    this.ligado = true
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`)
      return
    }

    this.ligado = false
  }
}

// Extends -> Herdar
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    // Chamar o construtor da classe pai
    super(nome) // no caso queremos o nome também.
    this.cor = cor
    this.modelo = modelo
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, wifi) {
    super(nome)
    this.wifi = wifi
  }

  ligar() {
    console.log('Você alterou o método ligar')
  }

  especifico() {
    console.log('Método especifico')
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')
s1.ligar()
console.log(s1)

const t1 = new Tablet('IPad', true)
console.log(t1.ligado) // false
t1.ligar() // Você alterou o método ligar
t1.especifico() // Método especifico