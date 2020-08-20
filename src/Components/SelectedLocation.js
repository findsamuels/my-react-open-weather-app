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
   
     {props.address? <h1>{props.address}</h1> : <h1>Lanzarote Spain</h1> }
            <p>{props.date}</p>
            </div>
            <div  className={classes.selectedForcast}>
                {weather?  <img className={classes.SelectedIcon} src={`/assets/img/weatherIcon/${weatherIcon}.png`} alt={weatherIcon}/> : 
                  <img className={classes.SelectedIcon} src={`/assets/img/weatherIcon/01d.png`} alt={weatherIcon}/>  }

        
<h2 className={classes.selectedTemperature}> {weather? Math.floor(main.temp) + '°' : '24°'}  <span> { weatherD? weatherD :  'Sunny Spells'}</span></h2>
    </div>
            
        </div>
    )
}

export default SelectedLocation
