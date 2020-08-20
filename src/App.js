import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'

import  classes from './App.module.scss';
import Layout from './Components/Layout';
import * as actionCreator from './store/index'

const App = () => {
  const dispatch = useDispatch()
let place;
let location
  useEffect(() => {
 place = JSON.parse(localStorage.getItem('place'))
 location = JSON.parse(localStorage.getItem('location'))

 if(place && location){
dispatch(actionCreator.getPlace(place, location))


 }

  },[place, location])
  return (
    <div   className={classes.App}>
     <Layout/>

    </div>
  );
}

export default App;
