/**
 * Object Date
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

const data = new Date()

console.log(data) // 2021-07-16T17:01:24.163Z
console.log(data.toString()) // Fri Jul 16 2021 14:01:24 GMT-0300 (Horário Padrão de Brasília)

const data2 = new Date(2021, 6, 20, 15, 14, 27) // a, m, d h, M, s, ms
console.log(data2.toString())

const data3 = new Date('2021-07-16 14:09:10.100')
console.log(data3)

const timeStamp = new Date(Date.now())

console.log(timeStamp)

const allData = new Date('2021-07-16 14:09:00')
console.log('Dia', allData.getDate())
console.log('Mes', allData.getMonth() + 1) // mês começa do zero
console.log('Ano', allData.getFullYear())
console.log('Hora', allData.getHours())
console.log('Min', allData.getMinutes())
console.log('Seg', allData.getSeconds())
console.log('ms', allData.getMilliseconds())
console.log('Semana', allData.getDay()) // 0 - Domingo, 6 - Sábado


/**
 * Formatar Data
 */

/**
 * Zero from Left:
 * @number O retorno de uma data, ex: date.getDate()
 * 
 * Serve para verificar se o número da data possui apenas um digito, caso tenha 1 digitio, será adicionado um 0 a esquerda.
 */
function zeroFromLeft(number) {
  return number >= 10 ? number : `0${number}`
}

function formatDate(date) {
  const dia = zeroFromLeft(date.getDate())
  const mes = zeroFromLeft(date.getMonth() + 1)
  const ano = zeroFromLeft(date.getFullYear())
  const hora = zeroFromLeft(date.getHours())
  const min = zeroFromLeft(date.getMinutes())
  const seg = zeroFromLeft(date.getSeconds())

  return `Hoje é: ${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const date = new Date()
const dataBrasil = formatDate(date)
console.log('Function formatDate: ', dataBrasil)