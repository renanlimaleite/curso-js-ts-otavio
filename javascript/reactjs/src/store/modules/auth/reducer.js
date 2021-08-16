import * as types from '../types'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: null,
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }

    case types.LOGIN_SUCCESS: {
      // const newState = { ...state }
      // newState.isLoggedIn = true
      // newState.token = action.payload.token
      // newState.user = action.payload.user
      // newState.isLoading = false
      // return newState

      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false
      }
    }

    case types.LOGIN_FAILURED: {
      console.log('reducer login failured')
      const newState = { ...initialState }
      return newState
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }

    case types.REGISTER_SUCCESS: {
      const newState = { ...state }
      newState.user.nome = action.payload.nome
      newState.user.email = action.payload.email
      newState.isLoading = false
      return newState
    }

    case types.REGISTER_FAILURED: {
      const newState = { ...state }
      newState.isLoading = false
      return newState
    }

    default:
      return state
  }
}
