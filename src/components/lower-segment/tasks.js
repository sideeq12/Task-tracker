import Design from "./task-design";

const Task = ({tasks, onDelete, toggle }) => {
    
    return ( <div>
{tasks.map((task)=>{
    return <Design reminder={task.reminder} text={task.text} key={task.id} day={task.day} onDelete={onDelete} id={task.id} onToggle={toggle}/>
})}
    </div> );
}

export default Task;
 
