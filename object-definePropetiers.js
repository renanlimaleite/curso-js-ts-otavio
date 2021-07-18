/**
 * Object.defineProperty()
 * Singular
 */

/**
 * Object.defineProperties()
 * Plural
 */

function Produto(nome, preco, estoque) {
  // this.nome = nome
  // this.preco = preco

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra chave
      value: 3, // valor
      writable: false, // escrita? default é true
      configurable: true, // apagar / editar / reconfigurar
    },
    preco: {
      enumerable: true, // mostra chave
      value: 3, // valor
      writable: false, // escrita? default é true
      configurable: true, // apagar / editar / reconfigurar
    }
  })

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra chave
    value: 3, // valor
    writable: false, // escrita? default é true
    configurable: true, // apagar / editar / reconfigurar
  })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))
console.log(p1)