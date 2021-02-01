import './App.css';
import {useState} from "react"
import Lower from "./components/lower-segment/lower"
import Upper  from "./components/upper-segment/upper";
import TaskArray from "./components/lower-segment/task-array";

function App() {
  const [Tasks, setTask ] = useState(TaskArray);

  // delete function
  function deleteTask(id){
    setTask(Tasks.filter((task)=> task.id !== id))
  }

  // Reminder toggle function
  function ToggleReminder(id){
    setTask(Tasks.map((task)=> task.id == id ? {...task, reminder : !task.reminder}  : task))
    Tasks.map((task => task.id == id ? console.log(task.reminder) : ""))
    
  }
  return (
    <div className="App">
    <Upper />
    {Tasks.length > 0 ? <Lower  task={Tasks} onDelete={deleteTask} toggle={ToggleReminder}/> : "No task available"}
    </div>
  );
}

export default App;
