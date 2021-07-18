// Spread
const produto = { nome: 'Caneca', preco: 1.8 }
const produtoSpread = { ...produto, material: 'porcelana' } // { nome: 'Caneca', preco: 1.8, material: 'porcelana' }

// produtoSpread.nome = 'Camisa' // { nome: 'Camisa', preco: 1.8 }
console.log(produtoSpread)

// Object.assign()
const produtoAssign = Object.assign({}, produto, { material: 'porcelana' }) // { nome: 'Caneca', preco: 1.8, material: 'porcelana' }
console.log(produtoAssign)

// Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
/**
 * { value: 'Caneca',
  writable: true,
  enumerable: true,
  configurable: true }

  PARA MUDAR UTILIZAMOS O Object.defineProperties | Object.definePropety
 */

// Exemplo:
Object.defineProperty(produto, 'nome', {
  writable: false
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

// Object.entries
console.log(Object.entries(produto)) // [ [ 'nome', 'Caneca' ], [ 'preco', 1.8 ] ]
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor)
}
Object.entries(produto).forEach(produto => {
  const [chave, valor] = produto
  console.log(chave, valor)
})