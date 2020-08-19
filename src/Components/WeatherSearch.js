import React from 'react'
import Input from './UI/Input'
import classes from './WeatherSearch.module.scss'
import Autocomplete from 'react-google-autocomplete'
import Geocode from 'react-geocode'
import {useDispatch} from 'react-redux'
import * as actionCreators from '../store/index'


const WeatherSearch = () => {

 const dispatch = useDispatch()


 let myApiKey = process.env.REACT_APP_PLACES_API
 
 Geocode.setApiKey(myApiKey);
 const getAutoComplete = (place) => {

        const {formatted_address} = place
       let location = {
            lat: '',
            lng: ''
        }


        Geocode.fromAddress(formatted_address).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              location.lat = lat
              location.lng = lng
              dispatch(actionCreators.getPlace(place, location))
           
           
            },
            error => {
              console.error(error);
            }
          );

          
    }
    return (
        <div className={classes.WeatherSearch}>

<Autocomplete 
apiKey={myApiKey}
    style={{width: '90%'}}
   
    onPlaceSelected={(place) => getAutoComplete(place)}
    types={['(regions)']}
/>
        </div>
     
    )
}

export default WeatherSearch
