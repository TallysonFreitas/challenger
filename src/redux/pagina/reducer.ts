import { pageActionsType } from './action-type'

const initialState = {
  currentPage: 'inicial',
}

export type action = {
  type: string
  payload?: string[]
}

const paginaReducer = (state = initialState, action: action) => {
  if (action.type === pageActionsType.INICIAL) {
    return { ...state, currentPage: 'inicial' }
  }
  if (action.type === pageActionsType.SECUNDARIA) {
    return { ...state, currentPage: 'secundaria' }
  }
  return state
}

export default paginaReducer
