import React, { useState, useEffect } from 'react'
import classes from './SelectedForecast.module.scss'
import {Row, Col } from 'react-bootstrap'
const SelectedForecast = props => {

    const [main, setMain] = useState('')
    const [wind, setWind] = useState('') 
   

    useEffect(() => {

        if(props.weatherData){
            const {main, wind} = props.weatherData
    
            setMain(main)
            setWind(wind)
         
        }

    }, [props.weatherData])
  
    return (
        <React.Fragment>
<Row className={classes.SelectedForecast}>
           
           <Col className={classes.SelectedForecastCol} xs='6' md='4'> { main.humidity ? <span>{main.humidity + '%' }</span> : null}  Humidity</Col>
           <Col className={classes.SelectedForecastCol} xs='6' md='4'>  {main.pressure? <span>{main.pressure}</span> : null} Pressure</Col>
           <Col className={classes.SelectedForecastCol} xs='6' md='4'> {main.feels_like && <span>{Math.floor(main.feels_like )+ '°'}</span>}  Feels Like</Col>
           <Col className={classes.SelectedForecastCol} xs='6' md='4'> {wind.speed &&  <span>Speed: {wind.speed}</span>} Wind</Col>
           <Col className={classes.SelectedForecastCol} xs='6' md='4'> {main.temp_max && <span>{Math.floor(main.temp_max)+ '°'}</span>} Temp High</Col>
    <Col className={classes.SelectedForecastCol} xs='6' md='4'> {main.temp_min && <span>{Math.floor(main.temp_min)+ '°'}</span>  } Temp Low</Col>







           <div className={classes.foreCastOverLay}></div>
       </Row>
      
     </React.Fragment>
        
    )
}

export default SelectedForecast
