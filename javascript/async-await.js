function aleatorio(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAiPromise(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new Error('Bad value in promise'))
    }

    setTimeout(() => {
      // console.log(msg)
      resolve(msg)
    }, tempo)
  })
}

// esperaAiPromise('Fase 1', aleatorio(0, 3))
//   .then(r => {
//     console.log(r)
//     return esperaAiPromise('Fase 2', aleatorio(0, 3))
//   })
//   .then(r => {
//     console.log(r)
//     return esperaAiPromise('Fase 3', aleatorio(0, 3))
//   })
//   .then(r => {
//     console.log(r)
//   })
//   .catch(e => {
//     console.log(e)
//   })

/**
 * Pendente
 * fullfilled -> resolvida
 * rejected
 */

async function executa() {
  try {
    const fase1 = await esperaAiPromise('Fase 1', aleatorio(0, 3))
    console.log(fase1)

    const fase2 = await esperaAiPromise('Fase 2', aleatorio(0, 3))
    console.log(fase2)

    const fase3 = await esperaAiPromise('Fase 3', aleatorio(0, 3))
    console.log(fase3)
  } catch (e) {
    console.log(e)
  }
}
executa()