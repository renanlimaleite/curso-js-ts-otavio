function add(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
  return `${x}${y}`
}

console.log(add(10, 20))
console.log(add('Renan', 'Lima'))
