/**
 * Validar, Substituir, Capturar...
 */
/**
 * flags:
 * g - global -> Encontra todas as ocorrências.
 * i - case insensitive -> tanto faz letras minusculas ou maiusculas.
 * () group
 * | or
 */
const { texto } = require('./base')

console.log(texto)

const regExp1 = /João/gi
const regExp2 = /Teve 5 filhos/i
const regExp3 = /(maria)(, hoje sua esposa)/i
const regExp4 = /(maria|joão|luiz)(, hoje sua esposa)/i

console.log('---------------')
console.log('---------------')
console.log('---------------')

console.log(regExp1.test(texto)) // true
console.log(regExp2.test(texto)) // true

console.log(regExp1.exec(texto)) // olha no terminal

const found = regExp3.exec(texto)
if (found) {
  console.log(found[0]) // maria, hoje sua esposa
  console.log(found[1]) // maria
  console.log(found[2]) // , hoje sua esposa
}

const found2 = regExp4.exec(texto)
console.log(found2[0]) // luiz, hoje sua esposa
console.log(found2[1]) // luiz
console.log(found2[2]) // , hoje sua esposa