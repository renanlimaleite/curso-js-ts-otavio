/**
 * Factory Function
 */

function criarPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      // this está se referindo ao próprio objeto retornado na instância.
      return `${this.nome} está ${assunto}`
    },
    // Getter
    get name() {
      return `${this.nome}`
    },
    // Setter
    set fullName(value) {
      value = value.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
    }
  }
}

const p1 = criarPessoa('Renan', 'Lima')
console.log(p1.fala('estudando...'))
console.log(p1.name)
p1.nomeCompleto = 'Teste Silva'
console.log(p1.nomeCompleto)