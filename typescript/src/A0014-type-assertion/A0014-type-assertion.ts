// Uma condicional...
const body = document.querySelector('body')
if (body) body.style.background = 'red'

// A exclamação quer dizer que não pode ser nulo, porém eslint da erro.
// Non-null assertion (!)
const body2 = document.querySelector('body')!
body2.style.background = 'red'

// Error
// const body4 = document.querySelector('body') as number
// Gambiarra monstra pra funcionar, mas nunca utiliza-se
// const body4 = (document.querySelector('body') as unknown) as number
// body4.style.background = 'red'

/**
 * RECOMENDADOS
 */

// A mais utilizada no caso...
// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'red'

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement
input.value = 'Qlqr coisa'
input.focus()
