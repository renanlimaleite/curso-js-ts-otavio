// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número digito for maior que 9, consideramos 0.

705.484.450-52 === 705.484.450-52 (válido)
*/
function ValidarCPF(nums) {
  const [digitos, verificador] = nums.split('-')
  const digitosInArray = digitos.split('.').join('').split('')

  let index = 10;
  let sum = 0;

  for (valor of digitosInArray) {
    if (index === 1) break
    sum += valor * index
    index--
  }
  // 1º DIGITO
  const firstDigit = 11 - (sum % 11) > 9 ? 0 : 11 - (sum % 11)

  let index2 = 11
  let sum2 = 0;
  digitosInArray.push(firstDigit)

  for (valor of digitosInArray) {
    if (index2 === 1) break
    sum2 += valor * index2
    index2--
  }
  // 2º DIGITO
  const secondDigit = 11 - (sum2 % 11) > 9 ? 0 : 11 - (sum2 % 11)

  if (verificador === `${firstDigit}${secondDigit}`) {
    console.log('CPF VÁLIDO')
  } else {
    console.log('CPF INVÁLIDO')
  }
}

ValidarCPF('024.153.932-31')
ValidarCPF('743.398.267-15')


