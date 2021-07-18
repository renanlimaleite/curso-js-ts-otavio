/**
 * Clousures
 * Relacionado ao escopo léxico
 * Nada mais é que a função de dentro ter a habilidade de acessar o escopo léxico
 */

function criarMultiplicador(multiplicador) {
  // multiplicador é lembrado aqui, portanto é uma closure para próxima função.
  return function (number) {
    return number * multiplicador
  }
}

const duplicar = criarMultiplicador(2)
const quadriplicar = criarMultiplicador(4)

console.log(duplicar(2))
console.log(quadriplicar(4))

// Escopo Global
function retornaFuncao() { // parâmetro também é escopo clousure
  // Escopo Clousure 
  const nome = 'Renan'
  return function () {
    // Escopo Script
    return nome
  }
}

const funcao = retornaFuncao()
console.log(funcao)