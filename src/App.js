import './App.css';
import {useState} from "react"
import Lower from "./components/lower-segment/lower"
import Upper  from "./components/upper-segment/upper";
import TaskArray from "./components/lower-segment/task-array";

function App() {
  const [Tasks, setTask ] = useState(TaskArray);
  function deleteTask(id){
    console.log("delete ", id);
    setTask(Tasks.filter((task)=> task.id !== id))
  }
  return (
    <div className="App">
    <Upper />
    {Tasks.length > 0 ? <Lower  task={Tasks} onDelete={deleteTask}/> : "No task available"}
    </div>
  );
}

export default App;
