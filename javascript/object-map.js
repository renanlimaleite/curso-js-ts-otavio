const pessoas = [
  { id: 3, nome: 'João' },
  { id: 2, nome: 'Helena' },
  { id: 1, nome: 'Maria' },
]

// const novasPessoas = {}
// for (const pessoa of pessoas) {
//   const { id } = pessoa
//   novasPessoas[id] = { ...pessoa }
// }
// console.log(novasPessoas)
// 2 problemas, 1 a key veio como string, e o 2 = veio na ordem contrária.
// { 
//   '1': { id: 1, nome: 'Maria' },
//   '2': { id: 2, nome: 'Helena' },
//   '3': { id: 3, nome: 'João' } 
// }

const novasPessoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}

console.log(novasPessoas)

// Permanenceu igual com Map
// Map { 
//   3 => { id: 3, nome: 'João' },
//   2 => { id: 2, nome: 'Helena' },
//   1 => { id: 1, nome: 'Maria' } }

/**
 * Única diferença é na hora de obter, que precisamos utilizar o get.
 */
console.log(novasPessoas.get(2)) //{ id: 2, nome: 'Helena' }
/**
 * Também podemos interar sobre.
 */
console.log('--- Interando com destructuring')
for (const [idFora, { id, nome }] of novasPessoas) {
  console.log(idFora, id, nome)
}
console.log('--- Interando pegando chaves')
for (const pessoas of novasPessoas.keys()) {
  console.log(pessoas)
}

console.log('--- Interando pegando valores')
for (const pessoas of novasPessoas.values()) {
  console.log(pessoas)
}

const pessoas2 = [
  { id: 3, nome: 'João' },
  { id: 2, nome: 'Helena' },
  { id: 1, nome: 'Maria' },
]

const novas = pessoas2.map(pessoa => {
  const { id } = pessoa
  return {
    [id]: pessoa
  }
})
console.log(novas.map(item => parseInt(item)))