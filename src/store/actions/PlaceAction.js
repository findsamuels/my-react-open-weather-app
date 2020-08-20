export const GET_PLACE = 'GET_PLACE'
export const SET_PLACE = 'SET_PLACE'

export const getPlace = (place, location) => {

    localStorage.setItem('place', JSON.stringify(place))
    localStorage.setItem('location',JSON.stringify(location))

    return dispatch => {
        dispatch(setPlace(place, location))
    }
    
}

export const setPlace = (place, location) => {

    return{
        type: SET_PLACE,
        place: place,
        location: location
    }
}