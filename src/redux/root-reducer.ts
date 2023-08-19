import { combineReducers } from '@reduxjs/toolkit'

import paginaReducer from './pagina/reducer'
import PaisReducer from './PaisSelecionado/reducer'

export const rootReducer = combineReducers({ paginaReducer, PaisReducer })
