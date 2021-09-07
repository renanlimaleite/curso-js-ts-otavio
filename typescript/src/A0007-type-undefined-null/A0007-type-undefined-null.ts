export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string
  lastName?: string
} {
  return {
    firstName,
    lastName,
  }
}

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x
  return null
}

const squareTwo = squareOf(2)
const squareString = squareOf('2')

if (squareTwo === null) {
  console.log('conta inválida')
  // console.log(squareTwo * 1000) error (in this context, squareTwo is possibly null)
} else {
  console.log(squareTwo * 1000)
}

console.log({ squareTwo, squareString })
