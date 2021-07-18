function* generation() {
  yield 'Valor 1'
  yield 'Valor 2'
  yield 'Valor 3'
}

const g1 = generation()

// next() é nativo
console.log(g1.next().value) // value = 'Valor 1' | done = false
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next()) // value = undefined | done = true

// Utilizando for of, ele sabe o que ela retorna.
const g2 = generation()
for (let valor of g2) {
  console.log(valor, 'for of')
}

// Gerador infinito
function* contador() {
  let i = 0;
  while (true) {
    yield i;
    i++
  }
}

const g3 = contador()
console.log(g3.next().value) // 0
console.log(g3.next().value) // 1
console.log(g3.next().value) // 2 ...


function* delegar() {
  yield 0;
  yield 1;
  yield 2;
}

function* continuarDelegar() {
  yield* delegar()
  yield 3
  yield 4
}

const g4 = continuarDelegar()
console.log(g4.next().value) // 0
console.log(g4.next().value) // 1
console.log(g4.next().value) // 2 até aqui é a primeira função
console.log(g4.next().value) // 3 a partir daqui ele herda a função delegar
console.log(g4.next().value) // 4


// Exemplo com função

function* fnYield() {
  yield function () {
    console.log('1º')
  }
  yield function () {
    console.log('2º')
  }
}

const g5 = fnYield()
const f1 = g5.next().value
const f2 = g5.next().value
f1()
f2()

