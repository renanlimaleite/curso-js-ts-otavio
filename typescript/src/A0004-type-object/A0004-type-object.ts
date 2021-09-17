const objetoA: {
  readonly chaveA: string
  chaveB: string
  chaveC?: string
  [key: string]: unknown
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
}

// objetoA.chaveA = 'Teste'  error, readonly
objetoA.chaveC = 'Oi'
objetoA.chaveD = 'D'

const pessoa = {
  nome: 'Renan' as const,
  sobrenome: 'Lima',
}

/**
 * const pessoa: {
    nome: "Renan";
    sobrenome: string;
}
 */

export { pessoa }
