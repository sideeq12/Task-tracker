import React, {useState} from 'react';
import Header from "../Header"
// import {useState} from "react"
import Tasks from '../Task';

function App(){
    const [tasks, setTasks] = useState([
        {
            id : 1,
            reminder : true,
            text : "Appointment with Doctor",
            Day : "February 15th, 2021."
        }, {
            id : 2,
            reminder : false,
            text : "Project Meeting",
            Day : "January 20th, 2021."
        }, 
        {
            id : 3,
            reminder : true,
            text : "Food campaign",
            Day : "February 11th, 2021."
        }
    
    ])
    return(<div className="container">
    <Header  />
    <Tasks  tasks={tasks}/>
    </div>)
}

export default App;
