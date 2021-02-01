import "./task.css"
import {FaTimes} from "react-icons/fa"

const Design = ({text, day, onDelete, id}) => {
    return (  <div>
        <div className="task">
            <h4>{text} <FaTimes  style={{marginLeft : "20px", color : "red", cursor : "pointer"}} onClick={()=>onDelete(id)}/></h4>
            <span>{day}</span>
        </div>
    </div>);
}
 
export default Design;