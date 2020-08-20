import {GET_PLACE, SET_PLACE} from '../actions/PlaceAction'

const initialState = {
    place: null,
    location: null,
    loading: false,
    auth: false
}

const getPlace = (state, action) => {
    return{
        ...state,  
        loading: true
    }
}

const setPlace = (state, action) => {
    return{
        ...state,
        place: action.place,
        location: action.location,
        loading: false,
        auth: true
    }
}

export const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLACE:
            return getPlace(state, action)
            case SET_PLACE:
                return setPlace(state, action)
    
        default:
           return state
    }
}