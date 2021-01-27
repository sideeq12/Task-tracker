import React, {useState} from 'react'


const Tasks = () => {
    const [tasks, setTask]= useState([
        {
            id : 1,
            reminder : true,
            text : "Appointment with Doctor",
            Date : "February 15th, 2021."
        }, {
            id : 2,
            reminder : false,
            text : "Project Meeting",
            Date : "January 20th, 2021."
        }, 
        {
            id : 3,
            reminder : true,
            text : "Food campaign",
            Date : "February 11th, 2021."
        }
    ])
    return ( <div>
        {tasks.map((task)=>{
            return(<h2 key={task.id}>{task.text}</h2>)
        })}
    </div> );
}
 
export default Tasks;