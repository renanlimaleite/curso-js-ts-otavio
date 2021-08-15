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

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequestSaga)
  // takeLatest(types.PERSIST_REHYDRATE, persistRehydrateSaga)
])
