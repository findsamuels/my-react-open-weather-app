export const GET_PLACE = 'GET_PLACE'
export const SET_PLACE = 'SET_PLACE'

export const getPlace = (place, location) => {
    return{
        type: GET_PLACE,
        place: place,
        location: location
    }
}