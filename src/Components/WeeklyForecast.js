import React, { useState, useEffect } from 'react'
import classes from './WeeklyForeCast.module.scss'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import axios from 'axios'

const WeeklyForecast = () => {

    const location = useSelector(state => state.placeReducer.location)


    const [forecastData, setForecastData] = useState(null)
    useEffect(() => {

        if(location){
            let Weatherurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&exclude=hourly,minutely,current&appid=${process.env.REACT_APP_OPEN_WEATHER_API}&units=metric`
           
           
     
            axios.get(Weatherurl)
            .then(res => {
        
                let data = res.data
                setForecastData(data)
               
            })
            .catch(err => {
                console.log(err)
            })
          }

     }, [location])


     
let weatherIcon;
let weekForeCast;

if(forecastData){
    weekForeCast = forecastData.daily.slice(0, 7).map((fd,index) => {

        weatherIcon = fd.weather.map(wd => wd.icon)
        let unix_timestamp = fd.dt
      
        var date = new Date(unix_timestamp * 1000);
        let myDate = new Date(date)
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


        return(
<Col key={index} className={classes.previewForcasts} xs='12' md='2'>
                    <h4>{myDate}</h4>
                    <Row className={classes.previewForcast}>
        <Col className={classes.weeklyWeathers}>Day</Col>
        <Col  className={classes.weeklyWeathers}> <img className={classes.SelectedIcon} src={`/assets/img/weatherIcon/${weatherIcon}.png`} alt={weatherIcon}/></Col>
        <Col  className={classes.weeklyWeathers}>{ Math.floor(fd.temp.day)}°</Col>
        
        </Row>
        <Row className={classes.previewForcast}>
        <Col className={classes.weeklyWeathers}>Night</Col>
        <Col  className={classes.weeklyWeathers}> <img className={classes.SelectedIcon} src={`/assets/img/weatherIcon/${weatherIcon}.png`} alt={weatherIcon}/></Col>
        <Col  className={classes.weeklyWeathers}>{ Math.floor(fd.temp.night)}°</Col>
        
        </Row>
       
        
                
           
            <div className={classes.previewOverlay}></div>
                </Col>
        )
     })
}
     

    return (
        <div className={classes.WeeklyForecastContainer} >
            {weekForeCast? <h3>UPCOMING FORECAST</h3> : null }

{weekForeCast? <Row className={classes.WeeklyForeCast}>
                
               {weekForeCast}
                  </Row> : <div className={classes.pendingForeCast}>
                    <h2>ENTER THE NAME OF A LOCATION TO SEE THE FORECASTS</h2>
                    <div className={classes.pendingForeCastOverlay}></div>
                    </div>}

            
        </div>
    )
}

export default WeeklyForecast
