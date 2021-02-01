import Task from "./tasks"

const lower = ({task, onDelete, toggle}) => {
    return (  <Task tasks={task} onDelete={onDelete} toggle={toggle} />);
}
 
export default lower;