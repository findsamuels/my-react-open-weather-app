import {combineReducers} from 'redux'
import {placeReducer} from './PlaceReducer'

export const rootReducer = combineReducers({
    placeReducer: placeReducer
})