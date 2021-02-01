import Design from "./task-design";

const Task = ({tasks, onDelete}) => {
    return ( <div>
{tasks.map((task)=>{
    return <Design  text={task.text} key={task.id} day={task.day} onDelete={onDelete} id={task.id}/>
})}
    </div> );
}

export default Task;
 
