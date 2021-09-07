const dadosCliente1: readonly [number, string] = [1, 'Renan']
const dadosCliente2: [number, string, boolean] = [1, 'Renan', true]
const dadosCliente3: [number, string, boolean, ...string[]] = [
  1,
  'Renan',
  true,
  'Lima',
  'Barreto',
  'Leite',
]

// dadosCliente1.pop() error, readonly

console.log({ dadosCliente1, dadosCliente2, dadosCliente3 })
