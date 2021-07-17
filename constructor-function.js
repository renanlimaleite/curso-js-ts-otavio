/**
 * Constructor function
 * Sempre inicia new + algo com letra maíscula.
 * Retorna objeto.
 */
function Pessoa(name, sobrenome) {
  // Atributos ou Métodos Privados
  const id = 123

  const metodoInterno = function () { }

  // Atributos ou Métodos Publicos
  this.name = name
  this.sobrenome = sobrenome

  this.metodo = function () {
    console.log('Sou um método')
  }
}

const p1 = new Pessoa('Renan', 'Lima')

console.log(p1.name)
console.log(p1.metodo())