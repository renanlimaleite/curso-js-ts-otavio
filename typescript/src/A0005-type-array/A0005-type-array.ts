// Array<T> ou T[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1)
}

export function concataString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor)
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toLocaleUpperCase())
}

const result = multiplicaArgs(1, 2, 3)
const concatecacao = concataString('Renan', 'Lima')
const upper = toUpperCase('a', 'b', 'c')

console.log({ result, concatecacao, upper })

export { result }
