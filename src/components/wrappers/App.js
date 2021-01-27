import React, {useState} from 'react';
import Header from "../Header"
// import {useState} from "react"
import Tasks from '../Task';

function App(){
  
    return(<div className="container">
    <Header  />
    <Tasks />
    </div>)
}

export default App;
