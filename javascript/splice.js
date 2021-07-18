/**
 * array.splice(indice, qnt, ...itens: opcional)
 * 
 * Curiosidade: para remover todos:
 * 
 * nomes.splice(indice, Number.MAX_VALUE)
 */

//               -4       -3       -2        -1
//                0        1        2         3
const nomes = ['Renan', 'Lima', 'Barreto', 'Leite']
const nomes2 = ['Renan', 'Lima', 'Barreto', 'Leite']

const removidos = nomes.splice(-2, 1)

const adicionar = nomes2.splice(1, 0, 'Outro Sobrenome')

console.log(nomes, removidos) // [ 'Renan', 'Lima', 'Leite' ] [ 'Barreto' ]
console.log(nomes2, adicionar) // [ 'Renan', 'Outro Sobrenome', 'Lima', 'Barreto', 'Leite' ] []