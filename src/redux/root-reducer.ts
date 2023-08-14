import { combineReducers } from '@reduxjs/toolkit'

import paginaReducer from './pagina/reducer'

export const rootReducer = combineReducers({ paginaReducer })
