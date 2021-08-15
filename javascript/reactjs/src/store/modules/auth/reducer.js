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
      console.log('reducer request', action.payload)
      return state
    }

    case types.LOGIN_SUCCESS: {
      const newState = { ...state }
      newState.isLoggedIn = true
      newState.token = action.payload.token
      newState.user = action.payload.user
      console.log('reducer success', action.payload)
      return newState
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
