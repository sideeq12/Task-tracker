import './App.css';
import {useState} from "react"
import Lower from "./components/lower-segment/lower"
import Upper  from "./components/upper-segment/upper";
import TaskArray from "./components/lower-segment/task-array";

function App() {
  const [Tasks, setTask ] = useState(TaskArray)
  return (
    <div className="App">
    <Upper />
    <Lower  task={Tasks}/>
    </div>
  );
}

export default App;
