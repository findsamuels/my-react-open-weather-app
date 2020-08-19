import {GET_PLACE} from '../actions/PlaceAction'

const initialState = {
    place: null,
    location: null
}

const getPlace = (state, action) => {
    return{
        ...state,
        place: action.place,
        location: action.location
    }
}

export const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLACE:
            return getPlace(state, action)
           
    
        default:
           return state
    }
}