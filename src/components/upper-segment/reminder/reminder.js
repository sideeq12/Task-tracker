import  "./reminder.css";
import {useState} from "react"
const Reminder = () => {
    const [reminder, setReminder] = useState(false)
    return (  <div className="Inner">
        <label>Set reminder :</label> <input type="checkbox" className="checkbox" onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
    </div>);
}
 
export default Reminder;