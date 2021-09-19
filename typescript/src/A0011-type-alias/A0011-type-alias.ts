type Idade = number

type Pessoa = {
  nome: string
  idade: Idade
  salario: number
  corPreferida?: string
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYM = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'

type CorPreferida = CorRGB | CorCMYM

const pessoa: Pessoa = {
  nome: 'Renan',
  idade: 24,
  salario: 10000,
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {
    ...pessoa,
    corPreferida: cor,
  }
}

console.log(setCorPreferida(pessoa, 'Preto'))

export { pessoa }
