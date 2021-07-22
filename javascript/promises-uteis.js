/**
 * Promise.all()
 * Promise.race()
 * Promise.resolve()
 * Promise.reject()
 */

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


const promises = [
  esperaAiPromise('Promise 1', 3000),
  esperaAiPromise('Promise 2', 500),
  esperaAiPromise('Promise 3', 1000),
]

// Promise.all() -> Resolve e retorna na ordem certinha.
Promise.all(promises)
  .then(values => {
    console.log(values, '--- Promise.all()')
  })
  .catch(e => {
    console.log(e)
  })

// Promise.race() -> Resolve e retorna a primeira que resolver.
Promise.race(promises)
  .then(values => {
    console.log(values, '--- Promise.race()')
  })
  .catch(e => {
    console.log(e)
  })

// Promise.resolve() e Promise.reject()
function baixaPagina() {
  const emCache = true

  if (typeof emCache !== 'boolean') {
    Promise.reject(new Error('Em cache precisa ser error.')) // cai no catch.
  }

  if (emCache) {
    return Promise.resolve('Página em cache')
  }

  return esperaAiPromise('Baixei a página', 1000)
}

baixaPagina()
  .then(dados => console.log(dados, '--- Promise.resolve()'))
  .catch(e => console.log(e))