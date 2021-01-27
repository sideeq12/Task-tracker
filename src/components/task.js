import React from 'react'

const Tasks = ({tasks}) => {
    return ( <div>
        {tasks.map((task)=>{
            return(<h2 key={task.id}>{task.text}</h2>)
        })}
    </div> );
}
 
export default Tasks;