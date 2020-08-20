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
    const auth = useSelector(state => state.placeReducer.auth)


    const [weatherData, setWeatherData] = useState('')
    const [retrievedPlace, setRetrievedPlace] = useState('')


    useEffect(() => {

      if(auth){
        const {formatted_address} = place
        setRetrievedPlace(formatted_address)
        
      
      }
    }, [place, auth])

     useEffect(() => {

        if(auth){
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

     }, [location, auth])
    

    

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
          {auth ? <React.Fragment><Col md='6'><SelectedLocation
            date={myDate}
            address={retrievedPlace}
            weatherData={weatherData}
            /></Col>
            <Col md='6'> <SelectedForecast
            weatherData={weatherData}
            /></Col> </React.Fragment> : <div className={classes.pendingForeCast}>
            <h2>ENTER A LOCATION TO SEE THE TODAY'S FORECAST</h2>
            <div className={classes.pendingForeCastOverlay}></div>
            </div>}
            
            
           
        </Row>
    )
}

export default CurrentForeCasts
