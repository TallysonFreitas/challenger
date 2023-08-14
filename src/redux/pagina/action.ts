import { pageActionsType } from './action-type'
import { action } from './reducer'

export const inicialPage = (): action => ({
  type: pageActionsType.INICIAL,
})

export const secondPage = (): action => ({
  type: pageActionsType.SECUNDARIA,
})
