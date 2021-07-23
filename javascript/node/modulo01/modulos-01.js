const nome = 'Renan'
const sobrenome = 'Lima'

const falaNome = () => `${nome} ${sobrenome}`


this.atreladoAoModulo = 'Atrelado ao modulo, exporta junto se for exportado sem o module.exports'

module.exports = {
  falaNome,
  nome,
  sobrenome
}


console.log(module)