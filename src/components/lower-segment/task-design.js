import "./task.css"

const Design = ({text, day}) => {
    return (  <div>
        <div className="task">
            <h4>{text}</h4>
            <span>{day}</span>
        </div>
    </div>);
}
 
export default Design;