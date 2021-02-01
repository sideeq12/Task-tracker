import Task from "./tasks"

const lower = ({task, onDelete}) => {
    return (  <Task tasks={task} onDelete={onDelete} />);
}
 
export default lower;