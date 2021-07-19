/**
 * Produtos = aumento, desconto
 * Camisa = cor, caneca = material
 */

function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}
// Protos
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia
}
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
  /**
   * Herança, Produto ta chamando o this que é o próprio objeto (quem instância Camisa) criado, e passando os mesmo parâmetros.
   */
  Produto.call(this, nome, preco)

  // propriedade própria da camisa.
  this.cor = cor
}
// Então setamos no prototype da Camiseta um objeto igual ao prototipo do produto, assim ele herdará as métodos e propriedades...
Camiseta.prototype = Object.create(Produto.prototype)
// Mais um problema, ao herdar, o constructor da Camiseta passa a ser Produto, então devemos reescrever o constructor da camiseta.
Camiseta.prototype.constructor = Camiseta

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preto')
camiseta.aumento(10)
console.log(produto)
console.log(camiseta)

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco)
  this.material = material
  this.estoque = estoque
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
const caneca = new Caneca('Batman', 10, 'Porcelana', 3)
caneca.prototype.aumento = function (percent) {
  this.preco = this.preco + (this.preco * (percent / 100))
}
console.log(caneca)