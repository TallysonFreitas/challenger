import { action } from '../pagina/reducer'
import { PaisActionType } from './action-type'

const initialState = {
  pais: [],
}

const PaisReducer = (state = initialState, action: action) => {
  if (action.type === PaisActionType.Pais) {
    return { ...state, pais: action.payload }
  }
  return state
}

export default PaisReducer
