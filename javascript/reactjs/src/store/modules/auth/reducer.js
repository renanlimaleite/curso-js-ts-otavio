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
      console.log('reducer failured')
      const newState = { ...initialState }
      return newState
    }

    default:
      return state
  }
}
