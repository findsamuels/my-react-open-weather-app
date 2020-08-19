import React from 'react'
import classes from './Layout.module.scss'
import WeeklyForecast from './WeeklyForecast'
import WeatherSearch from './WeatherSearch'
import CurrentForeCasts from './CurrentForeCasts'

const Layout = () => {
    return (
        <div  className={classes.Layout}>
            <h4 className={classes.weatherHeader}>REACT OPEN WEATHER</h4>
    
    <WeatherSearch />
  <CurrentForeCasts/>
   
    <WeeklyForecast/>
        </div>
    )
}

export default Layout
