import * as types from '../types'

const initialState = {
  botaoClicado: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('success')
      const newState = { ...state }

      newState.botaoClicado = !newState.botaoClicado

      return newState
    }
    case types.BOTAO_CLICADO_FAILURED: {
      console.log('deu erro :(')

      return state
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('estou fazendo request')
      return state
    }
    default:
      return state
  }
}
