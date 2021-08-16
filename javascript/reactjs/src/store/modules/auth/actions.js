import * as types from '../types'

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload
  }
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload
  }
}

export function loginFailured(payload) {
  return {
    type: types.LOGIN_FAILURED,
    payload
  }
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload
  }
}

export function registerSuccess(payload) {
  return {
    type: types.REGISTER_SUCCESS,
    payload
  }
}

export function registerFailured(payload) {
  return {
    type: types.REGISTER_FAILURED,
    payload
  }
}
