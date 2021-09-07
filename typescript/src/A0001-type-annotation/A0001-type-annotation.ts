/* eslint-disable */

let nome: string = 'Renan'
let idade: number = 24
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol')
// let big: bigint = 10

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]

let arrayDeString: Array<string> = ['Renan', 'Lima']
let arrayDeString2: string[] = ['Renan', 'Lima']


// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Renan',
  idade: 20,
  adulto: true
}

// Função
function soma(x: number, y: number) {
  return x + y
}
// Arrow
const soma2: (x: number, y: number) => number = (x, y) => x + y

const result = soma(2, 2)
