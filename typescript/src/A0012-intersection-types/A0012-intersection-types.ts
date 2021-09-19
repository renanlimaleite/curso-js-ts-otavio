// & AND
type TemNome = {
  nome: string
}

type TemSobrenome = {
  sobrenome: string
}

type TemIdade = {
  idade: number
}

type Pessoa = TemNome & TemSobrenome & TemIdade

export const pessoa: Pessoa = {
  idade: 24,
  nome: 'renan',
  sobrenome: 'leite',
}

console.log(pessoa)
