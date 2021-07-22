/**
 * MODA ANTIGA, COM CALLBACK. 
 */

// const request = obj => {
//   const xhr = new XMLHttpRequest()
//   xhr.open(obj.method, obj.url, true)
//   xhr.send()
//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.success(xhr.responseText)
//     } else {
//       obj.error(xhr.statusText)
//     }
//   })
// }

// request({
//   method: 'GET',
//   url: 'https://api.github.com/users/renanlimabl',
//   success(response) {
//     console.log(response)
//   },
//   error(err) {
//     console.error(err)
//   }
// })

/**
 * MODO NOVO, COM PROMISES
 */
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send()
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.statusText)
      }
    })
  })
}

/**
 * then, catch...
 */
// request({
//   method: 'GET',
//   url: 'https://api.github.com/users/renanlimabl'
// })
//   .then(response => console.log(response))
//   .catch(err => console.log(err))

/**
 * Async await
 */
async function disparaRequest() {
  const response = await request({
    method: 'GET',
    url: 'https://api.github.com/users/renanlimabl'
  })
  console.log(response)
}

disparaRequest()

