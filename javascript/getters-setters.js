function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  let estoquePrivado = estoque
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra chave,
    // value: 3, // valor
    // writable: false, // escrita? default é true
    configurable: true, // apagar / editar / reconfigurar
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      // valor é (p1.estoque === "valor que eu quero")
      if (typeof valor !== 'number') {
        console.log('Bad value')
        return
      }
      estoquePrivado = valor
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
// Setando aqui
// pt.estoque = 'string' // bad value
p1.estoque = 1
console.log('Getter:', p1.estoque)

function criaProduto(nome) {
  return {
    get nome() {
      return nome
    },
    set nome(valor) {
      if (typeof valor !== 'string') return console.log('Bad value')
      nome = valor;
    }
  }
}

const p2 = criaProduto('Camiseta')
console.log(p2) // { nome: [Getter/Setter] }
console.log(p2.nome) // Camiseta
p2.nome = 'Teste'
console.log(p2.nome) // Teste
p2.nome = 2 // Bad value
console.log(p2.nome) // Teste