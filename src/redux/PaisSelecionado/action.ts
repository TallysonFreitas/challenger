import { action } from '../pagina/reducer'
import { PaisActionType } from './action-type'

export const PaisSelecionado = (payload: string[]): action => ({
  type: PaisActionType.Pais,
  payload,
})
