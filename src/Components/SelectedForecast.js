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
            console.log(main)
            console.log(wind)
        }

    }, [props.weatherData])
    return (
        <React.Fragment>
<Row className={classes.SelectedForecast}>
           
           <Col className={classes.SelectedForecastCol} xs='6' md='4'> {main?  <span>{main.humidity}%</span> : <span>54%°</span> } Humidity</Col>
           <Col className={classes.SelectedForecastCol} xs='6' md='4'> {main?  <span>{main.pressure}</span> : <span>1011</span> }Pressure</Col>
           <Col className={classes.SelectedForecastCol} xs='6' md='4'> {main?  <span>{main.feels_like}°</span> : <span>18.95°</span> }Feels Like</Col>
           <Col className={classes.SelectedForecastCol} xs='6' md='4'> {wind?  <span>Speed: {wind.speed}</span> : <span>Speed: 5.3</span> }Wind</Col>
           <Col className={classes.SelectedForecastCol} xs='6' md='4'>{main?  <span>{main.temp_max}°</span> : <span>26°</span> }Temp High</Col>
    <Col className={classes.SelectedForecastCol} xs='6' md='4'> {main?  <span>{main.temp_min}°</span> : <span>23.89°</span> }Temp Low</Col>







           <div className={classes.foreCastOverLay}></div>
       </Row>
      
     </React.Fragment>
        
    )
}

export default SelectedForecast
