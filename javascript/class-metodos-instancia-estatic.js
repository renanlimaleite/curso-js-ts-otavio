function teste() {
  console.log('funcao fora, dentro do constructor')
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
    teste()
  }

  aumentarVolume() {
    this.volume += 2
  }

  diminuirVolume() {
    this.volume -= 2
  }

  // Método estático, não precisa instanciar, basta chamar diretamente do nome da classe, o construtor também não é chamado.
  static trocaPilha() {
    console.log('trocando pilha')
  }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
// controle1.trocaPilha() Error pq esse método é estático.
ControleRemoto.trocaPilha() // Funciona.
console.log(controle1)