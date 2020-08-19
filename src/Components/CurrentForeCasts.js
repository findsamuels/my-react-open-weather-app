import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import SelectedLocation from './SelectedLocation'
import SelectedForecast from './SelectedForecast'
import classes from './CurrentForeCasts.module.scss'
import { useSelector } from 'react-redux'
import axios from 'axios'
const CurrentForeCasts = () => {

    const place = useSelector(state => state.placeReducer.place)
    const location = useSelector(state => state.placeReducer.location)

    const [weatherData, setWeatherData] = useState('')
    const [retrievedPlace, setRetrievedPlace] = useState('')


    useEffect(() => {

      if(place != null){
        const {formatted_address} = place
        setRetrievedPlace(formatted_address)
        
      
      }
    }, [place])

     useEffect(() => {

        if(location){
            let Weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}&units=metric`
     
     
            axios.get(Weatherurl)
            .then(res => {
       
                let data = res.data
                setWeatherData(data)
               
            })
            .catch(err => {
                console.log(err)
            })
          }

     }, [location])
    

    

     let myDate = new Date();
     var months = [
       "January",
       "February",
       "March",
       "April",
       "May",
       "June",
       "July",
       "August",
       "September",
       "October",
       "November",
       "December",
     ];

     let day = [
       "Mon",
       "Tue",
       "Wed",
       "Thu",
       "Fri",
       "Sat",
       "Sun"
     ]
     myDate = `${day[myDate.getDay()-1]}, ${myDate.getDate()} ${
       months[myDate.getMonth()]
     }`;
    return (

        <Row className={classes.CurrentForeCasts}>
            <Col md='6'><SelectedLocation
            date={myDate}
            address={retrievedPlace}
            weatherData={weatherData}
            /></Col>
            <Col md='6'> <SelectedForecast
            weatherData={weatherData}
            /></Col>
            
           
        </Row>
    )
}

export default CurrentForeCasts
