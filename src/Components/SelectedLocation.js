import React from 'react'
import classes from './SelectedLocation.module.scss'

const SelectedLocation = props => {

 
  
    let weatherD;
    let weatherIcon;
   const {main, weather} = props.weatherData
 
   if(weather){
       weatherD = weather.map( wd => wd.description)
       weatherIcon = weather.map(wd => wd.icon)

   }


    return (
        <div className={classes.SelectedLocation}>
            <div className={classes.SelectedLocationText}>
   
     {props.address? <h1>{props.address}</h1> : null }
          {props.address? <p>{props.date}</p> : null }  
            </div>
            <div  className={classes.selectedForcast}>
                {weather?  <img className={classes.SelectedIcon} src={`/assets/img/weatherIcon/${weatherIcon}.png`} alt={weatherIcon}/> : 
                 null }

        
<h2 className={classes.selectedTemperature}> {weather? Math.floor(main.temp) + '°' : null}  <span> { weatherD? weatherD :  null}</span></h2>
    </div>
            
        </div>
    )
}

export default SelectedLocation
