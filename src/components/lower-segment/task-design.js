import "./task.css"
import {FaTimes} from "react-icons/fa"

const Design = ({text, day}) => {
    return (  <div>
        <div className="task">
            <h4>{text} <FaTimes /></h4>
            <span>{day}</span>
        </div>
    </div>);
}
 
export default Design;