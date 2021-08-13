/**
 * Call chama algo assincrono
 */

import { call, put, all, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from '../types'

const requisicao = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('2 secs')
      resolve()
    }, 2000)
  })
}

function* exampleRequest() {
  try {
    yield call(requisicao)
    yield put(actions.clicaBotaoSuccess())
  } catch (e) {
    yield put(actions.clicaBotaoFailured())
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)])
