import Design from "./task-design";

const Task = ({tasks}) => {
    return ( <div>
{tasks.map((task)=>{
    return <Design  text={task.text} day={task.day}/>
})}
    </div> );
}

export default Task;
 
