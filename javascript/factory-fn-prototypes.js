const metodosDesaclopados = {
  falar() {
    console.log(`${this.nome} está falando`)
  },

  comer() {
    console.log(`${this.nome} está comendo`)
  }
}

const pessoaPrototype = {
  ...metodosDesaclopados
}

function criarPessoa(nome, sobrenome) {

  // Todas os objetos já vão ter no proto essas funções, isso faz com que não gaste memória, (é mais performático)
  // const pessoaPrototype = {
  //   falar() {
  //     console.log(`${this.nome} está falando`)
  //   },
  //   comer() {
  //     console.log(`${this.nome} está comendo`)
  //   }
  // }

  return Object.create(pessoaPrototype, { // pessoaPrototype
    nome: {
      value: nome
    },
    sobrenome: {
      value: sobrenome
    }
  })
}