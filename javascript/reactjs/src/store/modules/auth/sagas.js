/**
 * Call chama algo assincrono
 */
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import * as actions from './actions'
import * as types from '../types'
import api from '../../../services/axios'

function* loginRequestSaga({ payload }) {
  try {
    const response = yield call(api.post, '/tokens', payload)

    yield put(actions.loginSuccess({ ...response.data }))

    toast.success('Vocẽ fez login')

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    payload.history.push(payload.prevPath)
  } catch (e) {
    toast.error('Usuário ou senha inválidos')

    yield put(actions.loginFailured())
  }
}

/**
 * Para persistir o token nos header, com redux persist, da para fazer através desse padrão
 */
// function persistRehydrateSaga({ payload }) {
//   const token = payload?.auth?.token ?? ''
//   if (!token) return
//   api.defaults.headers.Authorization = `Bearer ${token}`
// }

function* registerRequestSaga({ payload }) {
  const { id, nome, email, password } = payload

  try {
    if (id) {
      // Update
      yield call(api.put, '/users', {
        email,
        nome,
        password: password || undefined
      })
      toast.success('Conta alterada com sucesso')
      yield put(actions.registerSuccess({ nome, email, password }))
    } else {
      // Register 14:32
    }
  } catch (e) {
    const errors = e.response.data.erros
    // const status = e?.response?.status ?? 0

    if (errors.length > 0) {
      errors.map((error) => toast.error(error))
    } else {
      toast.error('Erro interno')
    }

    yield put(actions.registerFailured())
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequestSaga),
  takeLatest(types.REGISTER_REQUEST, registerRequestSaga)
  // takeLatest(types.PERSIST_REHYDRATE, persistRehydrateSaga)
])
