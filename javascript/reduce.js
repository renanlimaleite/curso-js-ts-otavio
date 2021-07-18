const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Eduardo', idade: 23 },
  { nome: 'Fi', idade: 54 },
  { nome: 'Buz', idade: 20 },
  { nome: 'Egg', idade: 68 },
]

const velha = pessoas.reduce((acc, obj) => {
  if (acc.idade > obj.idade) return acc
  return obj
})

console.log(velha)