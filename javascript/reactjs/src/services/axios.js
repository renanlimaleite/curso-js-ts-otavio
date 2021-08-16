import axios from 'axios'

const api = axios.create({
  baseURL: 'https://renanlimaleite.com'
})

function getToken() {
  const persisStorage = JSON.parse(localStorage.getItem('persist:@consumo-api'))
  const { token } = JSON.parse(persisStorage.auth)
  return token
}

/**
 * Também da para colocar no headers dessa forma.
 */
api.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    console.log('oi')
  }
  return config
})

export default api
