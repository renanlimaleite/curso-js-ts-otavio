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
