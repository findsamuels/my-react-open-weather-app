import React from 'react';
import weatherBack from './assets/img/weatherBack.jpg'

import  classes from './App.module.scss';
import Layout from './Components/Layout';

function App() {
  return (
    <div style={{backgroundImage: `url(${weatherBack})`}}  className={classes.App}>
     <Layout/>

    </div>
  );
}

export default App;
