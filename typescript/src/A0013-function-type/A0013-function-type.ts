type mapCallback = (item: string) => string

function mapString(array: string[], callbackfn: mapCallback): string[] {
  const tmpArray: string[] = []
  for (let i = 0; i < array.length; i++) {
    tmpArray.push(callbackfn(array[i]))
  }
  return tmpArray
}

const abc = ['a', 'b', 'c']

const abcMapped = mapString(abc, function (item) {
  return item.toUpperCase()
})

console.log(abcMapped)
