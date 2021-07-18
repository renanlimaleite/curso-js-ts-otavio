function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)

console.log(p1) // Produto { nome: 'Camiseta', preco: 50 }
p1.desconto(50)
console.log(p1) // Produto { nome: 'Camiseta', preco: 25 }

// Literal
const p2 = {
  nome: 'Caneca',
  preco: 15
}
// P2 herdando protótipo de Produto
Object.setPrototypeOf(p2, Produto.prototype)
console.log(p2.preco) // 15
p2.desconto(50)
console.log(p2.preco) // 7.5


// Outro Literal

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
  }
})

p3.desconto(50)

console.log(p3) // Produto { preco: 49.5 }