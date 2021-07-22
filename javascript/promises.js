function aleatorio(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAiCB(msg, tempo, cb) {
  setTimeout(() => {
    console.log(msg)
    if (cb) {
      cb()
    }
  }, tempo)
}


/**
 * Utilizando callbacks.
 */
esperaAiCB('Frase 1', aleatorio(1, 3), () => {
  esperaAiCB('Frase 2', aleatorio(1, 3), () => {
    esperaAiCB('Frase 3', aleatorio(1, 3))
  })
})


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

esperaAiPromise('Frase promise 1', aleatorio(1, 3))
  .then(msg => {
    console.log(msg)
    return esperaAiPromise(22, aleatorio(1, 3))
  })
  .then(msg => {
    console.log(msg)
    return esperaAiPromise('Frase promise 3', aleatorio(1, 3))
  })
  .then(msg => {
    console.log(msg)
  })
  .then(() => {
    console.log('Exit Promise')
  })
  .catch(e => console.log(e))
